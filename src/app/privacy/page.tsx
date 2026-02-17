import Link from "next/link";
import { ShieldAlert, Lock, EyeOff, FileText, ChevronRight, ShieldCheck, Scale } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Data Sovereignty | Privacy Protocol",
  description: "Industrial Ghost Parts privacy policy and data protection protocols for institutional industrial audits.",
  alternates: {
    canonical: "/privacy",
  },
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#050505] text-[#e0e0e0] font-sans selection:bg-orange-500/30">
      {/* Header / Nav */}
      <header className="border-b border-white/5 bg-black/50 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-8 h-8 border border-orange-500/30 bg-orange-500/5 flex items-center justify-center relative">
              <div className="absolute top-0 left-0 w-1.5 h-1.5 border-t border-l border-orange-500"></div>
              <div className="absolute top-0 right-0 w-1.5 h-1.5 border-t border-r border-orange-500"></div>
              <div className="absolute bottom-0 left-0 w-1.5 h-1.5 border-b border-l border-orange-500"></div>
              <div className="absolute bottom-0 right-0 w-1.5 h-1.5 border-b border-r border-orange-500"></div>
              <div className="w-1.5 h-1.5 bg-orange-500 rounded-full shadow-[0_0_10px_rgba(255,107,0,0.8)]"></div>
            </div>
            
            <div className="flex flex-col">
              <span className="font-mono text-[10px] tracking-[0.4em] text-white uppercase font-bold">Industrial Ghost Parts</span>
              <span className="font-mono text-[8px] text-orange-500 font-bold uppercase tracking-widest">Hidden Spares Network</span>
            </div>
          </Link>
          <div className="flex items-center gap-8">
            <Link href="/about" className="text-xs font-mono text-muted-foreground hover:text-white transition-colors uppercase tracking-widest">
              About Agency
            </Link>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-20">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-500 text-[10px] font-mono tracking-widest uppercase mb-8">
          <ShieldCheck className="w-3 h-3" /> Data Governance Protocol
        </div>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-12">
          Privacy & <span className="text-orange-500">Security Policy.</span>
        </h1>

        <div className="prose prose-invert prose-orange max-w-none space-y-12">
          <section>
            <div className="flex items-center gap-3 mb-4">
              <Lock className="w-5 h-5 text-orange-500" />
              <h2 className="text-xl font-bold uppercase tracking-wider font-mono m-0">Institutional Trust</h2>
            </div>
            <p className="text-neutral-400 font-mono text-sm leading-relaxed">
              Industrial Ghost Parts ("the Agency") operates as a high-clearance audit body. We recognize that industrial 
              facilities and brokers handle sensitive logistics data. This policy outlines our commitment to the non-disclosure 
              and encryption of all "Signal Data" captured through our platform.
            </p>
          </section>

          <section className="bg-neutral-900/50 border border-white/5 rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <EyeOff className="w-5 h-5 text-orange-500" />
              <h3 className="text-lg font-bold uppercase tracking-wider font-mono m-0 text-white">Data Collection Protocol</h3>
            </div>
            <ul className="space-y-4 text-sm font-mono text-neutral-400 list-none p-0 m-0">
              <li className="flex gap-4">
                <span className="text-orange-500">●</span>
                <span><strong>Signal Ingestion:</strong> We only collect data necessary to triage industrial downtime (Part ID, Facility Urgency, and Impact Descriptions).</span>
              </li>
              <li className="flex gap-4">
                <span className="text-orange-500">●</span>
                <span><strong>Broker Credentials:</strong> Individual broker data is used solely for Magic Link authentication and whitelisting.</span>
              </li>
              <li className="flex gap-4">
                <span className="text-orange-500">●</span>
                <span><strong>Market Telemetry:</strong> Scraped market price data is cached for intelligence purposes but never linked to specific user IDs.</span>
              </li>
            </ul>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-4">
              <Scale className="w-5 h-5 text-orange-500" />
              <h2 className="text-xl font-bold uppercase tracking-wider font-mono m-0">Zero Leak Commitment</h2>
            </div>
            <p className="text-neutral-400 font-mono text-sm leading-relaxed">
              We do not sell, lease, or distribute lead data to non-whitelisted entities. Access to high-urgency rescue 
              missions is controlled via end-to-end encrypted session tokens. Facility managers who "Authorize Asset Lock" 
              only have their contact details disclosed to the single broker who successfully captures the signal.
            </p>
          </section>

          <section className="border-t border-white/5 pt-12 text-center">
            <p className="text-[10px] font-mono text-neutral-600 uppercase tracking-[0.2em] mb-4">
              Authorized by: Industrial Ghost Parts Compliance Div.
            </p>
            <p className="text-[10px] font-mono text-neutral-600 uppercase tracking-[0.2em]">
              Last Update: 2026-02-15T04:30:00Z
            </p>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-20 border-t border-white/5 mt-20">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-[10px] font-mono text-neutral-600 uppercase tracking-widest text-center">
            © 2026 Industrial Ghost Parts. All Signals Encrypted.
          </div>
          <div className="flex gap-8 text-[10px] font-mono text-neutral-600 uppercase tracking-widest">
            <Link href="/about" className="hover:text-white transition-colors">About</Link>
            <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
