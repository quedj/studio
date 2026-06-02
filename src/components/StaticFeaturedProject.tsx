"use client";

import React from 'react';
import { Button } from '@/components/ui/button';
import { ExternalLink, Rocket } from 'lucide-react';

export const StaticFeaturedProject = () => {
  return (
    <section id="projects" className="py-32 px-6 bg-black relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="text-primary font-bold tracking-[0.4em] uppercase text-sm mb-4 block">Coming Soon</span>
          <h2 className="font-headline text-4xl md:text-6xl font-black tracking-tighter uppercase mb-6">
            Featured <span className="text-primary">Project</span>
          </h2>
        </div>

        <div className="bg-secondary/20 border border-white/5 p-8 md:p-16 rounded-2xl flex flex-col items-center text-center gap-12 group hover:border-primary/30 transition-all duration-500">
          <div className="space-y-6 flex flex-col items-center">
            <div className="inline-flex p-4 rounded-xl bg-primary/10 border border-primary/20 text-primary">
              <Rocket className="w-8 h-8" />
            </div>
            <h3 className="font-headline text-4xl md:text-5xl font-bold tracking-tight">Sparetools</h3>
            <p className="text-white/60 text-lg leading-relaxed max-w-xl">
              A specialized marketplace platform designed for tool rentals and peer-to-peer hardware sharing. We're building the infrastructure to connect creators with the equipment they need, when they need it.
            </p>
            <div className="pt-4">
              <Button 
                asChild
                className="bg-primary hover:bg-white hover:text-black py-6 px-8 rounded-none font-bold uppercase tracking-widest transition-all duration-300"
              >
                <a href="https://www.sparetools.co.za" target="_blank" rel="noopener noreferrer">
                  Visit Project <ExternalLink className="ml-2 w-4 h-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
