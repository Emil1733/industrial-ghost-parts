"use client";

import { Search, ArrowRight, Zap, ShieldCheck, Database } from "lucide-react";

export default function ProtocolSteps() {
  const steps = [
    {
      id: "01",
      name: "IDENTIFY",
      desc: "Enter Catalog ID",
      icon: Search,
      active: true,
    },
    {
      id: "02",
      name: "AUDIT",
      desc: "Analyze Scarcity",
      icon: Database,
      active: false,
    },
    {
      id: "03",
      name: "RECOVER",
      desc: "Request Unit",
      icon: Zap,
      active: false,
    }
  ];

  return (
    <div className="flex items-center gap-4 md:gap-8 mb-12 w-full max-w-4xl">
      {steps.map((step, i) => (
        <div key={step.id} className="flex-1 flex items-center gap-4 group">
          <div className="flex flex-col gap-2 flex-1">
             <div className="flex items-center gap-2">
                <span className={`font-mono text-[10px] font-black ${step.active ? 'text-accent' : 'text-muted/40'}`}>
                  {step.id}
                </span>
                <div className={`h-[1px] flex-1 ${step.active ? 'bg-accent/30' : 'bg-border/20'}`} />
             </div>
             <div className="flex items-center gap-3">
                <div className={`p-2 border ${step.active ? 'bg-accent/10 border-accent text-accent' : 'border-border/30 text-muted/30 opacity-50'}`}>
                  <step.icon className="w-4 h-4" />
                </div>
                <div className="flex flex-col">
                  <span className={`font-display text-[11px] font-black uppercase tracking-widest ${step.active ? 'text-white' : 'text-muted/30'}`}>
                    {step.name}
                  </span>
                  <span className={`font-mono text-[8px] uppercase tracking-tighter ${step.active ? 'text-accent/60' : 'text-muted/20'}`}>
                    {step.desc}
                  </span>
                </div>
             </div>
          </div>
          {i < steps.length - 1 && (
            <ArrowRight className="w-4 h-4 text-border mt-6 hidden md:block" />
          )}
        </div>
      ))}
    </div>
  );
}
