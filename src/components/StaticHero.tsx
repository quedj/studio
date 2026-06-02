"use client";

import React from 'react';
import { Button } from '@/components/ui/button';
import { ChevronRight, User } from 'lucide-react';

export const StaticHero = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px] animate-pulse" />
      
      <div className="relative z-10 max-w-4xl px-6 text-center mt-12">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 mb-6 animate-float">
          <User className="w-4 h-4 text-primary" />
          <span className="text-xs font-bold uppercase tracking-widest text-primary">Founder & Lead Developer</span>
        </div>
        
        <h1 className="font-headline text-5xl md:text-8xl font-black tracking-tighter mb-6 leading-none">
          I AM <span className="text-primary text-glow-primary">QUE</span>
        </h1>
        
        <p className="text-white font-body text-xl md:text-2xl uppercase tracking-[0.3em] mb-8 font-bold">
          The Mind Behind the Rhythm & Digital Evolution
        </p>
        
        <p className="text-white/70 text-lg md:text-xl font-body max-w-2xl mx-auto mb-10 leading-relaxed">
          I build high‑quality digital solutions that bridge the gap between people and technology. 
          As I transition my career focus from professional DJing to full‑time software development, 
          I bring the same energy and precision to every line of code as I did to the stage.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg rounded-none uppercase tracking-widest font-bold border-2 border-primary hover:border-white transition-all duration-300"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Work with Me <ChevronRight className="ml-2 w-5 h-5" />
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="border-2 border-white/20 hover:border-primary text-white bg-transparent px-8 py-6 text-lg rounded-none uppercase tracking-widest font-bold transition-all duration-300"
            onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
          >
            My Expertise
          </Button>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-40">
        <div className="w-px h-12 bg-gradient-to-b from-primary to-transparent" />
      </div>
    </section>
  );
};
