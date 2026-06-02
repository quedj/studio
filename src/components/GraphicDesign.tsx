"use client";

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export const SlicedPortrait = () => {
  const containerRef = useRef(null);
  const slicesRef = useRef<HTMLDivElement[]>([]);
  const portraitImg = PlaceHolderImages.find(img => img.id === 'portrait-design');

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Entrance animation for slices
    gsap.fromTo(slicesRef.current, 
      { 
        y: (i) => (i % 2 === 0 ? 100 : -100), 
        opacity: 0,
      },
      { 
        y: 0, 
        opacity: 1,
        duration: 1.5,
        stagger: 0.1,
        ease: "power4.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        }
      }
    );

    // Subtle parallax effect on scroll
    slicesRef.current.forEach((slice, i) => {
      gsap.to(slice, {
        y: (i + 1) * 10,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true
        }
      });
    });
  }, []);

  return (
    <div ref={containerRef} className="relative w-full aspect-[4/5] lg:aspect-[16/9] bg-black overflow-hidden group">
      <div className="absolute inset-0 flex gap-1 lg:gap-2 p-2 lg:p-4">
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <div 
            key={i} 
            ref={el => { if (el) slicesRef.current[i] = el; }}
            className="flex-1 relative h-full overflow-hidden border border-white/5"
          >
            <div className="absolute top-0 left-[-100%] w-[600%] h-full">
              <Image 
                src={portraitImg?.imageUrl || ''}
                alt={portraitImg?.description || ''}
                fill
                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100"
                style={{ left: `${-i * 16.66}%` }}
                data-ai-hint={portraitImg?.imageHint}
              />
            </div>
            <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
          </div>
        ))}
      </div>
      
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-20">
        <h3 className="text-[12vw] font-black text-white/5 text-outline tracking-[-0.05em] italic uppercase select-none">645 PORTRAIT</h3>
      </div>
    </div>
  );
};

export const GraphicDesign = () => {
  return (
    <section id="design" className="py-20 lg:py-40 bg-black">
      <div className="max-w-[1800px] mx-auto px-6 lg:px-10">
        <div className="mb-20 flex flex-col lg:flex-row lg:items-start justify-between gap-10">
          <div>
            <h2 className="text-[10vw] font-black leading-[0.8] tracking-tighter italic uppercase">
              VISUAL <br /><span className="text-primary">CORE</span>
            </h2>
          </div>
          <div className="max-w-xl text-right ml-auto">
             <p className="text-white/40 font-black tracking-widest text-[10px] mb-4 uppercase">Adobe Photoshop • Creative Direction</p>
             <p className="text-white/60 text-lg md:text-xl leading-tight font-medium">
               Masterful image manipulation and artistic architecture crafted through decades of design evolution. Transforming raw concepts into digital masterpieces.
             </p>
          </div>
        </div>

        <SlicedPortrait />
      </div>
    </section>
  );
};