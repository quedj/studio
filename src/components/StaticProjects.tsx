"use client";

import React from 'react';
import { ExternalLink } from 'lucide-react';

export const StaticProjects = () => {
  return (
    <section id="projects" className="py-24 px-6 bg-black border-t border-white/5">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="font-headline text-3xl md:text-4xl font-bold tracking-tighter uppercase mb-12">
          Upcoming <span className="text-primary">Projects</span>
        </h2>
        
        <div className="space-y-8">
          <div className="p-8 border border-white/10 hover:border-primary/50 transition-colors duration-300">
            <h3 className="font-headline text-2xl font-bold mb-4 uppercase tracking-wider">Sparetools</h3>
            <p className="text-white/60 mb-6 leading-relaxed max-w-2xl mx-auto">
              A specialized marketplace platform designed for tool rentals and peer-to-peer hardware sharing. We're building the infrastructure to connect creators with the equipment they need, when they need it.
            </p>
            <a 
              href="https://www.sparetools.co.za" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center text-primary font-bold hover:text-white transition-colors group"
            >
              VISIT SPARETOOLS.CO.ZA <ExternalLink className="ml-2 w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
          </div>
          
          <p className="text-white/30 text-sm uppercase tracking-[0.2em]">More projects in the pipeline...</p>
        </div>
      </div>
    </section>
  );
};
