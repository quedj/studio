
"use client";

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const DESIGN_PROJECTS = [
  PlaceHolderImages.find(img => img.id === 'design-l6-poster'),
  PlaceHolderImages.find(img => img.id === 'portrait-design'),
  PlaceHolderImages.find(img => img.id === 'design-abstract-1'),
  PlaceHolderImages.find(img => img.id === 'design-minimal-brand'),
].filter(Boolean);

const SlicedProject = ({ image }: { image: any }) => {
  const containerRef = useRef(null);
  const slicesRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const slices = slicesRef.current;

    // Entrance animation for slices
    gsap.fromTo(slices, 
      { 
        y: (i) => (i % 2 === 0 ? 100 : -100), 
        opacity: 0,
      },
      { 
        y: 0, 
        opacity: 1,
        duration: 1.5,
        stagger: 0.05,
        ease: "power4.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 85%",
        }
      }
    );

    // Subtle parallax effect on scroll
    slices.forEach((slice, i) => {
      gsap.to(slice, {
        y: (i + 1) * 5,
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
    <div ref={containerRef} className="relative w-full aspect-[4/5] bg-black overflow-hidden group">
      <div className="absolute inset-0 flex gap-0.5 p-1">
        {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
          <div 
            key={i} 
            ref={el => { if (el) slicesRef.current[i] = el; }}
            className="flex-1 relative h-full overflow-hidden border-x border-white/5"
          >
            <div className="absolute top-0 left-[-100%] w-[800%] h-full">
              <Image 
                src={image?.imageUrl || ''}
                alt={image?.description || ''}
                fill
                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100"
                style={{ left: `${-i * 12.5}%` }}
                data-ai-hint={image?.imageHint}
              />
            </div>
            <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
          </div>
        ))}
      </div>
    </div>
  );
};

export const GraphicDesign = () => {
  return (
    <section id="design" className="py-20 lg:py-40 bg-black overflow-hidden">
      <div className="max-w-[1800px] mx-auto px-6 lg:px-10">
        <div className="mb-20 flex flex-col lg:flex-row lg:items-end justify-between gap-10">
          <div>
            <h2 className="text-[10vw] font-black leading-[0.8] tracking-tighter italic uppercase">
              VISUAL <br /><span className="text-primary">CORE</span>
            </h2>
          </div>
          <div className="max-w-xl text-right ml-auto">
             <p className="text-white/40 font-black tracking-widest text-[10px] mb-4 uppercase">Portfolio • Adobe Photoshop • Creative Direction</p>
             <p className="text-white/60 text-lg md:text-xl leading-tight font-medium">
               Transforming raw concepts into digital masterpieces through masterful image manipulation and artistic architecture. Every project is a journey in visual storytelling.
             </p>
          </div>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {DESIGN_PROJECTS.map((project: any, index: number) => (
              <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                <div className="space-y-4">
                  <SlicedProject image={project} />
                  <div className="flex justify-between items-center px-2">
                    <span className="text-[10px] font-black uppercase tracking-widest text-white/40">Project 0{index + 1}</span>
                    <h4 className="text-sm font-bold uppercase tracking-tighter italic">{project.description.split(' ').slice(0, 3).join(' ')}</h4>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-end gap-2 mt-8 px-2">
            <CarouselPrevious className="static translate-y-0 bg-white/5 border-white/10 hover:bg-primary hover:text-white rounded-none w-12 h-12" />
            <CarouselNext className="static translate-y-0 bg-white/5 border-white/10 hover:bg-primary hover:text-white rounded-none w-12 h-12" />
          </div>
        </Carousel>
      </div>
    </section>
  );
};
