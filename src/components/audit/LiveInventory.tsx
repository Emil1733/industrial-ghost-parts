"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Search, Package, AlertTriangle, CheckCircle2 } from "lucide-react";
import EmergencyForm from "./EmergencyForm";
import GhostInventoryCard from "./GhostInventoryCard";
import InvoiceRequestModal from "./InvoiceRequestModal";
import { PartAuditData } from "@/lib/parts";

export default function LiveInventory({ part }: { part: PartAuditData }) {
  const [scanning, setScanning] = useState(true);
  const [ghostPart, setGhostPart] = useState<PartAuditData | null>(null);
  const [marketSignals, setMarketSignals] = useState<any>(null);
  const [isInvoiceModalOpen, setIsInvoiceModalOpen] = useState(false);
  const [isEmergencyFormOpen, setIsEmergencyFormOpen] = useState(false);

  useEffect(() => {
    // 1. Reset State on Part Change
    setScanning(true);
    setGhostPart(null);

    // 2. Trigger Moltworker Scan
    const scanGlobalNetwork = async () => {
       try {
         const res = await fetch('/api/moltworker/scan', {
            method: 'POST',
            body: JSON.stringify({ partId: part.id })
         });
         const data = await res.json();
         
         if (data.success && data.part) {
            setGhostPart(data.part);
            setMarketSignals(data.part.market_signals);
         }
       } catch (e) {
         console.error("Global Scan Failed", e);
       } finally {
         setScanning(false);
       }
    };

    scanGlobalNetwork();
  }, [part.id]);

  return (
    <>
      <div className="w-full bg-panel border-2 border-border p-8 shadow-2xl relative min-h-[400px] flex flex-col">
        <div className="flex flex-col gap-6">
          <div className="flex items-center justify-between border-b border-border pb-4">
            <div className="flex items-center gap-2">
              <Package className="w-5 h-5 text-accent" />
              <h2 className="font-mono text-xs font-bold uppercase tracking-widest">Market Monitoring Log</h2>
            </div>
            <span className="font-mono text-[9px] text-muted">AUDIT REF: STOCK-LOG-ALPHA</span>
          </div>

          {scanning ? (
            <div className="py-24 flex flex-col items-center justify-center gap-6">
               <div className="relative">
                  <div className="w-16 h-16 border-4 border-muted/20 border-t-accent rounded-full animate-spin" />
                  <div className="absolute inset-0 flex items-center justify-center">
                     <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
                  </div>
               </div>
               <div className="flex flex-col items-center gap-2">
                  <span className="font-mono text-xs uppercase tracking-widest text-accent animate-pulse">
                    Scanning Global Network...
                  </span>
                  <span className="font-mono text-[9px] text-muted uppercase">
                    Target: {part.id} | Nodes: 485 Active
                  </span>
               </div>
            </div>
          ) : ghostPart ? (
            <div>
               <GhostInventoryCard 
                  part={ghostPart} 
                  marketSignals={marketSignals}
                  onRequestInvoice={() => setIsInvoiceModalOpen(true)}
               />
            </div>
          ) : (
            <div className="flex flex-col gap-8 justify-between">
              {/* Fallback: Zero Inventory Display */}
              <div className="flex items-end gap-6 opacity-50">
                <div className="flex flex-col">
                  <span className="font-display text-8xl font-black leading-none text-muted tracking-tighter">
                    00
                  </span>
                  <span className="font-mono text-[10px] uppercase text-muted tracking-widest mt-1">Units Available</span>
                </div>
                
                <div className="flex flex-col gap-1 pb-2">
                  <div className="flex items-center gap-2 text-red-500 font-mono text-[10px] uppercase font-bold">
                    <AlertTriangle className="w-4 h-4" />
                    <span>Global Scarcity Alert</span>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-red-500/10 border border-red-500/20 text-center">
                <p className="font-mono text-[10px] uppercase text-red-400">
                   No immediate stock in verified network. Deep audit required.
                </p>
              </div>

              <button 
                onClick={() => setIsEmergencyFormOpen(true)}
                className="w-full h-14 bg-accent hover:bg-accent/90 text-background font-display font-black text-xl uppercase transition-all shadow-lg flex items-center justify-center px-6 cursor-pointer"
              >
                Initiate Emergency Sourcing
              </button>
            </div>
          )}
        </div>
      </div>

      <EmergencyForm 
        part={part} 
        isOpen={isEmergencyFormOpen} 
        onClose={() => setIsEmergencyFormOpen(false)} 
      />
      
      {ghostPart && (
         <InvoiceRequestModal 
           part={ghostPart}
           isOpen={isInvoiceModalOpen}
           onClose={() => setIsInvoiceModalOpen(false)}
           marketSignals={marketSignals}
         />
      )}
    </>
  );
}
