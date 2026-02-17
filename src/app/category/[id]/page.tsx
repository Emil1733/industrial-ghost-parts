import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowRight, ShieldCheck, Activity } from 'lucide-react';
import { CATEGORIES, CategoryID } from '@/lib/categories';
import { PARTS_DATABASE } from '@/lib/parts';
import RegistryTable from '@/components/home/RegistryTable';
import RegistryNavigator from '@/components/home/RegistryNavigator';

export async function generateStaticParams() {
  return Object.keys(CATEGORIES).map((id) => ({
    id,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const category = CATEGORIES[id as CategoryID];
  
  if (!category) return {};

  return {
    title: `${category.title} Registry | Industrial Ghost Parts Alpha`,
    description: category.seoDesc,
    alternates: {
      canonical: `https://hiddenspares.com/category/${id}`,
    },
    openGraph: {
      title: `${category.title} Obsolescence Registry`,
      description: category.seoDesc,
      images: [{ url: '/images/audit-og.jpg' }],
    }
  };
}

export default async function CategoryPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const category = CATEGORIES[id as CategoryID];

  if (!category) {
    notFound();
  }

  const parts = Object.values(PARTS_DATABASE).filter(part => {
    const searchStr = `${part.id} ${part.name} ${part.system} ${part.manufacturer}`.toLowerCase();
    return category.keywords.some(kw => searchStr.includes(kw));
  }).sort((a, b) => (a.criticality === "CRITICAL" ? -1 : 1));

  return (
    <main className="min-h-screen bg-[#0d0e12] text-white py-12">
      <div className="container mx-auto px-6 sm:px-12 md:px-24">
        {/* Navigation Breadcrumb */}
        <div className="flex items-center gap-2 font-mono text-[10px] text-muted uppercase tracking-widest mb-12">
          <Link href="/" className="hover:text-accent transition-colors">Command Center</Link>
          <span className="text-border">/</span>
          <span className="text-accent">Silo: {category.title}</span>
        </div>

        {/* Authority Header */}
        <div className="border-b border-border pb-12 mb-16">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-12">
            <div className="flex flex-col gap-6 flex-1">
              <div className="flex items-center gap-3">
                <category.icon className="w-8 h-8 text-accent" />
                <div className="flex flex-col">
                  <span className="font-mono text-[10px] text-accent font-bold uppercase tracking-widest">Silo Registry Alpha</span>
                  <h1 className="font-display text-5xl sm:text-7xl font-black uppercase tracking-tighter leading-none">
                    {category.title}
                  </h1>
                </div>
              </div>
              
              <div className="flex flex-col gap-6">
                <p className="font-mono text-muted text-sm max-w-2xl uppercase tracking-[0.1em] leading-relaxed border-l-2 border-accent/40 pl-6">
                  {category.seoDesc}
                </p>
                
                <div className="flex flex-col gap-4 max-w-2xl border-t border-border/30 pt-6 mt-2">
                   <h2 className="font-mono text-[10px] text-accent font-black uppercase tracking-[0.2em]">Strategic Importance</h2>
                   <p className="font-mono text-[11px] text-muted uppercase leading-relaxed">
                     The {category.title} registry monitors high-scarcity {category.title.toLowerCase()} modules essential for 
                     sustaining legacy industrial infrastructure. Loss of single-node connectivity in this category 
                     often results in cross-system failures exceeding standard recovery windows.
                   </p>
                </div>

                <div className="flex flex-col gap-4 max-w-2xl">
                   <h2 className="font-mono text-[10px] text-accent font-black uppercase tracking-[0.2em]">Recovery Protocols</h2>
                   <p className="font-mono text-[11px] text-muted uppercase leading-relaxed">
                     Authorized personnel should prioritize acquisition of "NIB" (New in Box) assets within this silo. 
                     Secondary surplus units must undergo a multi-point signal verification audit before integration into 
                     active production environments to mitigate protocol mismatch risks.
                   </p>
                </div>
              </div>

              <div className="flex items-center gap-6 mt-4">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-accent" />
                  <span className="font-mono text-[10px] text-muted uppercase font-bold tracking-widest">Audit Verified</span>
                </div>
                <div className="flex items-center gap-2">
                  <Activity className="w-4 h-4 text-accent animate-pulse" />
                  <span className="font-mono text-[10px] text-muted uppercase font-bold tracking-widest">Monitoring {parts.length} Nodes</span>
                </div>
              </div>
            </div>

            <Link 
              href="/"
              className="bg-panel/40 border-2 border-border p-6 hover:border-accent group transition-all"
            >
              <div className="flex flex-col gap-2">
                <span className="font-mono text-[9px] text-muted uppercase font-bold tracking-widest group-hover:text-accent">Return to Center</span>
                <span className="font-display font-black text-xl flex items-center gap-3 uppercase tracking-tighter">
                  Full Registry <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </Link>
          </div>
        </div>

        {/* Siloed Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-12">
            <div className="bg-panel/20 border border-border p-8">
               <h2 className="font-display font-black text-2xl uppercase tracking-tighter mb-8 flex items-center gap-3">
                 <div className="w-2 h-2 rounded-full bg-accent animate-ping" />
                 Live {category.title} Manifest
               </h2>

               <RegistryTable 
                 parts={parts} 
                 title={`${category.title} Manifest`}
               />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
