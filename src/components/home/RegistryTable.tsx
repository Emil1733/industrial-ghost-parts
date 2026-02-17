"use client";

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { ArrowRight, Search, X } from 'lucide-react';
import { PartAuditData } from '@/lib/parts';

interface RegistryTableProps {
  parts: PartAuditData[];
  title?: string;
}

export default function RegistryTable({ parts, title = "Recovery Database" }: RegistryTableProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [visibleCount, setVisibleCount] = useState(15);

  const filteredParts = useMemo(() => {
    let filtered = parts;
    
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      filtered = parts.filter(part => 
        part.id.toLowerCase().includes(q) || 
        part.name.toLowerCase().includes(q) || 
        part.manufacturer.toLowerCase().includes(q) ||
        part.system.toLowerCase().includes(q)
      );
    }

    return filtered.slice(0, visibleCount);
  }, [parts, searchQuery, visibleCount]);

  const handleLoadMore = () => {
    setVisibleCount(prev => prev + 50);
  };

  return (
    <div className="flex flex-col gap-6">
      {/* Localized Table Search */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div className="flex items-center gap-4 w-full md:w-auto">
          <div className="h-[1px] w-8 bg-accent/40 hidden md:block"></div>
          <h2 className="font-mono text-[10px] text-muted uppercase tracking-[0.3em] whitespace-nowrap">
            Live {title}
          </h2>
          <div className="h-[1px] flex-1 bg-border md:hidden"></div>
        </div>

        <div className="relative w-full md:w-72 group">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-muted group-focus-within:text-accent transition-colors" />
          <input 
            type="text"
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setVisibleCount(15);
            }}
            placeholder="FILTER BY SKU / MODEL..."
            className="w-full bg-panel/20 border border-border py-2.5 pl-10 pr-10 font-mono text-[10px] uppercase tracking-widest text-foreground focus:outline-none focus:border-accent/50 transition-all placeholder:text-muted/40"
          />
          {searchQuery && (
            <button 
              onClick={() => setSearchQuery("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 p-1 hover:text-accent transition-colors"
            >
              <X className="w-3 h-3" />
            </button>
          )}
        </div>
      </div>

      <div className="flex flex-col gap-1">
        {/* Table Header */}
        <div className="hidden md:grid grid-cols-12 gap-4 px-6 py-3 font-mono text-[10px] text-muted uppercase tracking-[0.2em] border-b border-border">
          <div className="col-span-1">Status</div>
          <div className="col-span-3">Catalog ID</div>
          <div className="col-span-4 text-center">Equipment Description</div>
          <div className="col-span-2 text-center">Category</div>
          <div className="col-span-2 text-right">Action</div>
        </div>

        {/* Table Rows */}
        <div className="flex flex-col gap-1 min-h-[400px]">
          {filteredParts.length > 0 ? (
            filteredParts.map((part) => (
              <Link
                key={part.id}
                href={`/audit/${part.id}`}
                className="group grid grid-cols-1 md:grid-cols-12 gap-4 items-center bg-panel/30 border border-border px-6 py-6 hover:bg-panel/60 hover:border-accent/50 transition-all cursor-pointer animate-in fade-in slide-in-from-bottom-2 duration-300"
              >
                <div className="col-span-1 flex items-center gap-2">
                  <div className={`w-2 h-2 rounded-full ${part.criticality === 'CRITICAL' ? 'bg-red-500 animate-pulse' : 'bg-accent'}`} aria-hidden="true" />
                  <span className="md:hidden font-mono text-[10px] text-muted uppercase">{part.criticality}</span>
                </div>
                
                <div className="col-span-3 font-mono text-lg font-bold tracking-tight">
                  {part.id}
                </div>

                <div className="col-span-4 font-display font-semibold text-xs uppercase text-gray-400 group-hover:text-white transition-colors text-center">
                  {part.name}
                </div>

                <div className="col-span-2 hidden md:flex justify-center">
                  <span className="px-2 py-1 bg-background border border-border font-mono text-[8px] text-muted uppercase tracking-tighter">
                    {part.system}
                  </span>
                </div>

                <div className="col-span-2 text-right flex justify-end items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-accent opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-[9px]">Enter Audit</span>
                  <ArrowRight className="w-3 h-3" />
                </div>
              </Link>
            ))
          ) : (
            <div className="flex flex-col items-center justify-center py-24 border border-dashed border-border opacity-50">
               <span className="font-mono text-[10px] uppercase tracking-widest">No Matches in Current Manifest</span>
            </div>
          )}
        </div>

        {visibleCount < parts.length && filteredParts.length >= visibleCount && (
          <button 
            onClick={handleLoadMore}
            className="w-full py-6 mt-4 border-2 border-dashed border-border hover:border-accent/30 hover:bg-accent/5 transition-all group"
          >
            <span className="font-mono text-[10px] text-muted uppercase tracking-[0.3em] group-hover:text-accent">
              Load More From Registry
            </span>
          </button>
        )}
      </div>
    </div>
  );
}
