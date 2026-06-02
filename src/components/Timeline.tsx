
import React from 'react';
import { Search, PenTool, Code, Zap, Rocket } from 'lucide-react';

const steps = [
  {
    icon: <Search className="w-6 h-6" />,
    title: "Discovery & Strategy",
    description: "Deep dive into your market niche and peer-to-peer logic."
  },
  {
    icon: <PenTool className="w-6 h-6" />,
    title: "UX/UI Design",
    description: "Creating intuitive interfaces for complex marketplace workflows."
  },
  {
    icon: <Code className="w-6 h-6" />,
    title: "Core Development",
    description: "Building robust, scalable backends and smooth frontends."
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Testing & Refinement",
    description: "Rigorous QA to ensure seamless transactions and user trust."
  },
  {
    icon: <Rocket className="w-6 h-6" />,
    title: "Launch & Scale",
    description: "Deploying your product and strategizing for user growth."
  }
];

export const Timeline = () => {
  return (
    <section className="py-24 px-6 md:px-12 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-headline text-3xl md:text-4xl font-bold mb-4">
            LIFECYCLE <span className="text-primary">VISUALIZATION</span>
          </h2>
          <p className="text-white/60 font-body">Our proven journey from blueprint to high-performance marketplace.</p>
        </div>

        <div className="relative">
          {/* Horizontal line */}
          <div className="hidden md:block absolute top-12 left-0 w-full h-px bg-primary/20" />
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {steps.map((step, idx) => (
              <div key={idx} className="relative group text-center md:text-left">
                <div className="relative z-10 w-24 h-24 mx-auto md:mx-0 mb-6 rounded-full bg-black border border-primary/30 flex items-center justify-center group-hover:border-primary group-hover:bg-primary/10 transition-all duration-300">
                  <div className="text-primary">
                    {step.icon}
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full bg-primary flex items-center justify-center text-xs font-bold text-white">
                    {idx + 1}
                  </div>
                </div>
                <h3 className="font-headline text-lg font-bold mb-2 group-hover:text-primary transition-colors">{step.title}</h3>
                <p className="text-sm text-white/60 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
