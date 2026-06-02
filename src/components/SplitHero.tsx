
"use client";

import React, { useState } from 'react';
import { Rocket, Music, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export const SplitHero = () => {
  const [hovered, setHovered] = useState<'tech' | 'dj' | null>(null);

  const techImg = PlaceHolderImages.find(img => img.id === 'tech-hero');
  const djImg = PlaceHolderImages.find(img => img.id === 'dj-hero');

  return (
    <section className="relative w-full h-screen overflow-hidden flex flex-col md:flex-row border-b border-primary/20">
      {/* Tech Side */}
      <div 
        className={`relative flex-1 transition-all duration-700 ease-in-out cursor-pointer group ${hovered === 'tech' ? 'md:flex-[1.5]' : hovered === 'dj' ? 'md:flex-[0.5]' : ''}`}
        onMouseEnter={() => setHovered('tech')}
        onMouseLeave={() => setHovered(null)}
        onClick={() => document.getElementById('ai-tool')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <div className="absolute inset-0 z-0">
          <Image
            src={techImg?.imageUrl || ''}
            alt={techImg?.description || ''}
            fill
            className="object-cover opacity-40 grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
            data-ai-hint={techImg?.imageHint}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
        </div>
        
        <div className="relative z-10 h-full flex flex-col justify-center items-center md:items-start p-8 md:p-16 text-center md:text-left">
          <div className="mb-4 inline-flex p-3 rounded-full bg-primary/20 border border-primary text-primary">
            <Rocket className="w-8 h-8" />
          </div>
          <h1 className="font-headline text-5xl md:text-7xl font-bold tracking-tighter mb-4">
            QUE <span className="text-primary">DIGITAL</span>
          </h1>
          <p className="max-w-md text-xl text-white/80 font-body mb-8">
            Architecting next-generation marketplace solutions and peer-to-peer platforms.
          </p>
          <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white transition-all animate-pulse-120">
            Build Your Vision <ChevronRight className="ml-2 w-4 h-4" />
          </Button>
        </div>
      </div>

      {/* Vertical Divider */}
      <div className="hidden md:block w-px h-full bg-primary/30 relative z-20">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black border border-primary p-4 rounded-full shadow-[0_0_20px_rgba(230,0,0,0.5)]">
          <span className="font-headline font-bold text-primary">&</span>
        </div>
      </div>

      {/* DJ Side */}
      <div 
        className={`relative flex-1 transition-all duration-700 ease-in-out cursor-pointer group ${hovered === 'dj' ? 'md:flex-[1.5]' : hovered === 'tech' ? 'md:flex-[0.5]' : ''}`}
        onMouseEnter={() => setHovered('dj')}
        onMouseLeave={() => setHovered(null)}
        onClick={() => document.getElementById('ai-tool')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <div className="absolute inset-0 z-0">
          <Image
            src={djImg?.imageUrl || ''}
            alt={djImg?.description || ''}
            fill
            className="object-cover opacity-40 grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
            data-ai-hint={djImg?.imageHint}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
        </div>
        
        <div className="relative z-10 h-full flex flex-col justify-center items-center md:items-end p-8 md:p-16 text-center md:text-right">
          <div className="mb-4 inline-flex p-3 rounded-full bg-primary/20 border border-primary text-primary">
            <Music className="w-8 h-8" />
          </div>
          <h1 className="font-headline text-5xl md:text-7xl font-bold tracking-tighter mb-4">
            QUE <span className="text-primary">RHYTHM</span>
          </h1>
          <p className="max-w-md text-xl text-white/80 font-body mb-8">
            High-energy professional DJ performances curated for unforgettable experiences.
          </p>
          <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white transition-all animate-pulse-120">
            Book the Vibe <ChevronRight className="ml-2 w-4 h-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};
