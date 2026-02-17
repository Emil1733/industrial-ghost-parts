"use client";

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { Cpu, Activity, Terminal as TerminalIcon } from 'lucide-react';
import { PARTS_DATABASE } from '@/lib/parts';
import { CATEGORIES, CategoryID } from '@/lib/categories';
import RegistryTable from './RegistryTable';

type Category = 'ALL' | CategoryID;

export default function RegistryNavigator() {
  const [activeCategory, setActiveCategory] = useState<Category>('ALL');

  const categories = Object.values(CATEGORIES);

  const filteredParts = useMemo(() => {
    const allParts = Object.values(PARTS_DATABASE);
    let filtered = allParts;
    
    if (activeCategory !== 'ALL') {
      const cat = CATEGORIES[activeCategory as CategoryID];
      if (cat) {
        filtered = allParts.filter(part => {
          const searchStr = `${part.id} ${part.name} ${part.system} ${part.manufacturer}`.toLowerCase();
          return cat.keywords.some(kw => searchStr.includes(kw));
        });
      }
    }

    return filtered.sort((a, b) => (b.criticality === "CRITICAL" ? 1 : -1));
  }, [activeCategory]);

  const handleCategoryClick = (id: Category) => {
    setActiveCategory(prev => prev === id ? 'ALL' : id);
  };

  return (
    <div className="flex flex-col gap-12">
      {/* Category Silos */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {categories.map((cat) => (
          <div 
            key={cat.id} 
            onClick={() => handleCategoryClick(cat.id as Category)}
            className={`transition-all duration-300 group cursor-pointer p-6 border-2 shadow-xl ${
              activeCategory === cat.id 
                ? 'bg-accent/10 border-accent shadow-accent/5 scale-[1.02]' 
                : 'bg-panel/20 border-border hover:border-accent/40 active:scale-95'
            }`}
          >
            <cat.icon className={`w-5 h-5 mb-4 transition-colors ${activeCategory === cat.id ? 'text-accent' : 'text-accent/60 group-hover:text-accent'}`} />
            <h3 className="font-display font-black text-sm uppercase mb-1 tracking-tight">{cat.title}</h3>
            <p className="font-mono text-[9px] text-muted uppercase mb-4">{cat.desc}</p>
            <div className="flex justify-between items-center">
              <span className={`font-mono text-[10px] font-bold uppercase ${activeCategory === cat.id ? 'text-accent' : 'text-muted'}`}>
                {cat.count} Audit Ready
              </span>
              {activeCategory === cat.id && (
                <div className="w-1.5 h-1.5 bg-accent rounded-full animate-ping" aria-hidden="true" />
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Audit Registry Table/Grid */}
      <RegistryTable 
        parts={filteredParts} 
        title={activeCategory === 'ALL' ? 'Recovery Database' : `${CATEGORIES[activeCategory as CategoryID].title} Manifest`}
      />

      {activeCategory !== 'ALL' && CATEGORIES[activeCategory as CategoryID] && (
        <Link 
          href={`/category/${activeCategory}`}
          className="w-full py-6 mt-4 border-2 border-accent/20 bg-accent/5 hover:bg-accent/10 hover:border-accent transition-all group flex flex-col items-center gap-1"
        >
          <span className="font-mono text-[10px] text-accent uppercase tracking-[0.3em] font-black">
            Enter {CATEGORIES[activeCategory as CategoryID].title} Hub
          </span>
          <span className="font-mono text-[8px] text-muted uppercase tracking-widest">
            View Detailed Authority Registry & Market Signals
          </span>
        </Link>
      )}
    </div>
  );
}
