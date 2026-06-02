import React from 'react';
import { CheckCircle2, Zap, Shield, Layout } from 'lucide-react';

const reasons = [
  {
    icon: <Layout className="w-6 h-6 text-primary" />,
    text: "End‑to‑end development"
  },
  {
    icon: <Zap className="w-6 h-6 text-primary" />,
    text: "Seamless user experiences"
  },
  {
    icon: <CheckCircle2 className="w-6 h-6 text-primary" />,
    text: "High‑energy performances"
  },
  {
    icon: <Shield className="w-6 h-6 text-primary" />,
    text: "Reliable & professional"
  }
];

export const StaticWhyUs = () => {
  return (
    <section id="why-us" className="py-32 px-6 bg-secondary/10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="font-headline text-4xl md:text-5xl font-bold tracking-tighter uppercase mb-4">
            Why <span className="text-primary">Choose Us</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, idx) => (
            <div key={idx} className="flex flex-col items-center text-center p-8 bg-black/40 border border-white/5 hover:border-primary/30 transition-all rounded-lg">
              <div className="mb-4">
                {reason.icon}
              </div>
              <p className="font-headline font-bold text-lg uppercase tracking-wider">{reason.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
