import Link from 'next/link'
import NeuralUplinkStatus from './NeuralUplinkStatus';

export default function Footer() {
  return (
    <footer className="w-full bg-[#0d0e12] border-t border-border/50 py-12 mt-auto">
      <div className="container mx-auto px-6 sm:px-12 md:px-24">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2 flex flex-col gap-6">
            <Link href="/" className="flex items-center gap-3 group">
              {/* Phantom Signal Logo (Small) */}
              <div className="w-8 h-8 border border-accent/30 bg-accent/5 flex items-center justify-center relative relative">
                <div className="absolute top-0 left-0 w-1.5 h-1.5 border-t border-l border-accent"></div>
                <div className="absolute top-0 right-0 w-1.5 h-1.5 border-t border-r border-accent"></div>
                <div className="absolute bottom-0 left-0 w-1.5 h-1.5 border-b border-l border-accent"></div>
                <div className="absolute bottom-0 right-0 w-1.5 h-1.5 border-b border-r border-accent"></div>
                <div className="w-1.5 h-1.5 bg-accent rounded-full shadow-[0_0_10px_rgba(255,107,0,0.8)]"></div>
              </div>
              
              <div className="flex flex-col">
                <span className="font-mono text-[10px] tracking-[0.4em] text-white uppercase font-bold">Industrial Ghost Parts</span>
                <span className="font-mono text-[8px] text-accent font-bold uppercase tracking-widest">Hidden Spares Network</span>
              </div>
            </Link>
            <p className="font-mono text-[10px] text-muted uppercase leading-relaxed max-w-sm">
              Industrial Ghost Parts is a verified industrial audit body specialized in 
              identifying high-scarcity automation assets for mission-critical infrastructure.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h2 className="font-mono text-[10px] text-white font-black uppercase tracking-[0.3em] mb-2 border-b border-accent/30 pb-2 inline-block w-fit">
              Agency
            </h2>
            <nav className="flex flex-col gap-3">
              <Link href="/about" className="font-mono text-[10px] text-muted hover:text-accent uppercase tracking-widest transition-colors">
                About Agency
              </Link>
              <Link href="/contact" className="font-mono text-[10px] text-muted hover:text-accent uppercase tracking-widest transition-colors">
                Contact Signal
              </Link>
              <Link href="/privacy" className="font-mono text-[10px] text-muted hover:text-accent uppercase tracking-widest transition-colors">
                Privacy Policy
              </Link>
            </nav>
          </div>

          <div className="flex flex-col gap-4">
            <h2 className="font-mono text-[10px] text-white font-black uppercase tracking-[0.3em] mb-2 border-b border-accent/30 pb-2 inline-block w-fit">
              Network
            </h2>
            <nav className="flex flex-col gap-3">
              <Link href="/" className="font-mono text-[10px] text-muted hover:text-accent uppercase tracking-widest transition-colors">
                Global Terminal
              </Link>
              <Link href="/broker/login" className="font-mono text-[10px] text-muted hover:text-accent uppercase tracking-widest transition-colors">
                Broker Access
              </Link>
            </nav>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-border/30 gap-6">
          <div className="font-mono text-[9px] text-muted/50 uppercase tracking-widest">
            © 2026 Industrial Ghost Parts. All Signals Encrypted.
          </div>
          <div className="flex gap-8 font-mono text-[9px] text-muted/50 uppercase tracking-widest">
            <NeuralUplinkStatus />
            <span>Node: NYC-01</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
