"use client";

import React, { useEffect, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Award, Database, Cloud, Code2, Github, Cpu } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const TOOLS = [
  { name: 'Firebase', icon: <Database className="w-4 h-4" /> },
  { name: 'Google Cloud', icon: <Cloud className="w-4 h-4" /> },
  { name: 'Supabase', icon: <Database className="w-4 h-4" /> },
  { name: 'GitHub', icon: <Github className="w-4 h-4" /> },
  { name: 'Genkit', icon: <Cpu className="w-4 h-4" /> },
  { name: 'Dreamweaver', icon: <Code2 className="w-4 h-4" /> }
];

export const AIShowcase = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    gsap.fromTo(titleRef.current, 
      { x: -100, opacity: 0 },
      { 
        x: 0, 
        opacity: 1, 
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "top 20%",
          scrub: 1
        }
      }
    );
  }, []);

  return (
    <section id="ai-skills" ref={sectionRef} className="py-40 px-10">
      <div className="max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-20">
        <div className="lg:col-span-7 space-y-12">
          <div ref={titleRef}>
            <Badge className="bg-primary text-white rounded-none px-4 py-1 mb-6 text-[10px] font-bold tracking-[0.2em]">
              <Award className="w-3 h-3 mr-2" /> GOOGLE GENAI CERTIFIED
            </Badge>
            <h2 className="text-[12vw] lg:text-[8vw] font-black leading-[0.85] tracking-tighter italic">
              AI <br />
              <span className="text-outline">ARCHITECT</span>
            </h2>
          </div>

          <div className="max-w-xl space-y-6">
            <p className="text-white/60 text-xl font-medium leading-tight">
              Integrating LLMs and multi-modal intelligence into scalable ecosystems. I build bridges between raw data and delightful user experiences.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {TOOLS.map((tool) => (
                <div key={tool.name} className="flex items-center gap-3 p-4 border border-white/10 hover:border-primary/50 transition-all group">
                  <div className="text-primary group-hover:scale-110 transition-transform">{tool.icon}</div>
                  <span className="text-[10px] font-black tracking-widest">{tool.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="lg:col-span-5 flex items-center justify-center">
          <div className="relative w-full aspect-square max-w-md">
            <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full animate-pulse" />
            <Card className="relative glass rounded-none border-primary/40 h-full flex flex-col justify-center p-12 text-center group overflow-hidden">
               <div className="absolute top-0 left-0 w-full h-1 bg-primary" />
               <div className="space-y-8 relative z-10">
                 <h3 className="text-4xl font-black italic tracking-tighter">GENAI INTERACTIVE</h3>
                 <p className="text-white/40 text-sm leading-relaxed">
                   Experience the fusion of logic and creativity. Click below to initiate a neural sequence.
                 </p>
                 <button className="w-full bg-white text-black font-black py-6 uppercase tracking-[0.3em] hover:bg-primary hover:text-white transition-all duration-500">
                   Execute AI Vision
                 </button>
               </div>
               <div className="absolute -bottom-20 -right-20 text-[15rem] font-black text-white/5 italic select-none pointer-events-none group-hover:text-primary/10 transition-colors">
                 AI
               </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};