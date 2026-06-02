import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Rocket, Music } from 'lucide-react';

export const StaticServices = () => {
  return (
    <section id="services" className="py-32 px-6 bg-black">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="font-headline text-4xl md:text-5xl font-bold tracking-tighter uppercase mb-4">
            Our <span className="text-primary">Expertise</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Service Card 1 */}
          <Card className="bg-secondary/20 border-white/5 hover:border-primary/50 transition-all duration-500 group overflow-hidden">
            <CardHeader className="p-10 pb-0">
              <div className="w-16 h-16 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-500">
                <Rocket className="w-8 h-8 text-primary group-hover:text-white transition-colors duration-500" />
              </div>
              <CardTitle className="font-headline text-3xl font-bold mb-4">App Development</CardTitle>
            </CardHeader>
            <CardContent className="p-10 pt-4">
              <p className="text-white/60 text-lg leading-relaxed">
                We build high‑quality, scalable applications tailored to your business needs. 
                From mobile solutions to complex web platforms, we handle the entire development lifecycle from concept to deployment.
              </p>
            </CardContent>
          </Card>

          {/* Service Card 2 */}
          <Card className="bg-secondary/20 border-white/5 hover:border-primary/50 transition-all duration-500 group overflow-hidden">
            <CardHeader className="p-10 pb-0">
              <div className="w-16 h-16 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-500">
                <Music className="w-8 h-8 text-primary group-hover:text-white transition-colors duration-500" />
              </div>
              <CardTitle className="font-headline text-3xl font-bold mb-4">Professional DJ Services</CardTitle>
            </CardHeader>
            <CardContent className="p-10 pt-4">
              <p className="text-white/60 text-lg leading-relaxed">
                Professional DJ services for events, corporate functions, and private parties – 
                bringing energy and entertainment to any occasion with curated sonic experiences.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
