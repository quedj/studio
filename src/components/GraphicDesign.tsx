"use client";

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export const GraphicDesign = () => {
  const containerRef = useRef(null);
  const slicesRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    slicesRef.current.forEach((slice, i) => {
      gsap.fromTo(slice, 
        { y: 100 * (i + 1), opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 70%",
            end: "bottom 20%",
            scrub: 1
          }
        }
      );
    });
  }, []);

  return (
    <section id="design" ref={containerRef} className="py-40 bg-black">
      <div className="max-w-[1800px] mx-auto px-10">
        <div className="mb-20 flex flex-col lg:flex-row lg:items-end justify-between gap-10">
          <h2 className="text-[10vw] font-black leading-[0.8] tracking-tighter italic">
            VISUAL <br /><span className="text-primary">CORE</span>
          </h2>
          <div className="max-w-md text-right">
             <p className="text-white/40 font-black tracking-widest text-[10px] mb-4 uppercase">Adobe Photoshop • Creative Direction</p>
             <p className="text-white/60 text-lg leading-tight">Masterful image manipulation and artistic architecture crafted through decades of design evolution.</p>
          </div>
        </div>

        <div className="relative w-full aspect-[4/5] lg:aspect-[16/9] bg-zinc-900 overflow-hidden flex items-center justify-center">
          <div className="absolute inset-0 flex">
            {[0, 1, 2, 3].map((i) => (
              <div 
                key={i} 
                ref={el => { if (el) slicesRef.current[i] = el; }}
                className="flex-1 relative h-full overflow-hidden border-r border-white/5"
              >
                <div className="absolute top-0 left-[-100%] w-[400%] h-full">
                  <Image 
                    src="https://picsum.photos/seed/645/1920/1080"
                    alt="645 Portrait Sliced"
                    fill
                    className="object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                    style={{ left: `${-i * 25}%` }}
                    data-ai-hint="portrait design"
                  />
                </div>
              </div>
            ))}
          </div>
          
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <h3 className="text-[15vw] font-black text-white/5 text-outline tracking-[-0.1em] italic">645 PORTRAIT</h3>
          </div>
        </div>
      </div>
    </section>
  );
};