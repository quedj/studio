
"use client";

import React from 'react';
import { ChevronRight, Code2 } from 'lucide-react';

export const StaticHero = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Background Glows */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/20 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />
      
      <div className="relative z-10 max-w-4xl px-6 text-center mt-12">
        <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full border border-primary/30 bg-primary/5 mb-10">
          <Code2 className="w-4 h-4 text-primary" />
          <span className="text-[10px] font-black uppercase tracking-widest text-primary">Technical Architect • Visual Designer</span>
        </div>
        
        <div className="mb-8 flex flex-col items-center justify-center gap-4">
          <div className="w-24 h-24 border-4 border-white rounded-full flex items-center justify-center mb-4">
             <span className="font-headline font-black text-5xl italic tracking-tighter">
              Q<span className="text-primary">U</span>E
            </span>
          </div>
          <h1 className="font-headline text-6xl md:text-9xl font-black tracking-tighter leading-none uppercase italic">
            DIGITAL
          </h1>
        </div>
        
        <p className="text-white/60 text-lg md:text-xl font-body max-w-2xl mx-auto mb-12 leading-relaxed uppercase tracking-[0.2em] font-medium">
          Building high‑quality digital solutions <br /> that bridge the gap between people and technology.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <button 
            className="bg-primary hover:bg-white hover:text-black text-white px-10 py-5 text-xs rounded-none uppercase tracking-widest font-black border-2 border-primary transition-all duration-500 flex items-center gap-2 shadow-[0_0_30px_rgba(255,0,0,0.2)]"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Start a project <ChevronRight className="w-4 h-4" />
          </button>
          <button 
            className="border-2 border-white/10 hover:border-primary text-white bg-transparent px-10 py-5 text-xs rounded-none uppercase tracking-widest font-black transition-all duration-500"
            onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Capabilities
          </button>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-20">
        <div className="w-px h-16 bg-gradient-to-b from-primary to-transparent" />
      </div>
    </section>
  );
};
