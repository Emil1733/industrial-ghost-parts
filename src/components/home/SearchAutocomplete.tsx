"use client";

import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { Search, ArrowRight, Cpu, Activity, Terminal as TerminalIcon } from 'lucide-react';
import { PARTS_DATABASE, PartAuditData } from '@/lib/parts';

export default function SearchAutocomplete() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<PartAuditData[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  useEffect(() => {
    if (query.length < 2) {
      setResults([]);
      setIsOpen(false);
      return;
    }

    const searchTerms = query.toLowerCase().split(' ');
    const filtered = Object.values(PARTS_DATABASE).filter(part => {
      const searchStr = `${part.id} ${part.name} ${part.manufacturer} ${part.system}`.toLowerCase();
      return searchTerms.every(term => searchStr.includes(term));
    }).slice(0, 8); // Limit to top 8 results

    setResults(filtered);
    setIsOpen(filtered.length > 0);
    setSelectedIndex(-1);
  }, [query]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      setSelectedIndex(prev => Math.min(prev + 1, results.length - 1));
      e.preventDefault();
    } else if (e.key === 'ArrowUp') {
      setSelectedIndex(prev => Math.max(prev - 1, 0));
      e.preventDefault();
    } else if (e.key === 'Enter') {
      if (selectedIndex >= 0) {
        handleSelect(results[selectedIndex].id);
      } else if (results.length > 0) {
        handleSelect(results[0].id);
      }
    } else if (e.key === 'Escape') {
      setIsOpen(false);
    }
  };

  const handleSelect = (id: string) => {
    router.push(`/audit/${id}`);
    setIsOpen(false);
    setQuery('');
  };

  return (
    <div className="flex flex-col gap-6 w-full" ref={dropdownRef}>
      <div className="relative">
        <div className={`absolute -inset-1 bg-accent/20 blur-md rounded-lg transition-opacity duration-1000 ${query === '' ? 'animate-pulse opacity-100' : 'opacity-0'}`} />
        <label htmlFor="search-input" className="sr-only">Search industrial parts</label>
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted z-10" />
        <input 
          id="search-input"
          type="text" 
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="ENTER PART ID OR BRAND TO START..." 
          className="relative z-10 w-full h-14 bg-[#0d0e12] border-2 border-accent/40 px-12 font-mono text-[11px] uppercase tracking-widest focus:border-accent outline-none transition-all placeholder:text-muted/60 text-white shadow-2xl"
        />
        <div className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center gap-2 px-2 py-1 bg-background border border-border z-10">
          <span className="font-mono text-[8px] text-muted tracking-widest uppercase">Input Ready</span>
        </div>

        {isOpen && (
          <div className="absolute top-full left-0 right-0 mt-2 bg-[#0d0e12] backdrop-blur-md border-2 border-accent shadow-[0_0_50px_rgba(0,0,0,0.8)] z-[100] overflow-hidden">
            <div className="bg-accent/20 border-b border-accent/20 px-4 py-3 flex justify-between items-center">
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-accent animate-pulse" />
                <span className="font-mono text-[9px] text-accent font-black uppercase tracking-[0.2em]">Silo Search Matches</span>
              </div>
              <span className="font-mono text-[8px] text-muted uppercase">Select Node to Audit</span>
            </div>
            <div className="max-h-[400px] overflow-y-auto custom-scrollbar">
              {results.map((part, index) => (
                <div 
                  key={part.id}
                  onClick={() => handleSelect(part.id)}
                  onMouseEnter={() => setSelectedIndex(index)}
                  className={`flex items-center justify-between p-4 cursor-pointer border-b border-border/50 last:border-0 transition-all ${index === selectedIndex ? 'bg-accent/20 border-l-4 border-l-accent' : 'hover:bg-accent/5'}`}
                >
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xs font-bold text-white tracking-tight">{part.id}</span>
                      <span className="font-mono text-[8px] px-1.5 py-0.5 bg-background border border-border text-muted uppercase">{part.manufacturer}</span>
                    </div>
                    <span className="font-display text-[10px] text-gray-400 uppercase font-semibold">{part.name}</span>
                  </div>
                  <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="font-mono text-[8px] text-accent uppercase tracking-tighter">Enter Audit</span>
                    <ArrowRight className="w-3 h-3 text-accent" />
                  </div>
                </div>
              ))}
            </div>
            <div className="bg-background/50 p-2 text-center border-t border-border">
              <span className="font-mono text-[7px] text-muted/50 uppercase tracking-[0.2em]">End of Scan Results</span>
            </div>
          </div>
        )}
      </div>

      <div className="flex flex-col gap-3">
         <div className="flex items-center gap-2">
           <div className="w-1 h-1 bg-muted" />
           <span className="font-mono text-[9px] text-muted uppercase tracking-widest">Recommended Systems:</span>
         </div>
         <div className="flex flex-wrap gap-2">
            {["1756", "SLC 500", "S7-200", "UDC 2500", "POWERFLEX"].map(tag => (
              <button 
                key={tag} 
                onClick={() => setQuery(tag)}
                className="px-3 py-1.5 border border-border/50 bg-background/50 font-mono text-[9px] text-muted hover:border-accent hover:text-accent hover:bg-accent/5 transition-all uppercase"
              >
                {tag}
              </button>
            ))}
         </div>
      </div>
    </div>
  );
}
