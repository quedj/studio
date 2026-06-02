"use client";

import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export const StaticContact = () => {
  return (
    <section id="contact" className="py-32 px-6 bg-black border-t border-white/5">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="font-headline text-4xl md:text-5xl font-bold tracking-tighter uppercase mb-6 leading-tight">
          Ready to <span className="text-primary">Connect?</span>
        </h2>
        <p className="text-white/60 text-lg mb-16 leading-relaxed max-w-2xl mx-auto">
          Whether you're looking for a technology partner to build your next marketplace or have a professional inquiry, reach out through our official channels.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="flex flex-col items-center gap-4 group">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
              <Mail className="w-8 h-8" />
            </div>
            <div>
              <p className="text-sm text-white/40 uppercase tracking-widest font-bold mb-1">Email Us</p>
              <a href="mailto:tr16945@gmail.com" className="text-xl font-bold hover:text-primary transition-colors">tr16945@gmail.com</a>
            </div>
          </div>

          <div className="flex flex-col items-center gap-4 group">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
              <Phone className="w-8 h-8" />
            </div>
            <div>
              <p className="text-sm text-white/40 uppercase tracking-widest font-bold mb-1">Call Us</p>
              <a href="tel:0713540876" className="text-xl font-bold hover:text-primary transition-colors">0713540876</a>
            </div>
          </div>

          <div className="flex flex-col items-center gap-4 group">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
              <MapPin className="w-8 h-8" />
            </div>
            <div>
              <p className="text-sm text-white/40 uppercase tracking-widest font-bold mb-1">Location</p>
              <p className="text-xl font-bold">Johannesburg, South Africa</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
