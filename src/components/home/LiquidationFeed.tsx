"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Search, Zap, Loader2, Info } from "lucide-react";

type LiquidationSignal = {
  id: string;
  source: string;
  part: string;
  condition: string;
  price: string;
  timestamp: string;
};

export default function LiquidationFeed() {
  const [signals, setSignals] = useState<LiquidationSignal[]>([]);

  const sources = ["SURPLUS_CLEARING", "BANKRUPTCY_AUCTION", "GOV_DISPOSAL", "PRIVATE_ESTATE"];
  const units = ["1756-L71", "6ES7134", "2711P-T10C", "FX5U-32MT", "QS8800"];
  const conditions = ["NIB (Factory Sealed)", "NOS (Ex-Plant)", "SURPLUS_UNTESTED"];

  useEffect(() => {
    // Initial feed
    const initialSignals = Array.from({ length: 5 }).map((_, i) => ({
      id: Math.random().toString(36).substr(2, 9),
      source: sources[Math.floor(Math.random() * sources.length)],
      part: units[Math.floor(Math.random() * units.length)],
      condition: conditions[Math.floor(Math.random() * conditions.length)],
      price: `$${(Math.random() * 5000 + 500).toFixed(2)}`,
      timestamp: "SYNCHRONIZED",
    }));
    setSignals(initialSignals);

    // Dynamic updates
    const interval = setInterval(() => {
      const newSignal = {
        id: Math.random().toString(36).substr(2, 9),
        source: sources[Math.floor(Math.random() * sources.length)],
        part: units[Math.floor(Math.random() * units.length)],
        condition: conditions[Math.floor(Math.random() * conditions.length)],
        price: `$${(Math.random() * 5000 + 500).toFixed(2)}`,
        timestamp: "JUST NOW",
      };
      setSignals(prev => [newSignal, ...prev.slice(0, 4)]);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-panel/20 border-2 border-border p-6 flex flex-col gap-6">
      <div className="flex flex-col gap-1">
        <div className="flex items-center justify-between">
           <div className="flex items-center gap-2">
             <Search className="w-3 h-3 text-accent animate-pulse" />
             <span className="text-[10px] font-black uppercase tracking-[0.3em] text-accent">Restricted Market Telemetry</span>
           </div>
           <div className="flex items-center gap-1.5 px-2 py-0.5 bg-accent/10 border border-accent/20 rounded-full">
              <div className="w-1 h-1 bg-accent rounded-full animate-ping" />
              <span className="text-[7px] font-black text-accent uppercase">Live Scan</span>
           </div>
        </div>
        <h3 className="font-display text-xl font-black uppercase tracking-tight">Liquidation Feed</h3>
      </div>

      <div className="flex flex-col gap-3">
        <AnimatePresence mode="popLayout">
          {signals.map((signal) => (
            <motion.div 
              key={signal.id}
              initial={{ height: 0, opacity: 0, scale: 0.9 }}
              animate={{ height: "auto", opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="flex flex-col gap-2 p-3 bg-background/50 border border-border/50 hover:border-accent/30 transition-all border-l-2 border-l-accent/50"
            >
              <div className="flex justify-between items-center">
                 <span className="text-[8px] font-bold text-accent uppercase tracking-widest">{signal.source}</span>
                 <span className="text-[8px] text-muted font-mono uppercase">{signal.timestamp}</span>
              </div>
              <div className="flex flex-col">
                 <span className="text-xs font-black text-white">{signal.part}</span>
                 <span className="text-[9px] text-muted uppercase tracking-tighter">{signal.condition}</span>
              </div>
              <div className="flex justify-between items-end mt-1">
                 <span className="text-xs font-mono font-black text-green-500">{signal.price}</span>
                 <button className="text-[8px] font-black uppercase text-accent hover:underline flex items-center gap-1">
                   Analyze Spread <Zap className="w-2 h-2" />
                 </button>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      <div className="pt-4 border-t border-border/50 flex flex-col gap-3">
         <div className="flex items-center gap-2 text-muted">
            <Loader2 className="w-3 h-3 animate-spin" />
            <span className="text-[8px] uppercase tracking-widest font-mono">Scanning Private Inventories...</span>
         </div>
         <div className="p-3 bg-accent/5 border border-dashed border-accent/20 rounded-sm flex items-start gap-3">
            <Info className="w-4 h-4 text-accent/60 mt-0.5" />
            <p className="text-[8px] text-muted uppercase tracking-widest leading-relaxed">
              Authorized personnel only. Direct acquisition protocols available through the Broker Dashboard.
            </p>
         </div>
      </div>
    </div>
  );
}
