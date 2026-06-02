import React from 'react';

export const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-white/10 bg-black">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div>
          <h2 className="font-headline text-2xl font-bold tracking-tighter">
            QUE <span className="text-primary">DIGITAL</span>
          </h2>
          <p className="text-white/40 text-sm mt-2 font-body uppercase tracking-widest">Build. Scale. Evolve.</p>
        </div>
        
        <div className="flex gap-8 text-sm font-body text-white/60">
          <a href="#services" className="hover:text-primary transition-colors">Expertise</a>
          <a href="#gallery" className="hover:text-primary transition-colors">Archive</a>
          <a href="#projects" className="hover:text-primary transition-colors">Projects</a>
        </div>
        
        <div className="text-right">
          <p className="text-xs text-white/30 font-body">
            &copy; {new Date().getFullYear()} QUE DIGITAL. ALL RIGHTS RESERVED.
          </p>
        </div>
      </div>
    </footer>
  );
};
