
"use client";

import React from 'react';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { PenTool, Layers, Layout } from 'lucide-react';

export const GraphicDesign = () => {
  return (
    <section id="design" className="py-32 px-6 bg-black relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-headline text-4xl md:text-6xl font-black tracking-tighter uppercase mb-6">
            VISUAL <span className="text-primary">ARCHITECTURE</span>
          </h2>
          <p className="text-white/40 max-w-2xl mx-auto uppercase tracking-widest font-bold">
            Adobe Photoshop & Creative Direction
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-square rounded-2xl overflow-hidden group border border-white/10">
            <Image 
              src="https://picsum.photos/seed/645/800/800" // Fallback if local not available, but user provided one
              alt="Graphic Design Portfolio 645"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
              data-ai-hint="portrait design"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
            <div className="absolute bottom-6 left-6">
              <Badge className="bg-white text-black font-black px-3 py-1">645 PORTRAIT</Badge>
            </div>
          </div>

          <div className="space-y-8">
            <div className="flex gap-4 p-6 glass rounded-xl">
              <div className="p-3 bg-primary/20 rounded-lg text-primary">
                <PenTool className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-white mb-2">Masterful Manipulation</h4>
                <p className="text-white/50 text-sm">Advanced Adobe Photoshop techniques for high-impact branding and creative assets.</p>
              </div>
            </div>

            <div className="flex gap-4 p-6 glass rounded-xl">
              <div className="p-3 bg-primary/20 rounded-lg text-primary">
                <Layers className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-white mb-2">Layout & Typography</h4>
                <p className="text-white/50 text-sm">Precise visual communication through grid systems and expressive typefaces.</p>
              </div>
            </div>

            <div className="flex gap-4 p-6 glass rounded-xl">
              <div className="p-3 bg-primary/20 rounded-lg text-primary">
                <Layout className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-white mb-2">UI/UX Prototype Art</h4>
                <p className="text-white/50 text-sm">Designing immersive interfaces that feel alive before the first line of code.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
