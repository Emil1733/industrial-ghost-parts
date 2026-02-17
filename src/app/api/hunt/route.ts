import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';
import { PARTS_DATABASE } from '@/lib/parts';

/**
 * INTEL MAPPING HEURISTICS
 * Maps descriptive downtime impacts to industry-standard financial loss tiers.
 */
function mapDescriptionToLoss(description: string, defaultLoss: string): number {
  const desc = description.toLowerCase();
  
  // High Tier: Total Facility/Production Stop
  if (desc.includes("plant") || desc.includes("facility") || desc.includes("entire") || desc.includes("total")) {
    if (desc.includes("stop") || desc.includes("dark") || desc.includes("offline")) return 50000;
  }
  
  // Mid Tier: Line/Process Stopped
  if (desc.includes("line") || desc.includes("process") || desc.includes("assembly") || desc.includes("machine")) {
    if (desc.includes("stop") || desc.includes("down") || desc.includes("halt")) return 15000;
  }
  
  // Low Tier: Redundancy Lost / Risk
  if (desc.includes("redundancy") || desc.includes("spare") || desc.includes("backup") || desc.includes("risk")) {
    return 2000;
  }

  // Fallback to database default if available, otherwise a conservative benchmark
  const numericDefault = parseInt(defaultLoss.replace(/[^0-9]/g, '')) || 5000;
  return numericDefault;
}

export async function POST(req: Request) {
  try {
    const { leadId, partId, description } = await req.json();

    const part = PARTS_DATABASE[partId];
    if (!part) return NextResponse.json({ error: "Part not found" }, { status: 404 });

    // 1. Intel Mapping: Description -> $ Loss/Hr
    const lossPerHour = mapDescriptionToLoss(description, part.downtimeCostPerHour);

    // 2. Real-Time Scarcity Scan (eBay Simulation)
    // In a real environment, this would call Moltworker or a secure scraping microservice
    const marketPrice = parseInt(part.replacementCost.split("-")[0].replace(/[^0-9]/g, '')) || 5000;
    const expressShipping = 500;
    
    // 3. Recovery Spread Calculation
    // We assume 48 hours of downtime is the recovery window for an "Emergency Audit"
    const recoverySpread = (lossPerHour * 48) - (marketPrice + expressShipping);
    const arbitrageScore = Math.max(0, recoverySpread / 1000).toFixed(2);

    // 4. Persistence: Update Lead with Arbitrage Intelligence
    if (process.env.NEXT_PUBLIC_SUPABASE_URL && process.env.NEXT_PUBLIC_SUPABASE_URL !== 'your-project-url.supabase.co') {
      await supabase
        .from('leads')
        .update({
          arbitrage_score: parseFloat(arbitrageScore),
          recovery_spread: recoverySpread,
          loss_estimate: lossPerHour,
          market_signals: {
            source: "eBay/Radwell (Simulated)",
            market_price: marketPrice,
            velocity: "CRITICAL",
            mapped_impact: lossPerHour > 20000 ? "TOTAL_STOP" : "PROCESS_INTERRUPT"
          }
        })
        .eq('id', leadId);
    }

    console.log(`[PART HUNTER] Lead ${leadId} processed. Spread: $${recoverySpread.toLocaleString()} | Score: ${arbitrageScore}`);

    return NextResponse.json({
      success: true,
      arbitrageScore,
      recoverySpread,
      lossPerHour
    });

  } catch (error: any) {
    console.error("[PART HUNTER] Fail:", error);
    return NextResponse.json({ error: "Internal Analysis Failure" }, { status: 500 });
  }
}
