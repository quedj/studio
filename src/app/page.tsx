
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

// Dynamically import heavy interactive components with SSR disabled to prevent module resolution errors
const ThreeCanvas = dynamic(() => import('@/components/ThreeCanvas').then(mod => mod.ThreeCanvas), { ssr: false });
const ScrollExperience = dynamic(() => import('@/components/ScrollExperience').then(mod => mod.ScrollExperience), { ssr: false });
const TorchReveal = dynamic(() => import('@/components/TorchReveal').then(mod => mod.TorchReveal), { ssr: false });

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
      "min-h-screen bg-black text-white scroll-smooth relative selection:bg-primary selection:text-white overflow-hidden",
      isDisco && "disco-mode"
    )}>
      {/* Background Layer */}
      <ThreeCanvas />
      <ScrollExperience />

      {/* Foreground Layer */}
      <div className="relative z-10">
        <Navbar />
        
        {/* Immersive Hero */}
        <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
          <TorchReveal text="QUE DJ EXPERIENCE" />
          <div className="relative z-30 text-center pointer-events-none">
            <p className="text-white/40 font-headline font-bold uppercase tracking-[0.5em] mb-4 animate-in fade-in slide-in-from-bottom-4 duration-1000">
              Apps & Beats — Build. Rent. DJ.
            </p>
            <h2 className="text-2xl font-bold text-white/60 uppercase tracking-widest mt-[20vh]">
              AI ENGINEER • GRAPHIC DESIGNER • ARCHITECT
            </h2>
          </div>
        </section>

        <AIShowcase />
        <GraphicDesign />
        <StaticServices />
        <StaticProjects />
        <StaticContact />
        <StaticFooter />
      </div>
      <Toaster />
      
      {/* Scroll Hint */}
      <div className="fixed bottom-10 left-1/2 -translate-x-1/2 z-40 opacity-50 animate-bounce pointer-events-none">
        <div className="w-px h-12 bg-gradient-to-b from-primary to-transparent" />
      </div>
    </main>
  );
}
