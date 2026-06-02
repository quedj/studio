
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
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-in-out",
      scrolled ? "py-4 bg-black/95 backdrop-blur-2xl border-b border-white/10" : "py-10 bg-transparent"
    )}>
      <div className="max-w-[1800px] mx-auto flex justify-between items-center px-6 lg:px-10">
        <div 
          className="flex items-center gap-3 group cursor-pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <div className="relative flex items-center justify-center w-12 h-12 border-2 border-white rounded-full transition-all duration-500 group-hover:border-primary group-hover:scale-110">
            <span className="font-headline font-black text-xl italic tracking-tighter">
              Q<span className="text-primary transition-colors group-hover:text-white">U</span>E
            </span>
            <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-primary rounded-full border-2 border-black" />
          </div>
          <div className="font-headline font-black text-2xl tracking-tighter italic uppercase">
            Digital
          </div>
        </div>
        
        <div className="hidden md:flex items-center gap-12">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-[10px] font-black hover:text-primary transition-all uppercase tracking-[0.4em] relative group"
            >
              {link.name}
              <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-primary group-hover:w-full transition-all duration-500" />
            </a>
          ))}
        </div>

        <button 
          className="bg-primary text-white px-8 py-2 text-[10px] font-black uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-500 border-2 border-primary"
          onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
        >
          Contact
        </button>
      </div>
    </nav>
  );
};
