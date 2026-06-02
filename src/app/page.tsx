"use client";

import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import { Navbar } from '@/components/Navbar';
import { AIShowcase } from '@/components/AIShowcase';
import { GraphicDesign } from '@/components/GraphicDesign';
import { StaticServices } from '@/components/StaticServices';
import { StaticProjects } from '@/components/StaticProjects';
import { StaticContact } from '@/components/StaticContact';
import { StaticFooter } from '@/components/StaticFooter';
import { Toaster } from '@/components/ui/toaster';
import { cn } from '@/lib/utils';

const ThreeCanvas = dynamic(() => import('@/components/ThreeCanvas').then(mod => mod.ThreeCanvas), { ssr: false });
const ScrollExperience = dynamic(() => import('@/components/ScrollExperience').then(mod => mod.ScrollExperience), { ssr: false });
const TorchReveal = dynamic(() => import('@/components/TorchReveal').then(mod => mod.TorchReveal), { ssr: false });
const CursorGlow = dynamic(() => import('@/components/CursorGlow').then(mod => mod.CursorGlow), { ssr: false });

export default function Home() {
  const [isDisco, setIsDisco] = useState(false);

  useEffect(() => {
    let typed = "";
    const handleKeyDown = (e: KeyboardEvent) => {
      typed += e.key.toLowerCase();
      if (typed.endsWith("disco")) {
        setIsDisco(true);
        setTimeout(() => setIsDisco(false), 5000);
        typed = "";
      }
      if (typed.length > 10) typed = typed.slice(-5);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <main className={cn(
      "min-h-screen bg-black text-white selection:bg-primary selection:text-white relative",
      isDisco && "disco-mode"
    )}>
      <ThreeCanvas />
      <ScrollExperience />
      <CursorGlow />
      
      <div className="relative z-10">
        <Navbar />
        
        {/* Lando-Inspired Hero */}
        <section id="home" className="h-screen flex items-center justify-center">
          <div className="hero-gradient absolute inset-0 pointer-events-none" />
          <TorchReveal text="QUE EXPERIENCE" />
          
          <div className="relative z-30 text-center pointer-events-none px-10">
             <div className="overflow-hidden mb-4">
               <p className="text-white/40 font-black uppercase tracking-[0.8em] text-[10px] animate-in slide-in-from-bottom-full duration-1000">
                 ENGINEERING THE EXTRAORDINARY
               </p>
             </div>
             <div className="mt-[25vh] space-y-2">
               <h2 className="text-[2vw] font-black italic tracking-widest text-white/20">AI ENGINEER</h2>
               <h2 className="text-[2vw] font-black italic tracking-widest text-primary">GRAPHIC DESIGNER</h2>
               <h2 className="text-[2vw] font-black italic tracking-widest text-white/20">ARCHITECT</h2>
             </div>
          </div>
        </section>

        <AIShowcase />
        <GraphicDesign />
        <StaticServices />
        
        {/* Transition Segment */}
        <div className="py-40 bg-white text-black text-center overflow-hidden">
           <h2 className="text-[15vw] font-black leading-none tracking-tighter italic whitespace-nowrap opacity-10 translate-x-1/2">
             BUILD • DESIGN • SCALE • BUILD • DESIGN • SCALE
           </h2>
        </div>

        <StaticProjects />
        <StaticContact />
        <StaticFooter />
      </div>
      
      <Toaster />
      
      {/* Scroll Down Indicator */}
      <div className="fixed bottom-10 right-10 z-40 flex flex-col items-center gap-4 group">
        <span className="text-[8px] font-black vertical-text uppercase tracking-widest text-white/20 group-hover:text-primary transition-colors">Scroll</span>
        <div className="w-px h-20 bg-white/10 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1/2 bg-primary animate-scroll-indicator" />
        </div>
      </div>
    </main>
  );
}