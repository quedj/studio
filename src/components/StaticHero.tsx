"use client";

import React from 'react';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';

export const StaticHero = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px] animate-pulse" />
      
      <div className="relative z-10 max-w-4xl px-6 text-center">
        <h1 className="font-headline text-6xl md:text-8xl font-black tracking-tighter mb-6 leading-none">
          QUE <span className="text-primary text-glow-primary">DJ EXPERIENCE</span>
        </h1>
        <p className="text-primary font-body text-xl md:text-2xl uppercase tracking-[0.3em] mb-8 font-bold">
          Apps & Beats – Build. Rent. DJ.
        </p>
        <p className="text-white/70 text-lg md:text-xl font-body max-w-2xl mx-auto mb-10 leading-relaxed">
          We build high‑quality marketplace apps that connect people, goods, and services. 
          Alongside our tech work, we provide professional DJ services that bring energy and entertainment to any occasion.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg rounded-none uppercase tracking-widest font-bold border-2 border-primary hover:border-white transition-all duration-300"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Start a Project <ChevronRight className="ml-2 w-5 h-5" />
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="border-2 border-white/20 hover:border-primary text-white bg-transparent px-8 py-6 text-lg rounded-none uppercase tracking-widest font-bold transition-all duration-300"
            onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Explore Services
          </Button>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-40">
        <div className="w-px h-12 bg-gradient-to-b from-primary to-transparent" />
      </div>
    </section>
  );
};
