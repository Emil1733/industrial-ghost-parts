import {
  ShieldCheck,
  Globe,
  Lock,
  ArrowRight,
  AlertTriangle,
} from "lucide-react";
import { PartAuditData } from "@/lib/parts";

interface GhostInventoryCardProps {
  part: PartAuditData;
  marketSignals: any;
  onRequestInvoice: () => void;
}

export default function GhostInventoryCard({
  part,
  marketSignals,
  onRequestInvoice,
}: GhostInventoryCardProps) {
  // Mock markup calculation if price is simulated, otherwise show "Request Quote"
  // For this alpha, we'll confirm availability and ask for invoice interaction.

  const availability = marketSignals?.marketSupply || "Limited";

  return (
    <div className="w-full bg-panel border-2 border-emerald-500/30 hover:border-emerald-500/50 transition-colors p-6 shadow-[0_0_30px_rgba(16,185,129,0.1)] relative overflow-hidden group h-full flex flex-col justify-between min-h-[500px]">
      {/* Background Tech Mesh */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(16,185,129,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.05)_1px,transparent_1px)] bg-[size:20px_20px]" />
      
      <div className="relative z-10 flex flex-col gap-8 h-full">
        {/* Header Badge */}
        <div className="flex items-center justify-between border-b border-white/10 pb-4">
          <div className="flex items-center gap-3">
            <div className="bg-emerald-500/20 p-2 rounded-full ring-1 ring-emerald-500/30">
              <Globe className="w-5 h-5 text-emerald-400 animate-pulse" />
            </div>
            <div className="flex flex-col">
              <h2 className="font-mono text-[10px] font-bold uppercase tracking-widest text-emerald-400 leading-tight">
                Global Network Match
              </h2>
              <span className="font-mono text-[8px] text-emerald-500/60 uppercase tracking-wider">
                Source: {part.manufacturer === "Multi-Source (Web)" ? "Authorized Broker" : "Moltworker Archive"}
              </span>
            </div>
          </div>
          <div className="flex items-center gap-1.5 bg-emerald-900/40 px-3 py-1.5 rounded border border-emerald-500/30 backdrop-blur-sm">
             <ShieldCheck className="w-3 h-3 text-emerald-400" />
             <span className="font-mono text-[9px] uppercase text-emerald-400 font-bold tracking-wider">Verified</span>
          </div>
        </div>

        {/* Core Intel */}
        <div className="flex flex-col gap-6">
          <div className="grid grid-cols-2 gap-8 relative">
            {/* Vertical Divider */}
            <div className="absolute left-1/2 top-2 bottom-2 w-px bg-white/10" />

            <div className="flex flex-col gap-1">
              <span className="font-mono text-[9px] uppercase text-emerald-400/70 tracking-widest pl-1">Global Availability</span>
              <div className="flex flex-col">
                <span className={`font-display font-black text-white leading-none tracking-tight ${
                  isNaN(Number(availability)) ? "text-3xl uppercase" : "text-5xl"
                }`}>
                  {availability}
                </span>
                <span className="text-[10px] text-muted font-mono uppercase tracking-widest font-medium mt-1 pl-1">units available</span>
              </div>
            </div>
            
            <div className="flex flex-col gap-3 pl-2">
              <span className="font-mono text-[9px] uppercase text-emerald-400/70 tracking-widest">Market Condition</span>
              <div className="flex flex-col gap-2">
                 {part.criticality.includes("HIGH") ? (
                    <span className="bg-amber-500/10 border border-amber-500/20 px-3 py-2 rounded text-amber-500 font-mono text-[10px] font-bold flex items-center gap-2 shadow-[0_0_15px_rgba(245,158,11,0.1)] uppercase tracking-wider w-fit">
                      <AlertTriangle className="w-3 h-3" /> Volatile
                    </span>
                 ) : (
                    <span className="bg-emerald-500/10 border border-emerald-500/20 px-3 py-2 rounded text-emerald-500 font-mono text-[10px] font-bold shadow-[0_0_15px_rgba(16,185,129,0.1)] uppercase tracking-wider w-fit">Stable</span>
                 )}
                 <span className="font-mono text-[8px] text-muted/80 uppercase tracking-widest">
                   Arbitrage Score: {marketSignals?.arbitrageScore || "0.00"}
                 </span>
              </div>
            </div>
          </div>
        </div>

        {/* Vertical Stack Action Terminal */}
        <div className="flex flex-col gap-4 mt-auto">
          {/* Data Row */}
          <div className="flex justify-between items-center px-1">
             <span className="font-mono text-[10px] uppercase text-emerald-400/90 font-bold tracking-wider flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
                Estimated Cost
             </span>
             <span className="font-mono text-[9px] text-muted/80 uppercase tracking-wider">Logistics Included</span>
          </div>

          {/* Unified Action Button */}
          <button 
            onClick={onRequestInvoice}
            className="w-full bg-emerald-500 hover:bg-emerald-400 text-black font-display font-bold text-lg uppercase py-4 rounded shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_30px_rgba(16,185,129,0.5)] transition-all flex justify-between px-6 items-center group/btn relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-700 skew-x-12" />
            <span className="relative z-10 tracking-widest">REQUEST QUOTE</span>
            <ArrowRight className="w-5 h-5 relative z-10 group-hover/btn:translate-x-1 transition-transform" />
          </button>
          
          {/* Footer Trust Signal */}
          <div className="flex justify-center items-center gap-2 text-[9px] text-muted/80 font-mono uppercase tracking-widest">
            <Lock className="w-3 h-3" />
            <span>Secure Transaction</span>
          </div>
        </div>
      </div>
    </div>  );
}
