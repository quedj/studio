
"use client";

import React, { useEffect, useRef } from 'react';
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
    <section id="ai-skills" ref={sectionRef} className="py-40 px-6 lg:px-10 bg-black">
      <div className="max-w-[1400px] mx-auto">
        <div className="space-y-12">
          <div ref={titleRef}>
            <Badge className="bg-primary text-white rounded-none px-4 py-1 mb-6 text-[10px] font-bold tracking-[0.2em]">
              <Award className="w-3 h-3 mr-2" /> GOOGLE GENAI CERTIFIED
            </Badge>
            <h2 className="text-[12vw] lg:text-[10vw] font-black leading-[0.85] tracking-tighter italic uppercase">
              AI <br />
              <span className="text-outline">ARCHITECT</span>
            </h2>
          </div>

          <div className="max-w-3xl space-y-8">
            <p className="text-white/60 text-xl md:text-2xl font-medium leading-tight">
              Integrating LLMs and multi-modal intelligence into scalable ecosystems. I build bridges between raw data and delightful user experiences.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-2xl">
              {TOOLS.map((tool) => (
                <div key={tool.name} className="flex items-center gap-3 p-4 border border-white/10 hover:border-primary/50 transition-all group bg-secondary/10">
                  <div className="text-primary group-hover:scale-110 transition-transform">{tool.icon}</div>
                  <span className="text-[10px] font-black tracking-widest uppercase">{tool.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
