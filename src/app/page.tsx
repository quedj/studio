"use client";

import React, { useEffect, useRef } from 'react';
import dynamic from 'next/dynamic';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Navbar } from '@/components/Navbar';
import { AIShowcase } from '@/components/AIShowcase';
import { GraphicDesign } from '@/components/GraphicDesign';
import { StaticServices } from '@/components/StaticServices';
import { StaticFeaturedProject } from '@/components/StaticFeaturedProject';
import { StaticContact } from '@/components/StaticContact';
import { StaticFooter } from '@/components/StaticFooter';
import { Toaster } from '@/components/ui/toaster';

const ThreeCanvas = dynamic(() => import('@/components/ThreeCanvas').then(mod => mod.ThreeCanvas), { ssr: false });
const CursorGlow = dynamic(() => import('@/components/CursorGlow').then(mod => mod.CursorGlow), { ssr: false });

export default function Home() {
  const mainRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    // Initial Hidden State handled via CSS or GSAP fromTo
    const tl = gsap.timeline();

    tl.fromTo(".nav-item", { y: -20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5, stagger: 0.1, ease: "power2.out" })
      .fromTo(".hero-title", { x: -100, opacity: 0 }, { x: 0, opacity: 1, duration: 1, ease: "power4.out" }, "-=0.3")
      .fromTo(".hero-sub", { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8 }, "-=0.5")
      .fromTo(".hero-cta", { scale: 0.8, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.5, ease: "back.out(1.7)" }, "-=0.3")
      .to("#main-cursor", { opacity: 1, scale: 1, duration: 1 }, "-=0.5");

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
    <main ref={mainRef} className="min-h-screen bg-black text-white selection:bg-primary selection:text-white relative opacity-1">
      <CursorGlow />
      <ThreeCanvas />
      
      <div className="relative z-10">
        <Navbar />
        
        {/* HERO SECTION */}
        <section id="home" className="relative h-screen flex flex-col justify-center px-10 lg:px-24">
          <div className="max-w-[1400px]">
            <span className="hero-sub text-primary font-bold tracking-[0.5em] text-xs uppercase mb-6 block">Founding Architect</span>
            <h1 className="hero-title font-headline text-[15vw] lg:text-[12vw] font-black leading-[0.8] tracking-tighter italic">
              QUE <br />
              <span className="text-outline">EXPERIENCE</span>
            </h1>
            <p className="hero-sub text-white/60 text-lg lg:text-2xl max-w-2xl mt-8 font-medium leading-tight">
              Crafting high-performance digital ecosystems and immersive visual narratives. From logic to rhythm.
            </p>
            <div className="hero-cta mt-12 flex gap-6">
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-primary hover:bg-white hover:text-black text-white px-10 py-5 font-black uppercase tracking-[0.2em] transition-all duration-500"
              >
                Initiate Contact
              </button>
              <button 
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="border border-white/20 hover:border-primary text-white px-10 py-5 font-black uppercase tracking-[0.2em] transition-all duration-500"
              >
                View Works
              </button>
            </div>
          </div>
        </section>

        <div className="scroll-reveal">
          <AIShowcase />
        </div>
        
        <div className="scroll-reveal">
          <GraphicDesign />
        </div>
        
        <div className="scroll-reveal">
          <StaticServices />
        </div>

        <div className="scroll-reveal">
          <StaticFeaturedProject />
        </div>

        <div className="scroll-reveal">
          <StaticContact />
        </div>

        <StaticFooter />
      </div>
      
      <Toaster />
    </main>
  );
}