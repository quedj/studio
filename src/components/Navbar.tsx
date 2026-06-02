
"use client";

import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Expertise', href: '#services' },
    { name: 'Archive', href: '#gallery' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-in-out",
      scrolled ? "py-4 bg-black/90 backdrop-blur-2xl border-b border-white/5" : "py-10 bg-transparent"
    )}>
      <div className="max-w-[1800px] mx-auto flex justify-between items-center px-10">
        <div className="nav-item font-headline font-black text-4xl tracking-tighter group cursor-pointer italic">
          QUE <span className="text-primary group-hover:text-white transition-colors duration-500">DIGITAL</span>
        </div>
        
        <div className="hidden md:flex items-center gap-16">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="nav-item text-[10px] font-black hover:text-primary transition-all uppercase tracking-[0.4em] relative group"
            >
              {link.name}
              <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-primary group-hover:w-full transition-all duration-500" />
            </a>
          ))}
        </div>

        <button 
          className="nav-item bg-white text-black px-6 py-2 text-[10px] font-black uppercase tracking-widest hover:bg-primary hover:text-white transition-all duration-500"
          onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
        >
          Contact Me
        </button>
      </div>
    </nav>
  );
};
