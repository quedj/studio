
"use client";

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import { Facebook } from 'lucide-react';

export const ImageGallery = () => {
  const containerRef = useRef(null);
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    itemsRef.current.forEach((item, index) => {
      if (!item) return;

      gsap.fromTo(item,
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: item,
            start: "top 85%",
            toggleActions: "play none none reverse"
          }
        }
      );
    });
  }, []);

  return (
    <section id="gallery" ref={containerRef} className="py-40 px-6 lg:px-10 bg-black overflow-hidden">
      <div className="max-w-[1800px] mx-auto">
        <div className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
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
                className="bg-primary hover:bg-white hover:text-black text-white border-none transition-all rounded-none uppercase text-[10px] font-black tracking-widest px-8 h-14"
              >
                <a href="https://www.facebook.com/thuthuthecreator/" target="_blank" rel="noopener noreferrer">
                  View Full Gallery <Facebook className="ml-2 w-4 h-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {PlaceHolderImages.slice(0, 3).map((project, index) => (
            <div
              key={project.id}
              ref={el => { itemsRef.current[index] = el; }}
              className="group relative aspect-[4/5] overflow-hidden bg-secondary/10 border border-white/5"
            >
              <Image
                src={project.imageUrl}
                alt={project.description}
                fill
                className="object-cover transition-all duration-1000 group-hover:scale-105 grayscale group-hover:grayscale-0"
                data-ai-hint={project.imageHint}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 flex flex-col justify-end p-8">
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-primary mb-2">0{index + 1} // ARCHIVE</span>
                <h4 className="text-lg font-bold uppercase italic tracking-tighter leading-tight text-white">
                  {project.description}
                </h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
