import Link from "next/link";
import { Mail, Phone, MapPin, Send, ChevronRight, ShieldAlert } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Secure Dispatch | Contact the Audit Agency",
  description: "Submit a facility audit request or contact the Industrial Ghost Parts procurement team for emergency asset recovery.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
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

      <main className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-20">
          {/* Left Column: Info */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-500 text-[10px] font-mono tracking-widest uppercase mb-8">
              <ShieldAlert className="w-3 h-3" /> External Inquiry Protocol
            </div>
            <h1 className="text-5xl font-bold tracking-tight mb-8 leading-[1.1]">
              Establish Your <span className="text-orange-500 text-outline">Signal.</span>
            </h1>
            <p className="text-lg text-neutral-400 mb-12 leading-relaxed max-w-lg">
              Whether you are a facility manager seeking a critical asset audit or a verified broker 
              requesting access to the Signal Network, our agency protocol ensures secure, rapid communication.
            </p>

            <div className="space-y-8">
              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center flex-none">
                  <Mail className="w-6 h-6 text-orange-500" />
                </div>
                <div>
                  <h2 className="font-mono text-xs uppercase text-neutral-500 mb-1 tracking-widest">Secure Dispatch</h2>
                  <p className="font-bold text-lg">info@hiddenspares.com</p>
                </div>
              </div>
              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center flex-none">
                  <Phone className="w-6 h-6 text-orange-500" />
                </div>
                <div>
                  <h2 className="font-mono text-xs uppercase text-neutral-500 mb-1 tracking-widest">Emergency Line</h2>
                  <p className="font-bold text-lg">+1 (888) GHOST-PLC</p>
                </div>
              </div>
              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center flex-none">
                  <MapPin className="w-6 h-6 text-orange-500" />
                </div>
                <div>
                  <h2 className="font-mono text-xs uppercase text-neutral-500 mb-1 tracking-widest">Global HQ</h2>
                  <p className="font-bold text-lg">Terminal 4, 5th Floor <br />New York, NY 10001</p>
                </div>
              </div>
            </div>

            <div className="mt-20 p-6 bg-orange-500/5 border border-orange-500/10 rounded-2xl border-dashed">
              <p className="text-xs font-mono text-neutral-500 uppercase tracking-widest leading-relaxed">
                Notice: All incoming inquiries are triaged based on the <span className="text-orange-500">Urgency Multiplier</span>. 
                Full plant shutdowns receive response within 15 minutes.
              </p>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="bg-neutral-900/50 border border-white/5 rounded-3xl p-8 md:p-12 relative overflow-hidden">
             <div className="absolute top-0 right-0 p-4 opacity-5">
               <ShieldAlert className="w-32 h-32" />
             </div>
             
             <form className="space-y-6 relative z-10">
               <div className="grid md:grid-cols-2 gap-6">
                 <div className="space-y-2">
                   <label htmlFor="full-name" className="text-[10px] font-mono uppercase tracking-widest text-neutral-500 ml-1 cursor-pointer">Full Name</label>
                   <input 
                    id="full-name"
                    type="text" 
                    placeholder="John Doe"
                    className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-sm focus:border-orange-500/50 outline-none transition-all placeholder:text-neutral-800"
                   />
                 </div>
                 <div className="space-y-2">
                   <label htmlFor="work-email" className="text-[10px] font-mono uppercase tracking-widest text-neutral-500 ml-1 cursor-pointer">Work Email</label>
                   <input 
                    id="work-email"
                    type="email" 
                    placeholder="john@facility.com"
                    className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-sm focus:border-orange-500/50 outline-none transition-all placeholder:text-neutral-800"
                   />
                 </div>
               </div>

               <div className="space-y-2">
                 <label htmlFor="inquiry-type" className="text-[10px] font-mono uppercase tracking-widest text-neutral-500 ml-1 cursor-pointer">Inquiry Type</label>
                 <select 
                   id="inquiry-type"
                   name="inquiry-type"
                   className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-sm focus:border-orange-500/50 outline-none transition-all appearance-none cursor-pointer"
                  >
                   <option value="audit">Emergency Facility Audit</option>
                   <option value="broker">Broker Signal Onboarding</option>
                   <option value="media">Media & Institutional Inquiry</option>
                   <option value="other">General Procurement</option>
                 </select>
               </div>

               <div className="space-y-2">
                 <label htmlFor="message" className="text-[10px] font-mono uppercase tracking-widest text-neutral-500 ml-1 cursor-pointer">Message Detail</label>
                 <textarea 
                  id="message"
                  rows={5}
                  placeholder="Describe your facility status or broker credentials..."
                  className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-sm focus:border-orange-500/50 outline-none transition-all placeholder:text-neutral-800 resize-none"
                 />
               </div>

               <button 
                type="button"
                className="w-full bg-orange-500 text-black font-bold uppercase tracking-widest text-xs py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-white transition-all group"
               >
                 Initialize Dispatch <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
               </button>
             </form>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-20 border-t border-white/5 mt-20">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-[10px] font-mono text-neutral-600 uppercase tracking-widest">
            © 2026 Industrial Ghost Parts. All Signals Encrypted.
          </div>
          <div className="flex gap-8 text-[10px] font-mono text-neutral-600 uppercase tracking-widest">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/about" className="hover:text-white transition-colors">About</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
