import React from 'react';
import { Instagram, Twitter, Linkedin, Facebook } from 'lucide-react';

export const StaticFooter = () => {
  return (
    <footer className="py-20 px-6 border-t border-white/5 bg-black">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-10">
          <div>
            <h2 className="font-headline text-3xl font-bold tracking-tighter uppercase mb-2">
              QUE <span className="text-primary">DJ EXPERIENCE</span>
            </h2>
            <p className="text-white/30 text-sm font-body uppercase tracking-[0.2em]">Build. Rent. DJ.</p>
          </div>

          <div className="flex gap-6">
            <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-primary hover:border-primary transition-all duration-300">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-primary hover:border-primary transition-all duration-300">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-primary hover:border-primary transition-all duration-300">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-primary hover:border-primary transition-all duration-300">
              <Facebook className="w-5 h-5" />
            </a>
          </div>

          <div className="text-center md:text-right">
            <p className="text-white/40 text-sm mb-2">
              &copy; {new Date().getFullYear()} QUE DJ EXPERIENCE. ALL RIGHTS RESERVED.
            </p>
            <a href="https://sparetools.co.za" target="_blank" rel="noopener noreferrer" className="text-xs text-primary/50 hover:text-primary transition-colors">
              A Sparetools Project
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
