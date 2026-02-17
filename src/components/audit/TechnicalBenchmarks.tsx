"use client";

import { motion } from "framer-motion";
import { CheckCircle2, ShieldCheck, Zap, Activity, Clock, Settings } from "lucide-react";

export default function TechnicalBenchmarks({ partId }: { partId: string }) {
  // Mock technical data - in a real app, this would come from a specialized technical DB
  const benchmarks = [
    { label: "Mean Time Between Failure (MTBF)", value: "152,000 Hours", icon: Clock, status: "VERIFIED" },
    { label: "Power Cycle Resilience", value: "Grade-A (Industrial)", icon: Zap, status: "CERTIFIED" },
    { label: "Internal Loop Speed", value: "0.45ms Latency", icon: Activity, status: "OPTIMIZED" },
    { label: "Operational Integrity", value: "99.998% Logic Sync", icon: ShieldCheck, status: "AUDITED" },
  ];

  return (
    <div className="bg-[#15171e] border-2 border-border p-8 relative overflow-hidden group">
      {/* Blueprint Grid Background Decor */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
      
      <div className="relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-8 pb-6 border-b border-border/50">
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-accent">Expert Technical Audit</span>
            </div>
            <h3 className="font-display text-2xl font-black uppercase tracking-tight">Performance Benchmarks</h3>
          </div>
          <div className="flex items-center gap-3 px-4 py-2 bg-accent/5 border border-accent/20 rounded-sm">
             <CheckCircle2 className="w-5 h-5 text-accent" />
             <div className="flex flex-col">
                <span className="text-[9px] font-black text-white uppercase tracking-tighter">Verified Logic Unit</span>
                <span className="text-[8px] text-muted uppercase tracking-widest font-mono">Agency ID: FR-9921-X</span>
             </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {benchmarks.map((bench, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 p-4 bg-background/50 border border-border/50 hover:border-accent/40 transition-all group/item"
            >
              <div className="w-12 h-12 bg-accent/5 flex items-center justify-center border border-accent/10 group-hover/item:bg-accent/10 transition-colors">
                <bench.icon className="w-6 h-6 text-accent/60 group-hover/item:text-accent transition-colors" />
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-[9px] text-muted uppercase tracking-widest font-mono font-bold leading-tight">
                  {bench.label}
                </span>
                <div className="flex items-center gap-2">
                  <span className="text-lg font-black font-display tracking-tight text-white">
                    {bench.value}
                  </span>
                  <span className="text-[7px] px-1.5 py-0.5 bg-accent/10 text-accent font-black uppercase tracking-tighter rounded-[2px] border border-accent/20">
                    {bench.status}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-8 pt-6 border-t border-border/50 flex flex-col md:flex-row gap-6 justify-between items-center opacity-60">
           <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <Settings className="w-3 h-3 text-muted" />
                <span className="text-[8px] uppercase tracking-widest font-mono">Firmware: v4.2.1-SECURE</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-3 h-3 text-muted" />
                <span className="text-[8px] uppercase tracking-widest font-mono">Hash: FD772...11A</span>
              </div>
           </div>
           <p className="text-[8px] text-muted uppercase tracking-widest leading-relaxed max-w-xs text-center md:text-right">
             This component has undergone triple-redundancy logic verification by our resident systems engineer. Total variance: 0.002%.
           </p>
        </div>
      </div>

      {/* Blueprint Corner Accents */}
      <div className="absolute top-0 right-0 w-12 h-12 border-t border-r border-accent/20" />
      <div className="absolute bottom-0 left-0 w-12 h-12 border-b border-l border-accent/20" />
    </div>
  );
}
