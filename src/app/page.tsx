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
import { SlicedPortrait } from '@/components/GraphicDesign';

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
        
        {/* Immersive Hero with Sliced Imagery */}
        <section id="home" className="pt-32 lg:pt-40">
          <div className="max-w-[1800px] mx-auto px-6 lg:px-10 mb-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-none border border-primary/30 bg-primary/5 mb-6">
              <span className="text-[10px] font-bold uppercase tracking-widest text-primary">Founder & Lead Developer</span>
            </div>
            <h1 className="text-[15vw] font-black leading-[0.75] tracking-tighter italic mb-10">
              I AM <br />
              <span className="text-primary">QUE</span>
            </h1>
          </div>
          
          {/* Featured Visual at the Top */}
          <div className="px-4 lg:px-10">
            <SlicedPortrait />
          </div>

          <div className="max-w-[1800px] mx-auto px-6 lg:px-10 mt-20 grid grid-cols-1 lg:grid-cols-2 gap-20">
             <p className="text-white font-body text-xl lg:text-3xl uppercase tracking-[0.2em] font-bold leading-tight">
               THE MIND BEHIND THE <span className="text-primary">RHYTHM</span> & DIGITAL EVOLUTION
             </p>
             <p className="text-white/60 text-lg lg:text-xl font-body leading-relaxed">
               I build high‑quality digital solutions that bridge the gap between people and technology. 
               As I transition my career focus from professional DJing to full‑time software development, 
               I bring the same energy and precision to every line of code as I did to the stage.
             </p>
          </div>
        </section>

        <AIShowcase />
        <GraphicDesign />
        <StaticServices />
        
        {/* High-Impact Segment */}
        <div className="py-40 bg-white text-black text-center overflow-hidden">
           <h2 className="text-[15vw] font-black leading-none tracking-tighter italic whitespace-nowrap opacity-10 -translate-x-1/2">
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
