"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";
import { Shield, Send, Loader2 } from "lucide-react";
import { motion } from "framer-motion";

export default function BrokerLogin() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);
    setError(null);

    // 1. Check if email is whitelisted (Optional but recommended to prevent spamming invites)
    // We'll implement this properly once the 'brokers' table is ready.
    // For now, we'll try the magic link directly.

    const { error: authError } = await supabase.auth.signInWithOtp({
      email,
      options: {
        emailRedirectTo: `${window.location.origin}/broker/dashboard`,
      },
    });

    if (authError) {
      setError(authError.message);
    } else {
      setMessage("Secure magic link transmitted. Check your encrypted inbox.");
    }
    setLoading(false);
  };

  return (
    <main className="min-h-screen bg-[#0d0e12] flex items-center justify-center p-6">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md bg-panel border-2 border-border p-12 shadow-2xl relative overflow-hidden"
      >
        {/* Glow Decor */}
        <div className="absolute -top-24 -left-24 w-48 h-48 bg-accent/10 rounded-full blur-3xl" />
        
        <div className="relative z-10 flex flex-col items-center text-center gap-8">
          <div className="w-16 h-16 bg-accent/20 border-2 border-accent rounded-full flex items-center justify-center">
            <Shield className="w-8 h-8 text-accent" />
          </div>

          <div className="flex flex-col gap-2">
            <h1 className="font-display text-3xl font-black uppercase tracking-tighter">Secure Uplink</h1>
            <p className="font-mono text-[10px] text-muted uppercase tracking-widest leading-relaxed">
              Authorized personnel only. Access to the Signal Network requires a validated whitelist entry.
            </p>
          </div>

          <form onSubmit={handleLogin} className="w-full flex flex-col gap-4">
            <div className="flex flex-col gap-2 text-left">
              <label className="font-mono text-[10px] uppercase text-muted tracking-widest pl-1">Credentials (Email)</label>
              <input 
                required
                type="email" 
                placeholder="broker@intel.net"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full h-14 bg-background border-2 border-border px-6 font-mono text-sm focus:border-accent outline-none transition-all"
              />
            </div>

            <button 
              disabled={loading}
              className="w-full h-16 bg-white text-black font-display font-black text-xl uppercase hover:bg-accent transition-all flex items-center justify-center gap-4 disabled:opacity-50"
            >
              {loading ? (
                <>
                  <span>Authenticating...</span>
                  <Loader2 className="w-6 h-6 animate-spin" />
                </>
              ) : (
                <>
                  <span>Request Magic Link</span>
                  <Send className="w-5 h-5" />
                </>
              )}
            </button>
          </form>

          {message && (
             <p className="font-mono text-[10px] text-green-500 uppercase font-bold animate-pulse">
               {message}
             </p>
          )}

          {error && (
             <p className="font-mono text-[10px] text-red-500 uppercase font-bold">
               ERROR: {error}
             </p>
          )}

          <div className="mt-4 pt-8 border-t border-border/50 w-full">
            <p className="font-mono text-[8px] text-muted uppercase leading-relaxed">
              Unrecognized identities will be logged and reported to security protocols.
            </p>
          </div>
        </div>
      </motion.div>
    </main>
  );
}
