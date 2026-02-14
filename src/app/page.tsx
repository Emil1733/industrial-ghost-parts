import Link from "next/link";
import { ArrowRight, ShieldAlert, Cpu, Activity } from "lucide-react";

export default function Home() {
  const topGoldmines = [
    { id: "2198-H008-ERS", name: "Kinetix 5500 Servo Drive", risk: "CRITICAL" },
    { id: "1746-NI8", name: "SLC 500 Analog Input", risk: "HIGH" },
    { id: "UDC2500", name: "Honeywell Controller", risk: "SCARCE" },
  ];

  return (
    <main className="min-h-screen flex flex-col items-center p-8 sm:p-24 relative z-10">
      {/* Hero / Header */}
      <div className="w-full max-w-5xl flex flex-col gap-8 mb-16 border-l-4 border-accent pl-8 py-4">
        <h1 className="font-display text-5xl sm:text-7xl tracking-tighter uppercase leading-none">
          Industrial <span className="text-accent">Ghost</span> Parts
        </h1>
        <p className="font-mono text-muted max-w-xl text-sm uppercase tracking-widest">
          Continuous Audit of Obsolete Industrial Control Systems and Scarcity Arbitrage.
        </p>
      </div>

      {/* Audit Grid */}
      <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {topGoldmines.map((part) => (
          <Link
            key={part.id}
            href={`/audit/${part.id}`}
            className="group border border-border bg-background/50 backdrop-blur-sm p-6 flex flex-col gap-4 hover:border-accent transition-all duration-300 relative overflow-hidden cursor-pointer"
          >
            {/* Hover Decor */}
            <div className="absolute top-0 right-0 p-2 opacity-10 group-hover:opacity-100 transition-opacity">
              <Activity className="w-8 h-8 text-accent" />
            </div>

            <div className="flex items-center gap-2 text-accent">
              <ShieldAlert className="w-4 h-4" />
              <span className="font-mono text-[10px] uppercase tracking-tighter"> Risk Level: {part.risk}</span>
            </div>

            <div>
              <h2 className="font-display text-2xl uppercase">{part.id}</h2>
              <p className="font-mono text-muted text-xs uppercase">{part.name}</p>
            </div>

            <div className="mt-4 flex items-center gap-2 text-xs font-mono uppercase tracking-widest group-hover:gap-4 transition-all">
              <span>Run Audit</span>
              <ArrowRight className="w-4 h-4" />
            </div>
          </Link>
        ))}
      </div>

      {/* Footer / Info */}
      <footer className="mt-auto w-full max-w-5xl border-t border-border pt-8 flex flex-col sm:flex-row justify-between gap-4 font-mono text-[10px] text-muted uppercase tracking-widest">
        <div className="flex items-center gap-2">
          <Cpu className="w-3 h-3" />
          <span>Autonomous Agent: Moltworker v1.0</span>
        </div>
        <div>Verified Node: 2026-F02-14-US-EAST</div>
      </footer>
    </main>
  );
}
