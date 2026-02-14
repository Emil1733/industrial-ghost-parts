"use client";

import { motion } from "framer-motion";
import { ShieldAlert, Info } from "lucide-react";
import { PartAuditData } from "@/lib/parts";

export default function AuditHeader({ data }: { data: PartAuditData }) {
  return (
    <div className="w-full flex flex-col gap-6 mb-12 relative">
      {/* Decorative Scan Line */}
      <motion.div 
        initial={{ top: -20, opacity: 0 }}
        animate={{ top: "100%", opacity: [0, 1, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        className="absolute left-0 right-0 h-[2px] bg-accent/20 z-0 pointer-events-none"
      />

      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 border-b border-border pb-6 overflow-hidden">
        <div className="flex flex-col gap-1">
          <motion.div 
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="flex items-center gap-2 text-accent mb-2"
          >
            <ShieldAlert className="w-5 h-5" />
            <span className="font-mono text-xs uppercase tracking-[0.3em]">System Audit in Progress</span>
          </motion.div>
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="font-display text-5xl sm:text-7xl uppercase tracking-tighter"
          >
            {data.id}
          </motion.h1>
          <motion.p 
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="font-mono text-muted text-sm uppercase"
          >
            {data.name} // {data.manufacturer}
          </motion.p>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          className="flex flex-col items-end gap-1 bg-accent/5 p-4 border border-accent/20 backdrop-blur-sm"
        >
          <span className="font-mono text-[10px] uppercase text-accent/60">Audit Risk Hash</span>
          <span className="font-mono text-xs text-accent">0x{Math.random().toString(16).slice(2, 10).toUpperCase()}</span>
        </motion.div>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
        {[
          { label: "Downtime Risk", val: data.criticality, color: "text-accent" },
          { label: "Est. Impact", val: `${data.downtimeCostPerHour}/hr`, color: "text-white" },
          { label: "Status", val: "OBSOLETE", color: "text-red-500" },
          { label: "OEM Support", val: "ENDED", color: "text-muted" },
        ].map((stat, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 + (i * 0.1) }}
            className="flex flex-col border-l border-border pl-4 py-2"
          >
            <span className="font-mono text-[9px] uppercase tracking-widest text-muted">{stat.label}</span>
            <span className={`font-mono text-sm uppercase ${stat.color}`}>{stat.val}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
