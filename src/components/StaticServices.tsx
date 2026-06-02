
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Rocket, Layout, Database, ShieldCheck } from 'lucide-react';

export const StaticServices = () => {
  return (
    <section id="services" className="py-32 px-6 bg-black">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="font-headline text-4xl md:text-5xl font-bold tracking-tighter uppercase mb-4">
            Digital <span className="text-primary">Expertise</span>
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
                Building high‑quality, scalable applications tailored to your business needs. 
                Specializing in Marketplace logic, P2P ecosystems, and high-performance React architectures.
              </p>
            </CardContent>
          </Card>

          {/* Service Card 2 */}
          <Card className="bg-secondary/20 border-white/5 hover:border-primary/50 transition-all duration-500 group overflow-hidden">
            <CardHeader className="p-10 pb-0">
              <div className="w-16 h-16 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-500">
                <Layout className="w-8 h-8 text-primary group-hover:text-white transition-colors duration-500" />
              </div>
              <CardTitle className="font-headline text-3xl font-bold mb-4">Visual Design</CardTitle>
            </CardHeader>
            <CardContent className="p-10 pt-4">
              <p className="text-white/60 text-lg leading-relaxed">
                Crafting minimalist and modern visual identities. From UI/UX systems to corporate branding, 
                I ensure your digital presence is both functional and aesthetically dominant.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
