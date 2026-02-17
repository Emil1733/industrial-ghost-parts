"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, ShieldAlert, Clock, Building, Send, ChevronRight, Loader2 } from "lucide-react";
import { useState } from "react";
import { PartAuditData } from "@/lib/parts";
import { supabase } from "@/lib/supabase";

export default function EmergencyForm({ 
  part, 
  isOpen, 
  onClose 
}: { 
  part: PartAuditData; 
  isOpen: boolean; 
  onClose: () => void 
}) {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isHuntComplete, setIsHuntComplete] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    downtimeStatus: "Production Stopped (Critical)",
    downtimeDescription: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      let leadId = `MOCK-${Math.random().toString(36).substr(2, 9)}`;

      // 1. Persist Lead to Supabase
      if (!process.env.NEXT_PUBLIC_SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL === 'your-project-url.supabase.co') {
         console.warn("Supabase keys not configured. Simulating success.");
         await new Promise(res => setTimeout(res, 1000));
      } else {
        const { data: sbData, error: sbError } = await supabase
          .from('leads')
          .insert([
            { 
              part_id: part.id, 
              name: formData.name, 
              company: formData.company, 
              email: formData.email,
              downtime_status: formData.downtimeStatus,
              downtime_cost: formData.downtimeDescription // Map description to the existing cost column for now
            }
          ]).select();
        
        if (sbError) {
          console.error("Supabase Error Full Object:", JSON.stringify(sbError, null, 2));
          console.error("Supabase Error Message:", sbError.message);
          console.error("Supabase Error Details:", sbError.details);
          console.error("Supabase Error Hint:", sbError.hint);
          throw sbError;
        }
        if (sbData && sbData[0]) leadId = sbData[0].id;
      }

      // 2. Trigger "Part Hunter" Arbitrage Scan (Non-blocking but synchronized)
      setStep(3); // Move to "Analyzing" state
      
      try {
        await fetch('/api/hunt', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            leadId,
            partId: part.id,
            description: formData.downtimeDescription
          })
        });
        setIsHuntComplete(true);
      } catch (huntErr) {
        console.error("Hunt Trigger Failed:", huntErr);
        // Still mark complete so they can close the modal, or handle error
        setIsHuntComplete(true);
      }
    } catch (err: any) {
      console.error("Submission Error:", err);
      setError("Transmission failed. Please verify credentials.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[2000] flex items-center justify-center p-4 sm:p-6">
          {/* Backdrop */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-background/80 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div 
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            className="relative w-full max-w-xl bg-panel border-2 border-border shadow-2xl overflow-hidden"
          >
            {/* Header / Info Strip */}
            <div className="bg-accent px-6 py-3 flex justify-between items-center">
              <div className="flex items-center gap-2">
                <ShieldAlert className="w-4 h-4 text-background" />
                <span className="font-display font-black text-[10px] uppercase text-background tracking-widest">
                  Secure Asset Reservation Request
                </span>
              </div>
              <button 
                onClick={onClose}
                className="hover:scale-110 transition-transform cursor-pointer"
              >
                <X className="w-5 h-5 text-background" />
              </button>
            </div>

            <div className="p-8">
              {step === 1 && (
                <div className="flex flex-col gap-8">
                  <div className="flex flex-col gap-2">
                    <h2 className="font-display text-3xl font-black uppercase tracking-tight">Reserve {part.id}</h2>
                    <p className="font-mono text-[11px] text-muted uppercase tracking-widest leading-relaxed">
                      Units of this type are allocated on a first-priority basis based on downtime impact. 
                      Please provide facility details to establish sourcing priority.
                    </p>
                  </div>

                  <div className="flex flex-col gap-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                       <div className="flex flex-col gap-2">
                          <label className="font-mono text-[10px] uppercase text-muted">Full Name</label>
                          <input 
                            required
                            type="text" 
                            aria-label="Full Name"
                            className="w-full h-12 bg-background border border-border px-4 font-mono text-sm focus:border-accent outline-none"
                            placeholder="John Doe"
                            value={formData.name}
                            onChange={(e) => setFormData({...formData, name: e.target.value})}
                          />
                       </div>
                       <div className="flex flex-col gap-2">
                          <label className="font-mono text-[10px] uppercase text-muted">Company / Facility</label>
                          <input 
                            required
                            type="text" 
                            aria-label="Company or Facility Name"
                            className="w-full h-12 bg-background border border-border px-4 font-mono text-sm focus:border-accent outline-none"
                            placeholder="Industrial Corp"
                            value={formData.company}
                            onChange={(e) => setFormData({...formData, company: e.target.value})}
                          />
                       </div>
                    </div>

                    <div className="flex flex-col gap-2">
                        <label className="font-mono text-[10px] uppercase text-muted">Downtime Status</label>
                        <select 
                          aria-label="Downtime Status"
                          className="w-full h-12 bg-background border border-border px-4 font-mono text-sm focus:border-accent outline-none appearance-none cursor-pointer"
                          value={formData.downtimeStatus}
                          onChange={(e) => setFormData({...formData, downtimeStatus: e.target.value})}
                        >
                            <option>Production Stopped (Critical)</option>
                            <option>Operating on Secondary Redundancy</option>
                            <option>Scheduled Maintenance Window</option>
                            <option>Preventative Spare Sourcing</option>
                        </select>
                    </div>
                  </div>

                  <button 
                    onClick={() => setStep(2)}
                    className="w-full h-16 bg-white hover:bg-gray-200 text-black font-display font-black text-xl uppercase transition-all flex items-center justify-center gap-4 group"
                  >
                    <span>Proceed to Verification</span>
                    <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              )}

              {step === 2 && (
                <form onSubmit={handleSubmit} className="flex flex-col gap-8">
                  <div className="flex flex-col gap-2">
                    <h2 className="font-display text-3xl font-black uppercase tracking-tight">Final Authorization</h2>
                    <p className="font-mono text-[11px] text-muted uppercase tracking-widest leading-relaxed">
                      Provide contact credentials for dispatch authorization.
                    </p>
                  </div>

                  <div className="flex flex-col gap-4">
                     <div className="flex flex-col gap-2">
                        <label className="font-mono text-[10px] uppercase text-muted">Work Email (for manifest)</label>
                        <input 
                          required
                          type="email" 
                          className="w-full h-12 bg-background border border-border px-4 font-mono text-sm focus:border-accent outline-none"
                          placeholder="j.doe@facility.com"
                          value={formData.email}
                          onChange={(e) => setFormData({...formData, email: e.target.value})}
                        />
                     </div>
                     <div className="flex flex-col gap-2">
                        <label className="font-mono text-[10px] uppercase text-muted">Downtime Impact Description</label>
                        <textarea 
                           required
                           className="w-full h-24 bg-background border border-border p-4 font-mono text-xs focus:border-accent outline-none resize-none"
                           placeholder="E.g. Main assembly line stopped, entire facility at 0% throughput..."
                           value={formData.downtimeDescription}
                           onChange={(e) => setFormData({...formData, downtimeDescription: e.target.value})}
                        />
                        <p className="font-mono text-[8px] text-muted uppercase tracking-tight">
                           Our AI will map this description to an industry-standard downtime risk tier.
                        </p>
                     </div>
                  </div>

                  {error && (
                    <div className="p-3 bg-red-500/10 border border-red-500/50 text-red-500 font-mono text-[10px] uppercase text-center">
                      {error}
                    </div>
                  )}

                  <div className="flex flex-col gap-4">
                    <button 
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full h-16 bg-accent hover:bg-accent/90 disabled:opacity-50 text-background font-display font-black text-xl uppercase transition-all flex items-center justify-center gap-4 group"
                    >
                      {isSubmitting ? (
                        <>
                          <span>Transmitting Lead...</span>
                          <Loader2 className="w-6 h-6 animate-spin" />
                        </>
                      ) : (
                        <>
                          <span>Authorize Asset Lock</span>
                          <Send className="w-6 h-6 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
                        </>
                      )}
                    </button>
                    <button 
                      onClick={() => setStep(1)}
                      className="font-mono text-[10px] uppercase text-muted hover:text-white transition-colors"
                    >
                      Back to Facility Details
                    </button>
                  </div>
                </form>
              )}

              {step === 3 && (
                 <div className="py-12 flex flex-col items-center justify-center gap-8 text-center">
                   <div className="relative">
                      <motion.div 
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        className={`w-20 h-20 rounded-full flex items-center justify-center transition-colors duration-500 ${isHuntComplete ? 'bg-green-500 border-2 border-green-400' : 'bg-green-500/20 border-2 border-green-500'}`}
                      >
                        <Send className={`w-10 h-10 transition-colors duration-500 ${isHuntComplete ? 'text-background' : 'text-green-500'}`} />
                      </motion.div>
                      {!isHuntComplete && (
                        <motion.div 
                          animate={{ rotate: 360 }}
                          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                          className="absolute inset-0 border-t-2 border-accent rounded-full"
                        />
                      )}
                   </div>

                   <div className="flex flex-col gap-4">
                     <div className="flex flex-col gap-2">
                        <h3 className="font-display text-4xl font-black uppercase tracking-tighter">
                          {isHuntComplete ? "Transmission Complete" : "Transmission Successful"}
                        </h3>
                        <p className="font-mono text-[10px] text-accent animate-pulse uppercase tracking-[0.2em] font-bold">
                          {isHuntComplete ? "[ SCARCITY SYNC: ESTABLISHED ]" : "[ HUNTING: ANALYZING MARKET SCARCITY & RECOVERY SPREAD ]"}
                        </p>
                     </div>
                     <p className="font-mono text-[9px] text-muted uppercase tracking-widest leading-relaxed max-w-sm mx-auto">
                       Tracking ID: {Math.random().toString(36).substr(2, 9).toUpperCase()} | 
                       {isHuntComplete 
                        ? "Asset reservation verified. Check your secure inbox for logistics protocols." 
                        : "Asset lock in progress. A logistics specialist will contact you on secure protocols within 14 minutes."}
                     </p>
                   </div>

                   {isHuntComplete ? (
                     <button 
                       onClick={() => {
                         onClose();
                         setStep(1);
                         setIsHuntComplete(false);
                       }}
                       className="w-full h-16 bg-white hover:bg-gray-200 text-black font-display font-black text-xl uppercase transition-all"
                     >
                       Back to Register
                     </button>
                   ) : (
                     <div className="w-full bg-border/20 h-1 overflow-hidden">
                        <motion.div 
                          initial={{ x: "-100%" }}
                          animate={{ x: "0%" }}
                          transition={{ duration: 15, ease: "linear" }}
                          className="h-full bg-accent w-full"
                        />
                     </div>
                   )}
                 </div>
              )}
            </div>

            {/* Matrix Decor */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-accent via-white/20 to-accent opacity-50" />
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
