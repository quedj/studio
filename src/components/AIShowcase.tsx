
"use client";

import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { BrainCircuit, Sparkles, Loader2, Award } from 'lucide-react';

const TAGLINES = [
  "Building the future of peer-to-peer logic.",
  "Immersive digital experiences crafted by AI.",
  "Rethink the rhythm of your marketplace.",
  "Google GenAI Certified Developer.",
  "Turning data into delightful user flows."
];

export const AIShowcase = () => {
  const [generating, setGenerating] = useState(false);
  const [tagline, setTagline] = useState("Click to generate a vision...");

  const generateTagline = () => {
    setGenerating(true);
    // Simulate AI promise
    setTimeout(() => {
      const random = TAGLINES[Math.floor(Math.random() * TAGLINES.length)];
      setTagline(random);
      setGenerating(false);
    }, 1200);
  };

  return (
    <section id="ai-skills" className="py-32 px-6 relative z-10 overflow-hidden">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-8">
          <Badge className="bg-primary/20 text-primary border-primary/50 text-sm py-1 px-4">
            <Award className="w-4 h-4 mr-2" /> Google GenAI Certified
          </Badge>
          <h2 className="font-headline text-5xl font-black tracking-tighter uppercase leading-tight">
            INTELLIGENT <br /><span className="text-primary text-glow">ENGINEERING</span>
          </h2>
          <p className="text-white/60 text-lg leading-relaxed max-w-lg">
            Certified by Google in Generative AI, I bridge the gap between static code and dynamic, context-aware applications. I integrate LLMs and multimodal AI to build smarter solutions.
          </p>
          <div className="flex flex-wrap gap-4">
            {['Gemini 2.5', 'Genkit', 'TensorFlow', 'LLM Integration', 'Prompt Eng'].map(skill => (
              <Badge key={skill} variant="outline" className="border-white/10 text-white/50">{skill}</Badge>
            ))}
          </div>
        </div>

        <Card className="glass border-primary/20 relative group">
          <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BrainCircuit className="text-primary" /> Interactive AI Demo
            </CardTitle>
            <CardDescription>Experience a simulated Generative Text agent.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="bg-black/50 rounded-lg p-8 min-h-[120px] flex items-center justify-center text-center border border-white/5">
              <p className="font-headline font-bold text-xl italic text-primary/80">
                {tagline}
              </p>
            </div>
            <Button 
              className="w-full bg-primary hover:bg-white hover:text-black transition-all font-bold uppercase tracking-widest"
              onClick={generateTagline}
              disabled={generating}
            >
              {generating ? <Loader2 className="animate-spin mr-2" /> : <Sparkles className="mr-2 w-4 h-4" />}
              Generate Vision
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
