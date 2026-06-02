import React from 'react';
import { Code, Zap, Headphones, Terminal } from 'lucide-react';

const traits = [
  {
    icon: <Code className="w-6 h-6 text-primary" />,
    text: "Technical Architect"
  },
  {
    icon: <Zap className="w-6 h-6 text-primary" />,
    text: "Efficiency Driven"
  },
  {
    icon: <Headphones className="w-6 h-6 text-primary" />,
    text: "Sonic Curator"
  },
  {
    icon: <Terminal className="w-6 h-6 text-primary" />,
    text: "Full-Stack Mindset"
  }
];

export const StaticWhyUs = () => {
  return (
    <section id="about" className="py-32 px-6 bg-secondary/10 border-y border-white/5">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="font-headline text-4xl md:text-5xl font-bold tracking-tighter uppercase mb-4">
            MY <span className="text-primary">APPROACH</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {traits.map((trait, idx) => (
            <div key={idx} className="flex flex-col items-center text-center p-8 bg-black/40 border border-white/5 hover:border-primary/30 transition-all rounded-lg group">
              <div className="mb-4 transform group-hover:scale-110 transition-transform duration-300">
                {trait.icon}
              </div>
              <p className="font-headline font-bold text-lg uppercase tracking-wider">{trait.text}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-20 max-w-3xl mx-auto text-center">
          <p className="text-white/60 text-lg leading-relaxed">
            I don't just build software; I design experiences. Whether it's a seamless user interface or a curated setlist, my goal is to create moments that resonate. My background in professional entertainment has given me a unique perspective on user engagement that I now apply to every digital project I undertake.
          </p>
        </div>
      </div>
    </section>
  );
};
