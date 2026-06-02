"use client";

import React, { useState, useEffect } from 'react';

export const CursorGlow = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [isVisible]);

  return (
    <div 
      className={`pointer-events-none fixed inset-0 z-0 transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
      style={{
        background: `radial-gradient(800px at ${mousePos.x}px ${mousePos.y}px, hsla(0, 100%, 45%, 0.07), transparent 80%)`,
      }}
    />
  );
};
