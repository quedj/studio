
"use client";

import React from 'react';
import { Facebook } from 'lucide-react';

export const StaticFooter = () => {
  return (
    <footer className="py-24 px-6 border-t border-white/5 bg-black">
      <div className="max-w-[1800px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end gap-12">
          <div className="space-y-6">
            <h2 className="font-headline text-2xl font-black tracking-tighter uppercase italic">
              QUE <span className="text-primary">DIGITAL</span>
            </h2>
            <p className="text-white/20 text-[10px] font-black uppercase tracking-[0.4em]">Build. Scale. Evolve.</p>
            <div className="flex gap-4">
              <a 
                href="https://www.facebook.com/thuthuthecreator/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/40 hover:text-primary transition-colors flex items-center gap-2 text-[10px] font-black uppercase tracking-widest"
              >
                <Facebook className="w-4 h-4" /> Gallery Archive
              </a>
            </div>
          </div>

          <div className="flex flex-col items-end gap-4">
             <div className="bg-white/5 px-4 py-2 border border-white/10">
                <p className="text-[10px] font-black uppercase tracking-widest text-white/40">
                  DEVELOPED BY : <span className="text-white">THUTHU</span>
                </p>
             </div>
            <div className="text-right">
              <p className="text-white/20 text-[10px] uppercase tracking-widest font-bold">
                &copy; {new Date().getFullYear()} QUE DIGITAL. ALL RIGHTS RESERVED.
              </p>
              <a 
                href="https://www.sparetools.co.za" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-[10px] text-primary/40 hover:text-primary transition-colors uppercase tracking-[0.2em] font-black italic block mt-2"
              >
                Sparetools - A QUE Digital Project
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
