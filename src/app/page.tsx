import React from 'react';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import RegistryNavigator from "@/components/home/RegistryNavigator";
import { ArrowRight, ShieldAlert, Cpu, Activity, Terminal as TerminalIcon } from "lucide-react";
import StatsTicker from "@/components/home/StatsTicker";
import ProtocolSteps from "@/components/home/ProtocolSteps";

export const metadata = {
  title: "Industrial Ghost Parts | Emergency Obsolescence Recovery",
  description: "Identity and recover 600+ discontinued Allen-Bradley and industrial automation assets. Single point of failure (SPOF) technical audit database.",
  alternates: {
    canonical: "/",
  },
};

const SearchAutocomplete = dynamic(() => import("@/components/home/SearchAutocomplete"), {
  loading: () => <div className="h-14 w-full bg-panel/20 animate-pulse border border-border" />
});

const LiquidationFeed = dynamic(() => import("@/components/home/LiquidationFeed"), {
  loading: () => <div className="h-64 w-full bg-panel/20 animate-pulse border border-border" />
});

export default function IndustrialCommandCenter() {
  return (
    <main className="min-h-screen flex flex-col items-center relative z-10 bg-[#0d0e12] text-white">
      <StatsTicker />
      
      <div className="container mx-auto px-6 sm:px-12 md:px-24 py-12">
        {/* Official Header */}
        <div className="w-full border-b border-border pb-12 mb-16 relative">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-12">
            <div className="flex flex-col gap-8 flex-1">
              <div className="flex items-center gap-3">
                {/* Phantom Signal Logo */}
                <div className="w-10 h-10 border border-accent/30 bg-accent/5 flex items-center justify-center relative relative">
                  {/* Corner Brackets */}
                  <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-accent"></div>
                  <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-accent"></div>
                  <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-accent"></div>
                  <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-accent"></div>

                  {/* The Signal */}
                  <div className="relative flex items-center justify-center">
                    <div className="w-2 h-2 bg-accent rounded-full shadow-[0_0_10px_rgba(255,107,0,0.8)] z-10"></div>
                    <div className="absolute w-full h-full bg-accent/50 rounded-full animate-ping"></div>
                  </div>
                </div>

                <div className="flex flex-col">
                  <span className="font-mono text-[10px] tracking-[0.4em] text-muted uppercase">Hidden Spares Network</span>
                  <span className="font-mono text-[8px] text-accent font-bold uppercase tracking-widest">Protocol Version 5.0</span>
                </div>
              </div>
              
              <div className="flex flex-col gap-2">
                <h1 className="font-display text-6xl sm:text-8xl font-black uppercase tracking-tighter leading-none">
                  Industrial <span className="text-accent underline decoration-[6px] underline-offset-[12px]">Ghost</span> Parts
                </h1>
                <p className="font-mono text-muted text-[13px] max-w-xl uppercase tracking-[0.2em] leading-relaxed border-l-2 border-accent/30 pl-6 mt-4">
                  Specialized in Obsolescence Mapping and Asset Recovery for 600+ discontinued industrial modules.
                </p>
              </div>

              <ProtocolSteps />
            </div>

            <div className="w-full lg:max-w-md bg-panel/30 border-2 border-accent/40 p-8 relative group">
              <div className="absolute top-0 right-0 p-2 bg-accent/10 border-b border-l border-accent/20">
                <TerminalIcon className="w-3 h-3 text-accent animate-pulse" />
              </div>
              
              <div className="flex flex-col gap-6 relative z-10">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-accent animate-ping" />
                  <span className="font-mono text-[11px] text-accent font-black uppercase tracking-[0.3em]">START HERE</span>
                </div>
                
                <SearchAutocomplete />
              </div>
            </div>
          </div>
        </div>

        {/* Main Interface Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Siloed Registry */}
          <div className="lg:col-span-8 flex flex-col gap-12">
            <RegistryNavigator />
          </div>

          {/* Right Column: Recent Activity & Global Signals */}
          <div className="lg:col-span-4 flex flex-col gap-8">
            <div className="bg-panel/40 border-2 border-border p-8">
               <div className="flex items-center gap-3 mb-8">
                  <Activity className="w-4 h-4 text-accent" />
                  <h2 className="font-display font-black text-lg uppercase tracking-tight">Recent Activity Log</h2>
               </div>
               
               <div className="flex flex-col gap-6">
                  {[
                    { event: "AUDIT_SCAN", part: "1756-EN2T", time: "2m ago", loc: "Berlin, DE" },
                    { event: "RESERVE_SIGNAL", part: "UDC2500", time: "14m ago", loc: "Ohio, US" },
                    { event: "MARKET_CHECK", part: "SLC-500", time: "28m ago", loc: "Tokyo, JP" },
                    { event: "AUDIT_SCAN", part: "2198-H008", time: "1h ago", loc: "London, UK" },
                  ].map((log, i) => (
                    <div key={i} className="flex flex-col gap-1 border-l border-border pl-4 relative">
                       <div className="absolute -left-[4.5px] top-1 w-2 h-2 rounded-full bg-border" />
                       <div className="flex justify-between items-center whitespace-nowrap overflow-hidden">
                          <span className="font-mono text-[8px] text-accent font-bold uppercase tracking-widest">{log.event}</span>
                          <span className="font-mono text-[8px] text-muted uppercase">{log.time}</span>
                       </div>
                       <span className="font-mono text-xs font-bold text-gray-300 tracking-tight">{log.part}</span>
                       <span className="font-mono text-[8px] text-muted/60 uppercase">{log.loc}</span>
                    </div>
                  ))}
               </div>

               <div className="mt-12 p-4 bg-background border border-border">
                  <div className="flex items-center gap-3 mb-2">
                     <ShieldAlert className="w-3 h-3 text-red-500" />
                     <span className="font-mono text-[9px] text-red-500 font-bold uppercase tracking-widest">Network Alert</span>
                  </div>
                  <p className="font-mono text-[9px] text-muted uppercase leading-relaxed">
                    Detected 15% decrease in global 1756-L7 series availability over last 24h.
                  </p>
               </div>
            </div>

            <LiquidationFeed />
          </div>
        </div>
      </div>

    </main>
  );
}
