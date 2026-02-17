"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ShieldAlert, Info } from "lucide-react";
import { PartAuditData } from "@/lib/parts";

export default function AuditHeader({ data }: { data: PartAuditData }) {
  const [caseId, setCaseId] = useState<string>("");

  useEffect(() => {
    setCaseId(Math.random().toString(16).slice(2, 10).toUpperCase());
  }, []);

  return (
    <div className="w-full flex flex-col gap-8 mb-16 relative">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 border-b-2 border-border pb-8">
        <div className="flex flex-col gap-2">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 font-mono text-[10px] uppercase tracking-[0.3em] text-muted mb-2">
            <span className="flex items-center gap-1.5 px-2 py-0.5 bg-accent/10 text-accent border border-accent/20 rounded-sm">
                <ShieldAlert className="w-3 h-3" />
                Protocol Verified
            </span>
            <span>Audit Report</span>
            <span className="text-accent">●</span>
            <span>Case ID: {caseId || "--------"}</span>
          </div>
          
          <h1 className="font-display text-5xl sm:text-7xl font-black uppercase tracking-tighter leading-none mb-1">
            {data.id}
          </h1>
          
          <div className="flex items-center gap-4">
            <span className="font-mono text-sm font-bold uppercase py-1 px-3 bg-panel border border-border">
              {data.criticality} RISK
            </span>
            <p className="font-display font-semibold text-lg uppercase text-muted">
              {data.name} // {data.manufacturer}
            </p>
          </div>
        </div>

        <div className="hidden lg:flex flex-col items-end gap-2 p-6 border-2 border-accent/20 bg-accent/5">
          <span className="font-mono text-[9px] uppercase tracking-widest text-accent/60">Risk Assessment Score</span>
          <span className="font-display text-6xl font-black leading-none text-accent">9.8</span>
          <div className="flex flex-col items-end">
            <span className="font-mono text-[8px] uppercase text-accent/40 leading-tight">Critical Infrastructure Vulnerability</span>
            <span className="font-mono text-[7px] uppercase text-accent inline-block border border-accent/30 px-1 mt-1 font-bold">CERTIFIED AGENCY AUDIT</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-1">
        {[
          { label: "Downtime Impact", val: `${data.downtimeCostPerHour}/hr`, color: "text-white" },
          { label: "Market Status", val: "OBSOLETE", color: "text-red-500" },
          { label: "Replacement Est.", val: data.replacementCost, color: "text-white" },
          { label: "System Origin", val: data.system, color: "text-muted" },
        ].map((stat, i) => (
          <div 
            key={i}
            className="flex flex-col bg-panel/20 p-6 border border-border"
          >
            <span className="font-mono text-[9px] uppercase tracking-widest text-muted mb-2">{stat.label}</span>
            <span className={`font-mono text-sm font-bold uppercase tracking-tight ${stat.color}`}>{stat.val}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
