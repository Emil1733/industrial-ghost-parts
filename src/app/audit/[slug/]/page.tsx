import { notFound } from "next/navigation";
import { PARTS_DATABASE } from "@/lib/parts";
import AuditHeader from "@/components/audit/AuditHeader";
import LiveInventory from "@/components/audit/LiveInventory";
import { ShieldAlert, Terminal, FileText, ChevronRight } from "lucide-react";

export default function AuditPage({ params }: { params: { slug: string } }) {
  const part = PARTS_DATABASE[params.slug];

  if (!part) {
    notFound();
  }

  return (
    <main className="min-h-screen flex flex-col items-center p-6 sm:p-12 lg:p-24 relative z-10 max-w-7xl mx-auto">
      {/* Breadcrumbs */}
      <nav className="w-full flex items-center gap-2 font-mono text-[9px] uppercase tracking-widest text-muted mb-12 overflow-x-auto whitespace-nowrap">
        <a href="/" className="hover:text-white transition-colors">Terminal</a>
        <ChevronRight className="w-3 h-3" />
        <span className="text-white">Audit: {part.id}</span>
      </nav>

      {/* Main Header Section */}
      <AuditHeader data={part} />

      <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-12 mt-12">
        {/* Left Column: Technical Narrative & Specs */}
        <div className="lg:col-span-2 flex flex-col gap-12">
          
          <section className="flex flex-col gap-6">
            <div className="flex items-center gap-2 border-b border-border pb-2">
              <Terminal className="w-4 h-4 text-accent" />
              <h3 className="font-mono text-xs uppercase tracking-widest">Audit Summary</h3>
            </div>
            <p className="text-sm leading-relaxed text-muted font-mono uppercase">
              The {part.id} constitutes a single point of failure within the {part.system} environment. 
              Discontinued in {part.discontinuedYear}, OEM support has transitioned to "Best Effort" and eventually "Obsolete" status. 
              The following audit identifies critical vulnerabilities and real-time market scarcity.
            </p>
          </section>

          <section className="grid grid-cols-1 sm:grid-cols-2 gap-12">
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-2 border-b border-border pb-2">
                <ShieldAlert className="w-4 h-4 text-accent" />
                <h3 className="font-mono text-xs uppercase tracking-widest">Failure Analysis</h3>
              </div>
              <ul className="flex flex-col gap-3">
                {part.commonFailures.map((failure, i) => (
                  <li key={i} className="flex gap-3 text-xs font-mono uppercase text-muted">
                    <span className="text-accent">[{i+1}]</span>
                    <span>{failure}</span>
                  </li>
                ))}
            </ul>
            </div>

            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-2 border-b border-border pb-2">
                <FileText className="w-4 h-4 text-accent" />
                <h3 className="font-mono text-xs uppercase tracking-widest">Technical Specs</h3>
              </div>
              <div className="flex flex-col gap-4">
                {part.specs.map((spec, i) => (
                  <div key={i} className="flex justify-between items-end border-b border-border border-dotted pb-1">
                    <span className="font-mono text-[10px] uppercase text-muted">{spec.label}</span>
                    <span className="font-mono text-xs uppercase text-white">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>

        {/* Right Column: Inventory & CTA */}
        <div className="flex flex-col gap-8">
            <LiveInventory partId={part.id} />
            
            <div className="border-l-2 border-accent/30 bg-accent/5 p-6 flex flex-col gap-4">
                <h4 className="font-mono text-[10px] uppercase text-accent tracking-widest">Expert Recommendation</h4>
                <p className="font-mono text-[11px] uppercase text-muted leading-relaxed">
                    Given the {part.replacementCost} replacement cost and {part.downtimeCostPerHour}/hr downtime impact, 
                    we recommend maintaining a minimum of <span className="text-white">2 verified units</span> in local on-site storage.
                </p>
            </div>
        </div>
      </div>
    </main>
  );
}
