
"use client";

import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export const StaticContact = () => {
  return (
    <section id="contact" className="py-40 px-6 bg-black">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-col lg:flex-row gap-20">
          <div className="flex-1">
            <h2 className="text-[10vw] lg:text-[8vw] font-black leading-[0.85] tracking-tighter italic uppercase mb-12">
              START A <br />
              <span className="text-outline">PROJECT</span>
            </h2>
            <p className="text-white/60 text-xl md:text-2xl font-medium leading-tight max-w-xl">
              Ready to elevate your digital presence or architect a new platform? Contact me directly to discuss your vision.
            </p>
          </div>
          
          <div className="flex-1 space-y-12">
            <div className="group border-b border-white/10 pb-8 hover:border-primary transition-colors">
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-[10px] font-black tracking-widest uppercase text-white/40 mb-1">Email</p>
                  <a href="mailto:tr16945@gmail.com" className="text-2xl md:text-3xl font-black italic hover:text-primary transition-colors">
                    TR16945@GMAIL.COM
                  </a>
                </div>
              </div>
            </div>

            <div className="group border-b border-white/10 pb-8 hover:border-primary transition-colors">
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-[10px] font-black tracking-widest uppercase text-white/40 mb-1">Mobile</p>
                  <a href="tel:0713540876" className="text-2xl md:text-3xl font-black italic hover:text-primary transition-colors">
                    071 354 0876
                  </a>
                </div>
              </div>
            </div>

            <div className="group border-b border-white/10 pb-8">
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-[10px] font-black tracking-widest uppercase text-white/40 mb-1">Base</p>
                  <p className="text-2xl md:text-3xl font-black italic uppercase">
                    JOHANNESBURG, SA
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
