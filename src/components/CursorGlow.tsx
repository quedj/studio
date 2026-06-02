"use client";

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

export const CursorGlow = () => {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!cursorRef.current) return;

    const cursor = cursorRef.current;
    
    const moveCursor = (e: MouseEvent) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.8,
        ease: "power2.out"
      });
    };

    window.addEventListener('mousemove', moveCursor);
    return () => window.removeEventListener('mousemove', moveCursor);
  }, []);

  return <div ref={cursorRef} className="cursor-blob" id="main-cursor" />;
};