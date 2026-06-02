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
    { name: 'AI Expert', href: '#ai-skills' },
    { name: 'Design', href: '#design' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
      scrolled ? "py-4 bg-black/80 backdrop-blur-xl border-b border-white/10" : "py-8 bg-transparent"
    )}>
      <div className="max-w-[1800px] mx-auto flex justify-between items-center px-10">
        <div className="font-headline font-black text-3xl tracking-tighter group cursor-pointer">
          QUE <span className="text-primary group-hover:text-white transition-colors">EXPERIENCE</span>
        </div>
        
        <div className="hidden md:flex items-center gap-12">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-[11px] font-black hover:text-primary transition-all uppercase tracking-[0.3em] relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-px after:bg-primary hover:after:w-full after:transition-all"
            >
              {link.name}
            </a>
          ))}
        </div>

        <button className="md:hidden text-white">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12"></line><line x1="4" x2="20" y1="6" y2="6"></line><line x1="4" x2="20" y1="18" y2="18"></line></svg>
        </button>
      </div>
    </nav>
  );
};