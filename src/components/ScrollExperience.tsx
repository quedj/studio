
"use client";

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

export const ScrollExperience = () => {
  const orbRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    if (!orbRef.current || !pathRef.current) return;

    gsap.to(orbRef.current, {
      scrollTrigger: {
        trigger: "body",
        start: "top top",
        end: "bottom bottom",
        scrub: 2,
      },
      duration: 1,
      motionPath: {
        path: pathRef.current,
        align: pathRef.current,
        alignOrigin: [0.5, 0.5],
        autoRotate: true,
      },
      scale: 2,
      opacity: 1,
      ease: "none"
    });
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-30 opacity-20">
      <svg className="w-full h-full" viewBox="0 0 1000 1000" fill="none">
        <path 
          ref={pathRef}
          d="M-50,100 C200,300 800,100 1050,400 S200,800 1050,900" 
          stroke="transparent"
          strokeWidth="2"
        />
      </svg>
      <div 
        ref={orbRef} 
        className="w-8 h-8 rounded-full bg-primary blur-xl opacity-0"
        style={{ position: 'absolute' }}
      />
    </div>
  );
};
