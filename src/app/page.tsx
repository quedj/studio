"use client";

import React, { useEffect, useRef } from 'react';
import dynamic from 'next/dynamic';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Navbar } from '@/components/Navbar';
import { AIShowcase } from '@/components/AIShowcase';
import { ImageGallery } from '@/components/ImageGallery';
import { StaticServices } from '@/components/StaticServices';
import { StaticFeaturedProject } from '@/components/StaticFeaturedProject';
import { BookingPortal } from '@/components/BookingPortal';
import { StaticFooter } from '@/components/StaticFooter';
import { StaticHero } from '@/components/StaticHero';
import { Toaster } from '@/components/ui/toaster';

const CursorGlow = dynamic(() => import('@/components/CursorGlow').then(mod => mod.CursorGlow), { ssr: false });
const ThreeCanvas = dynamic(() => import('@/components/ThreeCanvas').then(mod => mod.ThreeCanvas), { ssr: false });

export default function Home() {
  const mainRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    // Initial entrance animations
    const tl = gsap.timeline();

    tl.fromTo(".nav-item", { y: -20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5, stagger: 0.1, ease: "power2.out" })
      .to("#main-cursor", { opacity: 1, scale: 1, duration: 1 });

    // Scroll revelations
    const sections = gsap.utils.toArray('.scroll-reveal');
    sections.forEach((section: any) => {
      gsap.fromTo(section, 
        { y: 50, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          duration: 1,
          scrollTrigger: {
            trigger: section,
            start: "top 85%",
            toggleActions: "play none none reverse"
          }
        }
      );
    });

  }, []);

  return (
    <main ref={mainRef} className="min-h-screen bg-black text-white selection:bg-primary selection:text-white relative overflow-hidden">
      <ThreeCanvas />
      <CursorGlow />
      
      <div className="relative z-10">
        <Navbar />
        
        <StaticHero />

        <div className="scroll-reveal">
          <AIShowcase />
        </div>

        <div className="scroll-reveal">
          <ImageGallery />
        </div>
        
        <div className="scroll-reveal" id="services">
          <StaticServices />
        </div>

        <div className="scroll-reveal">
          <StaticFeaturedProject />
        </div>

        <div className="scroll-reveal">
          <BookingPortal />
        </div>

        <StaticFooter />
      </div>
      
      <Toaster />
    </main>
  );
}
