"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Search, Package, AlertTriangle, CheckCircle2 } from "lucide-react";

export default function LiveInventory({ partId }: { partId: string }) {
  const [scanning, setScanning] = useState(true);
  const [inventory, setInventory] = useState<{ count: number; warehouses: string[] } | null>(null);

  useEffect(() => {
    // Simulate real-time scraping
    const timer = setTimeout(() => {
      setInventory({
        count: Math.floor(Math.random() * 3) + 1, // Usually 1-3 units for ghost parts
        warehouses: ["Ohio Distribution Center", "Surplus Hub GMBH"],
      });
      setScanning(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, [partId]);

  return (
    <div className="w-full border border-border bg-background/30 backdrop-blur-md p-8 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 p-4 font-mono text-[8px] text-muted leading-tight uppercase orientation-sideways opacity-20 hidden sm:block">
        Real-time Scarcity Index // Moltworker v1.0 // Browser Rendering API
      </div>

      <div className="flex flex-col gap-6 relative z-10">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-accent/10 border border-accent/20 rounded-full">
            <Package className="w-6 h-6 text-accent" />
          </div>
          <h3 className="font-display text-2xl uppercase tracking-tighter">Verified Market Inventory</h3>
        </div>

        {scanning ? (
          <div className="py-12 flex flex-col items-center justify-center gap-4">
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              className="w-12 h-12 border-2 border-accent border-t-transparent rounded-full"
            />
            <div className="font-mono text-[10px] uppercase tracking-[0.4em] text-accent animate-pulse">
              Scraping "Dark" PDF Catalogs...
            </div>
          </div>
        ) : (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex flex-col gap-8"
          >
            <div className="flex items-baseline gap-4">
              <span className="font-display text-8xl text-accent">{inventory?.count}</span>
              <div className="flex flex-col">
                <span className="font-mono text-xs uppercase tracking-widest">Units Identified</span>
                <span className="font-mono text-[10px] text-green-500 uppercase tracking-tighter flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3" /> Ready for immediate dispatch
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {inventory?.warehouses.map((wh, i) => (
                <div key={i} className="border border-border p-4 flex flex-col gap-1 bg-white/5">
                  <span className="font-mono text-[8px] uppercase text-muted">Stock Location</span>
                  <span className="font-mono text-[10px] uppercase">{wh}</span>
                </div>
              ))}
            </div>

            <button className="w-full h-16 bg-accent hover:bg-accent/90 text-background font-display text-2xl uppercase transition-all flex items-center justify-center gap-4 group cursor-pointer">
              <span>Reserve This Unit</span>
              <AlertTriangle className="w-6 h-6 group-hover:scale-110 transition-transform" />
            </button>
          </motion.div>
        )}
      </div>
    </div>
  );
}
