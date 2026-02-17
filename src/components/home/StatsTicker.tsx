"use client";

import { motion } from "framer-motion";
import { Activity, AlertTriangle, Globe, ShieldCheck } from "lucide-react";
import { useEffect, useState } from "react";

const STATS = [
  { label: "Global Scarcity Index", value: "8.4/10", icon: AlertTriangle, color: "text-accent" },
  { label: "Verified Data Points", value: "482,901", icon: ShieldCheck, color: "text-emerald-500" },
  { label: "Network Latency", value: "14ms", icon: Activity, color: "text-blue-500" },
  { label: "Active Nodes", value: "12 Global", icon: Globe, color: "text-muted" },
];

export default function StatsTicker() {
  const [tickerData, setTickerData] = useState(STATS);

  // Subtle value fluctuations to feel "live"
  useEffect(() => {
    const interval = setInterval(() => {
      setTickerData(prev => prev.map(stat => {
        if (stat.label === "Network Latency") {
          const newLatency = Math.floor(10 + Math.random() * 10);
          return { ...stat, value: `${newLatency}ms` };
        }
        return stat;
      }));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full bg-panel border-b border-border py-2 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between gap-8 flex-wrap">
          {tickerData.map((stat, i) => (
            <div key={i} className="flex items-center gap-2 group cursor-default">
              <stat.icon className={`w-3.5 h-3.5 ${stat.color} opacity-60 group-hover:opacity-100 transition-opacity`} />
              <div className="flex items-baseline gap-2">
                <span className="font-mono text-[9px] uppercase tracking-widest text-muted whitespace-nowrap">
                  {stat.label}
                </span>
                <span className="font-mono text-[10px] font-bold text-foreground">
                  {stat.value}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
