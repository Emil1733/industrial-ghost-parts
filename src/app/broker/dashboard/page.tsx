"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { Shield, Zap, TrendingUp, AlertTriangle, Clock } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

type LeadSignal = {
  id: string;
  created_at: string;
  part_id: string;
  name: string;
  company: string;
  email: string;
  downtime_status: string;
  downtime_cost: string;
  loss_estimate: number;
  recovery_spread: number;
  arbitrage_score: number;
  market_signals: {
    source: string;
    market_price: number;
    velocity: string;
    mapped_impact: string;
  };
};

export default function BrokerDashboard() {
  const [signals, setSignals] = useState<LeadSignal[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchSignals() {
      const { data, error } = await supabase
        .from('leads')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) {
        console.error("Error fetching signals:", error);
      } else {
        setSignals(data || []);
      }
      setLoading(false);
    }

    fetchSignals();

    // Subscribe to real-time updates
    const channel = supabase
      .channel('schema-db-changes')
      .on(
        'postgres_changes',
        { event: 'INSERT', schema: 'public', table: 'leads' },
        (payload) => {
          setSignals((prev) => [payload.new as LeadSignal, ...prev]);
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  return (
    <main className="min-h-screen bg-[#0d0e12] text-white font-mono p-6 lg:p-12">
      {/* Header / Signal Tape */}
      <div className="border-b border-accent/30 pb-8 mb-12 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <Shield className="w-5 h-5 text-accent" />
            <span className="text-[10px] uppercase tracking-[0.4em] font-black text-accent">Broker Signal Network</span>
          </div>
          <h1 className="font-display text-5xl font-black uppercase tracking-tighter">Arbitrage Mission Control</h1>
        </div>
        
        <div className="flex gap-8">
          <div className="flex flex-col">
            <span className="text-[9px] text-muted uppercase tracking-widest mb-1">Total Opportunity</span>
            <span className="text-2xl font-black text-white">
              ${signals.reduce((acc, s) => acc + (s.recovery_spread || 0), 0).toLocaleString()}
            </span>
          </div>
          <div className="flex flex-col">
            <span className="text-[9px] text-muted uppercase tracking-widest mb-1">Active Signals</span>
            <span className="text-2xl font-black text-accent">{signals.length}</span>
          </div>
        </div>
      </div>

      {/* Main Signal Feed */}
      <div className="grid grid-cols-1 gap-4">
        {loading ? (
          <div className="py-20 flex flex-col items-center justify-center gap-4 border-2 border-dashed border-border/50">
            <Zap className="w-8 h-8 text-accent animate-pulse" />
            <span className="text-[10px] uppercase tracking-widest text-muted">Synchronizing Uplink...</span>
          </div>
        ) : signals.length === 0 ? (
          <div className="py-20 flex flex-col items-center justify-center gap-4 border-2 border-dashed border-border/50 text-center">
             <AlertTriangle className="w-8 h-8 text-muted" />
             <div className="flex flex-col gap-1">
                <span className="text-[10px] uppercase tracking-widest text-white font-bold">No Active Signals Detected</span>
                <span className="text-[9px] uppercase tracking-widest text-muted">Awaiting emergency audit transmission...</span>
             </div>
          </div>
        ) : (
          <AnimatePresence mode="popLayout">
            {signals.map((signal) => (
              <SignalCard key={signal.id} signal={signal} />
            ))}
          </AnimatePresence>
        )}
      </div>
    </main>
  );
}

function SignalCard({ signal }: { signal: LeadSignal }) {
  const isHighUrgency = signal.recovery_spread > 10000;

  return (
    <motion.div 
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      className={`relative group bg-[#15171e] border-2 transition-all p-6 grid grid-cols-1 md:grid-cols-12 gap-6 ${
        isHighUrgency ? 'border-accent/40 hover:border-accent shadow-lg shadow-accent/5' : 'border-border hover:border-white/20'
      }`}
    >
      {/* High Urgency Pulse */}
      {isHighUrgency && (
        <div className="absolute top-0 right-0 p-2">
          <div className="flex items-center gap-1.5 px-2 py-0.5 bg-accent text-background rounded-bl">
             <div className="w-1.5 h-1.5 bg-background rounded-full animate-ping" />
             <span className="text-[8px] font-black uppercase tracking-tighter">High Urgency</span>
          </div>
        </div>
      )}

      {/* Part & Client Info */}
      <div className="md:col-span-3 flex flex-col justify-center">
        <span className="text-[9px] text-muted uppercase tracking-widest mb-1">Endangered Asset</span>
        <h3 className="text-xl font-black uppercase tracking-tight mb-2 group-hover:text-accent transition-colors">{signal.part_id}</h3>
        <div className="flex flex-col gap-1">
          <span className="text-[10px] font-bold text-white/80">{signal.company}</span>
          <span className="text-[10px] text-muted">{signal.name}</span>
        </div>
      </div>

      {/* Pain Metrics */}
      <div className="md:col-span-3 flex flex-col justify-center border-l border-border/50 pl-6">
        <span className="text-[9px] text-muted uppercase tracking-widest mb-1">Downtime Paint</span>
        <div className="flex items-center gap-2 mb-1">
          <AlertTriangle className="w-3 h-3 text-red-500" />
          <span className="text-sm font-black text-red-500">
            ${signal.loss_estimate?.toLocaleString() || '---'}/HR
          </span>
        </div>
        <p className="text-[9px] leading-relaxed text-muted uppercase line-clamp-2">
          {signal.downtime_cost}
        </p>
      </div>

      {/* Arbitrage Intelligence */}
      <div className="md:col-span-4 flex flex-col justify-center border-l border-border/50 pl-6">
        <span className="text-[9px] text-muted uppercase tracking-widest mb-1">Recovery Spread</span>
        <div className="flex items-baseline gap-2">
           <TrendingUp className="w-4 h-4 text-green-500" />
           <span className="text-3xl font-black text-green-500 tracking-tighter">
             ${signal.recovery_spread?.toLocaleString() || '---'}
           </span>
        </div>
        <div className="flex items-center gap-3 mt-2">
           <div className="flex flex-col">
              <span className="text-[8px] text-muted uppercase">Market Floor</span>
              <span className="text-[10px] font-bold">${signal.market_signals?.market_price?.toLocaleString() || '---'}</span>
           </div>
           <div className="flex flex-col">
              <span className="text-[8px] text-muted uppercase">Velocity</span>
              <span className="text-[10px] font-bold text-accent">{signal.market_signals?.velocity || 'ANALYZING'}</span>
           </div>
        </div>
      </div>

      {/* Actions */}
      <div className="md:col-span-2 flex items-center justify-end">
        <button className="w-full h-12 bg-white text-black text-[10px] font-black uppercase tracking-widest hover:bg-accent transition-all active:scale-95">
          Lock Deal
        </button>
      </div>
    </motion.div>
  );
}
