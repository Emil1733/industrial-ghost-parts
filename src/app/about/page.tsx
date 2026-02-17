import Link from "next/link";
import { ShieldCheck, Activity, Target, Zap, ChevronRight, Mail, Shield, Globe, Compass } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Institutional Mission | Industrial Ghost Parts",
  description: "About the Industrial Ghost Parts project: Minimizing global downtime through real-time scarcity mapping and obsolescence audits.",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
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
            <Link href="/" className="text-xs font-mono text-muted-foreground hover:text-white transition-colors uppercase tracking-widest">
              Back to Terminal
            </Link>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-20">
        {/* Hero Section */}
        <section className="mb-24 relative">
          <div className="absolute -top-10 -left-10 w-64 h-64 bg-orange-500/10 rounded-full blur-[100px] pointer-events-none" />
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-500 text-[10px] font-mono tracking-widest uppercase mb-8">
            <Activity className="w-3 h-3" /> System Intelligence Core
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 leading-[1.1]">
            Restoring Stability to the <span className="text-orange-500">Broken Supply Chain.</span>
          </h1>
          <p className="text-xl text-neutral-400 max-w-3xl leading-relaxed">
            Industrial Ghost Parts is a high-authority audit agency dedicated to identifying, 
            verifying, and securing obsolete industrial assets before they cause mission-critical failures.
          </p>
        </section>

        {/* Mission / Methodology Grid */}
        <section className="grid md:grid-cols-2 gap-12 mb-32">
          <div className="p-8 bg-neutral-900/50 border border-white/5 rounded-2xl">
            <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center mb-6">
              <Shield className="w-6 h-6 text-orange-500" />
            </div>
            <h3 className="text-xl font-bold mb-4">Our Mission</h3>
            <p className="text-neutral-400 leading-relaxed font-mono text-sm">
              In an era of rapid automation turnover, critical infrastructure often relies on legacy components that manufacturers no longer support. Our agency acts as the "Ghost Hunter," mapping the world's remaining inventory of discontinued PLC, CNC, and robotic controllers to prevent catastrophic industrial downtime.
            </p>
          </div>
          <div className="p-8 bg-neutral-900/50 border border-white/5 rounded-2xl">
            <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center mb-6">
              <Compass className="w-6 h-6 text-orange-500" />
            </div>
            <h3 className="text-xl font-bold mb-4">The Methodology</h3>
            <p className="text-neutral-400 leading-relaxed font-mono text-sm">
              We leverage real-time market telemetry, bankruptcy liquidation feeds, and emergency facility audits to create 
              a live "Scarcity Index." By bridging the gap between facility managers in crisis and elite industrial brokers, 
              we facilitate the rapid acquisition of restricted market assets.
            </p>
          </div>
        </section>

        {/* Technical Authority Section */}
        <section className="border-y border-white/5 py-24 mb-32">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <div className="flex-1">
              <h2 className="text-3xl font-bold mb-8 tracking-tight uppercase font-mono">
                The Anatomy of a <br />"Ghost" Asset Audit
              </h2>
              <div className="space-y-6">
                {[
                  { title: "Verification of Authenticity", desc: "Rigorous inspection of serial numbers and manufacturing batches to ensure zero-counterfeit data." },
                  { title: "Failure Analysis Mapping", desc: "Proprietary MTBF (Mean Time Between Failure) indexing for all legacy Rockwell and Siemens hardware." },
                  { title: "Logistics Optimization", desc: "Flash-shipping protocols that move assets from private warehouses to facility floors in under 24 hours." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="flex-none font-mono text-orange-500/50 pt-1">0{i+1}</div>
                    <div>
                      <h4 className="font-bold text-sm uppercase tracking-wider mb-1">{item.title}</h4>
                      <p className="text-sm text-neutral-500 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex-1 w-full aspect-square relative md:max-w-md">
              <div className="absolute inset-0 border border-orange-500/20 rounded-full animate-spin-slow" />
              <div className="absolute inset-4 border border-white/10 rounded-full" />
              <div className="absolute inset-1 w-1 h-1 bg-orange-500 rounded-full top-1/2 left-0 -translate-x-1/2" />
              <div className="absolute inset-0 flex items-center justify-center">
                <Globe className="w-24 h-24 text-orange-500/20" />
              </div>
            </div>
          </div>
        </section>

        {/* Global Strategy / Institutional Governance Expansion */}
        <section className="grid lg:grid-cols-12 gap-16 mb-32 border-b border-white/5 pb-32">
           <div className="lg:col-span-12">
             <h2 className="text-2xl font-mono uppercase tracking-[0.3em] text-orange-500 mb-12">Institutional Governance & Verification</h2>
           </div>
           
           <div className="lg:col-span-8 space-y-12">
              <div className="space-y-6">
                 <h3 className="text-xl font-bold text-white uppercase tracking-tight">Phase 1: Strategic Scarcity Analysis</h3>
                 <p className="text-neutral-400 font-mono text-xs leading-relaxed uppercase">
                   Our Scarcity Analysis protocol operates on a three-tier vulnerability matrix. We track "Last Known Production" dates back to 1985, cross-referencing global liquidation events with institutional maintenance cycles. This allows our agents to predict shortages 12-18 months before they manifest as critical downtime events in the pharmaceutical, automotive, and heavy-manufacturing sectors.
                 </p>
                 <p className="text-neutral-400 font-mono text-xs leading-relaxed uppercase">
                   By monitoring decommissioning manifests from Tier 1 industrial facilities, we identify "Ghost Clusters"—regions where legacy support has completely evaporated—enabling localized risk mitigation for surviving facility clusters.
                 </p>
              </div>

              <div className="space-y-6">
                 <h3 className="text-xl font-bold text-white uppercase tracking-tight">Phase 2: Acquisition & Signal Verification</h3>
                 <p className="text-neutral-400 font-mono text-xs leading-relaxed uppercase">
                   Once a "Ghost" asset is identified, it undergoes a proprietary Signal Verification audit. Unlike standard refurbished hardware, our protocols require firmware-level continuity checks and capacitor health mapping (thermal telemetry) to ensure institutional-grade reliability. We do not just find parts; we verify technical survivability.
                 </p>
                 <p className="text-neutral-400 font-mono text-xs leading-relaxed uppercase">
                   This dual-loop verification process ensures that when a multi-million dollar production line fails due to a $2,000 obsolete PLC, the replacement module provided through the Agency's network is not just functioning, but optimized for reintegration.
                 </p>
              </div>
           </div>

           <div className="lg:col-span-4 bg-orange-500/5 border border-orange-500/20 p-8 flex flex-col gap-8">
              <div className="space-y-4">
                 <h3 className="font-mono text-[10px] text-white font-bold uppercase tracking-widest border-b border-orange-500 pb-2">Facility Risk Summary</h3>
                 <p className="text-[10px] text-neutral-500 font-mono uppercase leading-relaxed">
                   Facility managers currently ignoring Stage 4 Obsolescence face a 65% higher risk of extended downtime (&gt;72 hours) due to current secondary market consolidation.
                 </p>
              </div>

              <div className="space-y-4">
                 <h3 className="font-mono text-[10px] text-white font-bold uppercase tracking-widest border-b border-orange-500 pb-2">Agency Clearance</h3>
                 <p className="text-[10px] text-neutral-500 font-mono uppercase leading-relaxed">
                   Access to the full Global Scarcity Manifest is restricted to Level 4 Broker Alpha members. Public audits are limited to surface-level technical specifications.
                 </p>
              </div>
           </div>
        </section>

        {/* CTA */}
        <section className="text-center py-20 bg-orange-500 rounded-3xl text-black">
          <h2 className="text-3xl md:text-5xl font-black mb-8 px-4 leading-tight">
            NEED TO AUDIT YOUR FACILITY FOR OBSOLESCENCE RISKS?
          </h2>
          <Link 
            href="/contact"
            className="inline-flex items-center gap-3 bg-black text-white px-10 py-5 rounded-xl font-bold uppercase tracking-widest text-sm hover:translate-y-[-4px] transition-all duration-300 shadow-xl"
          >
            Request Official Audit <ChevronRight className="w-5 h-5" />
          </Link>
        </section>
      </main>

      {/* Mini Footer */}
      <footer className="py-20 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12 border-b border-white/5 pb-20 mb-10">
          <div className="col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="w-6 h-6 border border-white/20 flex items-center justify-center relative">
                <div className="w-1 h-1 bg-white rounded-full"></div>
              </div>
              <div className="flex flex-col">
                <span className="font-mono text-[10px] tracking-[0.2em] text-white uppercase font-bold">Industrial Ghost Parts</span>
                <span className="font-mono text-[7px] text-orange-500/80 font-bold uppercase tracking-widest">Hidden Spares Network</span>
              </div>
            </Link>
            <p className="text-xs text-neutral-500 leading-relaxed font-mono">
              Industrial Ghost Parts is a verified industrial audit body. 
              We do not stock inventory; we provide market intelligence and acquisition 
              protocols for mission-critical hardware.
            </p>
          </div>
          <div>
            <h4 className="text-[10px] font-mono tracking-widest uppercase text-neutral-400 mb-6 font-bold underline decoration-orange-500 decoration-2 underline-offset-8">
              Protocol
            </h4>
            <div className="flex flex-col gap-4 text-xs font-mono">
              <Link href="/about" className="hover:text-orange-500 transition-colors">About Agency</Link>
              <Link href="/contact" className="hover:text-orange-500 transition-colors">Contact Signal</Link>
              <Link href="/privacy" className="hover:text-orange-500 transition-colors">Privacy Policy</Link>
            </div>
          </div>
          <div>
            <h4 className="text-[10px] font-mono tracking-widest uppercase text-neutral-400 mb-6 font-bold underline decoration-neutral-700 decoration-2 underline-offset-8">
              Resources
            </h4>
            <div className="flex flex-col gap-4 text-xs font-mono">
              <Link href="/" className="hover:text-orange-500 transition-colors">Global Terminal</Link>
              <Link href="/broker/login" className="hover:text-orange-500 transition-colors">Broker Access</Link>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-[10px] font-mono text-neutral-600 uppercase tracking-widest">
            © 2026 Industrial Ghost Parts. All Signals Encrypted.
          </div>
          <div className="flex gap-8 text-[10px] font-mono text-neutral-600 uppercase tracking-widest">
            <span>Lat: 40.7128° N, Lon: 74.0060° W</span>
            <span className="text-orange-500/50">Level 4 Clearance</span>
          </div>
        </div>
      </footer>
    </div>
  )
}
