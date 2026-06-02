"use client";

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Button } from '@/components/ui/button';
import { Facebook } from 'lucide-react';

export const ImageGallery = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
  }, []);

  return (
    <section id="gallery" ref={containerRef} className="py-40 px-6 lg:px-10 bg-black overflow-hidden border-t border-white/5">
      <div className="max-w-[1800px] mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <span className="text-primary font-bold tracking-[0.4em] uppercase text-[10px] mb-4 block italic">Design Core</span>
            <h2 className="text-[10vw] lg:text-[8vw] font-black uppercase tracking-tighter italic leading-[0.85]">
              VISUAL <br />
              <span className="text-outline">ARCHIVE</span>
            </h2>
          </div>
          <div className="max-w-md md:text-right space-y-6">
            <p className="text-white/40 text-sm font-medium leading-relaxed uppercase tracking-widest">
              Explore the full creative archive of visual identities, architectural studies, and experimental projects on my official social gallery.
            </p>
            <div className="flex justify-end">
              <Button 
                asChild
                className="bg-primary hover:bg-white hover:text-black text-white border-none transition-all rounded-none uppercase text-[10px] font-black tracking-widest px-8 h-14 shadow-[0_0_20px_rgba(255,0,0,0.15)]"
              >
                <a href="https://www.facebook.com/thuthuthecreator/" target="_blank" rel="noopener noreferrer">
                  View Full Gallery <Facebook className="ml-2 w-4 h-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
