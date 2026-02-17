import { NextResponse } from 'next/server';

const WORKER_URL = "https://moltworker-test.vessel-audit-bot.workers.dev";

export async function POST(request: Request) {
  try {
    console.log("Moltworker (Web): Starting Deep Scan...");
    const { partId } = await request.json();

    if (!partId) {
      return NextResponse.json({ error: 'Part ID required' }, { status: 400 });
    }

    console.log(`Moltworker: Contacting Ghost Agent for ${partId}...`);

    // 1. Forward request to Cloudflare Worker
    const workerResponse = await fetch(WORKER_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ partId })
    });

    if (!workerResponse.ok) {
        console.error(`Moltworker: Agent responded with ${workerResponse.status}`);
        return NextResponse.json({ 
            success: false, 
            message: "Ghost Agent unreachable." 
        });
    }

    const agentData = await workerResponse.json();
    console.log("Moltworker: Agent Data Received", agentData);

    // 2. Map Worker Response to Application Schema
    // Worker: { targetPart, marketSupply, recommendation, arbitrageScore, visionOutput, ... }
    
    // Criticality Mapping
    let mappedCriticality = "MEDIUM";
    if (agentData.recommendation === "AVOID") mappedCriticality = "HIGH RISK (Do Not Buy)";
    if (agentData.recommendation === "BUY") mappedCriticality = "LOW (High Availability)";
    
    // Construct Standardized Part Object
    const extractedData = {
        id: agentData.targetPart || partId,
        name: `Web Scan: ${agentData.visionOutput || partId}`,
        manufacturer: "Multi-Source (Web)",
        system: "Global Inventory",
        discontinuedYear: "Unknown",
        criticality: mappedCriticality,
        replacementCost: "Market Price Variable", // Worker didn't return price in sample
        downtimeCostPerHour: "Calculated Dynamically",
        specs: [
            { label: "Market Supply", value: `${agentData.marketSupply} units found` },
            { label: "Arbitrage Score", value: agentData.arbitrageScore?.toString() || "N/A" },
            { label: "AI Recommendation", value: agentData.recommendation || "Neutral" },
            { label: "Scan Source", value: "Cloudflare Web Scraper" }
        ],
        market_signals: agentData // Pass through raw data for advanced UI if needed
    };

    return NextResponse.json({
        success: true,
        source: "Moltworker Web Scout",
        part: extractedData
    });

  } catch (error) {
    console.error("Moltworker (Web) Failure:", error);
    return NextResponse.json(
      { error: 'Web Scan Failed', details: error instanceof Error ? error.message : String(error) }, 
      { status: 500 }
    );
  }
}
