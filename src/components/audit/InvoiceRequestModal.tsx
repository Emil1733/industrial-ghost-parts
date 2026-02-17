"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, FileText, Building, Send, ChevronRight, Loader2, MapPin, CreditCard, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import { PartAuditData } from "@/lib/parts";
import { supabase } from "@/lib/supabase";

export default function InvoiceRequestModal({ 
  part, 
  isOpen, 
  onClose,
  marketSignals
}: { 
  part: PartAuditData; 
  isOpen: boolean; 
  onClose: () => void;
  marketSignals?: any;
}) {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    address: "",
    paymentMethod: "Payoneer / Wire Transfer"
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      // 1. Persist Request to Supabase
      if (!process.env.NEXT_PUBLIC_SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL === 'your-project-url.supabase.co') {
         // Simulate success if no DB
         await new Promise(res => setTimeout(res, 1500));
      } else {
        const { error: sbError } = await supabase
          .from('leads')
          .insert([
            { 
              part_id: part.id, 
              name: formData.name, 
              company: formData.company, 
              email: formData.email,
              downtime_status: "INVOICE_REQUEST",
              downtime_cost: `Ghost Part Request: ${part.id} | Signals: ${JSON.stringify(marketSignals)} | Address: ${formData.address}`
            }
          ]);
        
        if (sbError) throw sbError;
      }
      setIsSuccess(true);
    } catch (err: any) {
      console.error("Invoice Request Error:", err);
      setError("Request failed. Please try again or contact support.");
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
            className="absolute inset-0 bg-background/90 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div 
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            className="relative w-full max-w-xl bg-panel border-2 border-emerald-500/30 shadow-[0_0_50px_rgba(16,185,129,0.1)] overflow-hidden"
          >
            {/* Header */}
            <div className="bg-emerald-900/40 border-b border-emerald-500/20 px-6 py-3 flex justify-between items-center">
              <div className="flex items-center gap-2">
                <FileText className="w-4 h-4 text-emerald-400" />
                <span className="font-mono text-[10px] uppercase text-emerald-400 tracking-widest font-bold">
                  Secure Invoice Request
                </span>
              </div>
              <button 
                onClick={onClose}
                className="hover:scale-110 transition-transform cursor-pointer"
              >
                <X className="w-5 h-5 text-muted hover:text-white" />
              </button>
            </div>

            <div className="p-8">
              {!isSuccess ? (
                <>
                {step === 1 && (
                  <div className="flex flex-col gap-8">
                    <div className="flex flex-col gap-2">
                      <h2 className="font-display text-2xl font-black uppercase tracking-tight text-white">
                        Acquire {part.id}
                      </h2>
                      <p className="font-mono text-[11px] text-muted uppercase tracking-widest leading-relaxed">
                        To secure this asset from the global network, please provide invoicing details. 
                        A formal pro-forma invoice will be generated and sent to your email.
                      </p>
                    </div>

                    <div className="flex flex-col gap-4">
                       <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="flex flex-col gap-2">
                             <label className="font-mono text-[10px] uppercase text-muted">Contact Name</label>
                             <input 
                               required
                               type="text" 
                               aria-label="Contact Name"
                               className="w-full h-12 bg-black/40 border border-white/10 px-4 font-mono text-sm focus:border-emerald-500 outline-none text-white placeholder:text-white/20"
                               placeholder="Jane Smith"
                               value={formData.name}
                               onChange={(e) => setFormData({...formData, name: e.target.value})}
                             />
                          </div>
                          <div className="flex flex-col gap-2">
                             <label className="font-mono text-[10px] uppercase text-muted">Company</label>
                             <input 
                               required
                               type="text" 
                               aria-label="Company Name"
                               className="w-full h-12 bg-black/40 border border-white/10 px-4 font-mono text-sm focus:border-emerald-500 outline-none text-white placeholder:text-white/20"
                               placeholder="Acme Industrial"
                               value={formData.company}
                               onChange={(e) => setFormData({...formData, company: e.target.value})}
                             />
                          </div>
                       </div>
                       
                       <div className="flex flex-col gap-2">
                           <label className="font-mono text-[10px] uppercase text-muted">Work Email</label>
                           <input 
                             required
                             type="email" 
                             aria-label="Work Email"
                             className="w-full h-12 bg-black/40 border border-white/10 px-4 font-mono text-sm focus:border-emerald-500 outline-none text-white placeholder:text-white/20"
                             placeholder="procurement@acme.com"
                             value={formData.email}
                             onChange={(e) => setFormData({...formData, email: e.target.value})}
                           />
                       </div>
                    </div>

                    <button 
                      onClick={() => setStep(2)}
                      disabled={!formData.name || !formData.email}
                      className="w-full h-14 bg-white hover:bg-emerald-400 hover:text-black text-black font-display font-black text-lg uppercase transition-all flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <span>Shipping Details</span>
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </div>
                )}

                {step === 2 && (
                  <form onSubmit={handleSubmit} className="flex flex-col gap-8">
                    <div className="flex flex-col gap-2">
                      <h2 className="font-display text-2xl font-black uppercase tracking-tight text-white">Logistics Protocol</h2>
                      <p className="font-mono text-[11px] text-muted uppercase tracking-widest leading-relaxed">
                        Confirm shipping destination and payment preference.
                      </p>
                    </div>

                    <div className="flex flex-col gap-4">
                       <div className="flex flex-col gap-2">
                          <label className="font-mono text-[10px] uppercase text-muted">Shipping Address</label>
                          <textarea 
                             required
                             aria-label="Shipping Address"
                             className="w-full h-24 bg-black/40 border border-white/10 p-4 font-mono text-xs focus:border-emerald-500 outline-none resize-none text-white placeholder:text-white/20"
                             placeholder="123 Industrial Parkway, Suite 400..."
                             value={formData.address}
                             onChange={(e) => setFormData({...formData, address: e.target.value})}
                          />
                       </div>

                       <div className="flex flex-col gap-2">
                          <label className="font-mono text-[10px] uppercase text-muted">Payment Preference</label>
                          <div className="flex items-center gap-4 bg-black/40 border border-white/10 p-3">
                             <CreditCard className="w-5 h-5 text-emerald-400" aria-hidden="true" />
                             <span className="font-mono text-xs text-white">Invoice (Wire Transfer)</span>
                             <span className="ml-auto text-[10px] bg-emerald-500/20 text-emerald-400 px-2 py-1 rounded">Standard B2B</span>
                          </div>
                          <p className="font-mono text-[9px] text-muted">
                            *Secure payment link will be embedded in the invoice.
                          </p>
                       </div>
                    </div>

                    {error && (
                      <div className="p-3 bg-red-500/10 border border-red-500/50 text-red-500 font-mono text-[10px] uppercase text-center">
                        {error}
                      </div>
                    )}

                    <div className="flex flex-col gap-3">
                      <button 
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full h-14 bg-emerald-500 hover:bg-emerald-400 text-black font-display font-black text-lg uppercase transition-all flex items-center justify-center gap-3 disabled:opacity-50"
                      >
                        {isSubmitting ? (
                          <><span>Processing...</span><Loader2 className="w-5 h-5 animate-spin" /></>
                        ) : (
                          <><span>Request Invoice</span><Send className="w-5 h-5" /></>
                        )}
                      </button>
                      <button 
                         type="button"
                         onClick={() => setStep(1)}
                         className="font-mono text-[10px] uppercase text-muted hover:text-white transition-colors text-center"
                      >
                         Back to Contact Info
                      </button>
                    </div>
                  </form>
                )}
                </>
              ) : (
                <div className="py-12 flex flex-col items-center justify-center gap-6 text-center">
                  <div className="w-20 h-20 bg-emerald-500/20 border-2 border-emerald-500 rounded-full flex items-center justify-center">
                     <CheckCircle2 className="w-10 h-10 text-emerald-500" />
                  </div>
                  <div>
                    <h3 className="font-display text-3xl font-black uppercase tracking-tight text-white mb-2">Request Confirmed</h3>
                    <p className="font-mono text-xs text-muted max-w-sm mx-auto">
                      Your invoice request for <span className="text-emerald-400">{part.id}</span> has been queued. 
                      Please check your email <strong>{formData.email}</strong> shortly for the pro-forma invoice and logistics agreement.
                    </p>
                  </div>
                  <button 
                    onClick={onClose}
                    className="mt-4 px-8 py-3 bg-white hover:bg-gray-200 text-black font-mono font-bold uppercase text-xs"
                  >
                    Close Terminal
                  </button>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
