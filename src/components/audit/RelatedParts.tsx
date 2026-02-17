import Link from "next/link";
import { ArrowRight, Activity, Cpu, Zap } from "lucide-react";
import { PartAuditData } from "@/lib/parts";

export default function RelatedParts({ parts }: { parts: PartAuditData[] }) {
  if (!parts || parts.length === 0) return null;

  return (
    <div className="w-full flex flex-col gap-8 mt-16 border-t border-accent/20 pt-12">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Activity className="w-5 h-5 text-accent" />
          <h2 className="font-mono text-sm font-bold uppercase tracking-widest text-white">
            Networked Components
          </h2>
        </div>
        <span className="font-mono text-[9px] uppercase text-muted tracking-widest hidden sm:block">
          Cluster Connectivity Verified
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {parts.map((p) => (
          <Link 
            key={p.id} 
            href={`/audit/${p.id}`}
            className="group relative bg-panel/50 border border-white/5 hover:border-accent/40 p-5 transition-all duration-300 hover:bg-accent/5"
          >
            {/* Hover Decor - Corner Flashing */}
            <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-accent/0 group-hover:border-accent transition-all duration-300"></div>
            <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-accent/0 group-hover:border-accent transition-all duration-300"></div>

            <div className="flex flex-col h-full justify-between gap-4">
              <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between">
                  {/* Icon logic based on criticality/type could go here */}
                  <div className="w-8 h-8 rounded bg-background/50 flex items-center justify-center border border-white/10 group-hover:border-accent/20 group-hover:text-accent transition-colors">
                     <Cpu className="w-4 h-4 opacity-70 group-hover:opacity-100" />
                  </div>
                  <span className={`font-mono text-[9px] px-1.5 py-0.5 rounded border ${
                    p.criticality === "CRITICAL" 
                      ? "border-red-500/30 text-red-400 bg-red-500/5" 
                      : "border-emerald-500/30 text-emerald-400 bg-emerald-500/5"
                  }`}>
                    {p.criticality === "CRITICAL" ? "CRIT" : "NORM"}
                  </span>
                </div>
                
                <h3 className="font-mono text-xs font-bold text-white group-hover:text-accent transition-colors mt-2">
                  {p.id}
                </h3>
                <p className="text-[10px] text-muted font-mono uppercase truncate leading-tight opacity-70">
                  {p.name.replace(/ALLEN-BRADLEY|CONTROLLOGIX/g, "").trim()}
                </p>
              </div>

              <div className="flex items-center justify-between border-t border-white/5 pt-3 mt-1">
                <div className="flex flex-col">
                   <span className="text-[9px] text-muted uppercase tracking-wider">Est. Value</span>
                   <span className="text-[10px] font-mono text-white/50">{p.replacementCost.split(" - ")[0]}</span>
                </div>
                <ArrowRight className="w-3 h-3 text-accent/50 group-hover:text-accent group-hover:translate-x-1 transition-all" />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
