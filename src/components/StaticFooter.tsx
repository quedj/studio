import React from 'react';

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

          <div className="text-center md:text-right">
            <p className="text-white/40 text-sm mb-2 uppercase tracking-wider">
              &copy; 2018 QUE DJ EXPERIENCE. ALL RIGHTS RESERVED.
            </p>
            <div className="mt-2">
              <a 
                href="https://sparetools.co.za" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-xs text-primary/50 hover:text-primary transition-colors uppercase tracking-widest font-bold"
              >
                Sparetools - A QUE DJ EXPERIENCE Project
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
