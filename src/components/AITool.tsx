
"use client";

import React, { useState } from 'react';
import { generateAppRoadmap, GenerateAppRoadmapOutput } from '@/ai/flows/generate-app-roadmap';
import { generateDjSetlistProfile, GenerateDjSetlistProfileOutput } from '@/ai/flows/generate-dj-setlist-profile';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Loader2, Rocket, Music, Sparkles } from 'lucide-react';

export const AITool = () => {
  const [loading, setLoading] = useState(false);
  const [techInput, setTechInput] = useState('');
  const [djVibeInput, setDjVibeInput] = useState('');
  const [djAudienceInput, setDjAudienceInput] = useState('');
  const [techResult, setTechResult] = useState<GenerateAppRoadmapOutput | null>(null);
  const [djResult, setDjResult] = useState<GenerateDjSetlistProfileOutput | null>(null);

  const handleTechGenerate = async () => {
    if (!techInput) return;
    setLoading(true);
    try {
      const result = await generateAppRoadmap({ businessVision: techInput });
      setTechResult(result);
      setDjResult(null);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleDjGenerate = async () => {
    if (!djVibeInput || !djAudienceInput) return;
    setLoading(true);
    try {
      const result = await generateDjSetlistProfile({ 
        desiredVibe: djVibeInput, 
        audienceDescription: djAudienceInput 
      });
      setDjResult(result);
      setTechResult(null);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="ai-tool" className="py-24 px-6 md:px-12 bg-black">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-headline text-4xl md:text-5xl font-bold mb-4">
            AI <span className="text-primary">ARCHITECT</span> TOOL
          </h2>
          <p className="text-white/60 font-body max-w-2xl mx-auto">
            Leverage our intelligence to visualize your next big move. Whether it's a digital ecosystem or a sonic journey.
          </p>
        </div>

        <Tabs defaultValue="tech" className="w-full">
          <TabsList className="grid w-full grid-cols-2 bg-secondary border border-primary/20 mb-8 p-1">
            <TabsTrigger value="tech" className="data-[state=active]:bg-primary data-[state=active]:text-white flex items-center gap-2">
              <Rocket className="w-4 h-4" /> Marketplace Roadmap
            </TabsTrigger>
            <TabsTrigger value="dj" className="data-[state=active]:bg-primary data-[state=active]:text-white flex items-center gap-2">
              <Music className="w-4 h-4" /> DJ Setlist Profile
            </TabsTrigger>
          </TabsList>

          <TabsContent value="tech">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="bg-secondary/50 border-primary/20 h-fit">
                <CardHeader>
                  <CardTitle className="font-headline text-2xl">Describe Your Vision</CardTitle>
                  <CardDescription>What kind of marketplace or P2P app are you building?</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Textarea 
                    placeholder="e.g. A global freelance platform for eco-conscious creative professionals..." 
                    className="min-h-[150px] bg-black border-primary/20 focus:border-primary text-white"
                    value={techInput}
                    onChange={(e) => setTechInput(e.target.value)}
                  />
                  <Button 
                    className="w-full bg-primary hover:bg-primary/90 text-white animate-pulse-120" 
                    disabled={loading || !techInput}
                    onClick={handleTechGenerate}
                  >
                    {loading ? <Loader2 className="animate-spin mr-2" /> : <Sparkles className="mr-2 w-4 h-4" />}
                    Generate Roadmap
                  </Button>
                </CardContent>
              </Card>

              {techResult ? (
                <div className="space-y-6">
                  <Card className="bg-primary/5 border-primary shadow-[0_0_15px_rgba(230,0,0,0.1)]">
                    <CardHeader>
                      <CardTitle className="text-primary font-headline">{techResult.roadmapTitle}</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="space-y-4">
                        {techResult.developmentPhases.map((phase, idx) => (
                          <div key={idx} className="relative pl-6 border-l-2 border-primary/30">
                            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary" />
                            <h4 className="font-bold text-white">{phase.phaseName}</h4>
                            <p className="text-sm text-white/60 mb-1">{phase.description}</p>
                            <div className="flex flex-wrap gap-2 mt-2">
                              {phase.keyTechnologies.map(tech => (
                                <span key={tech} className="text-[10px] px-2 py-0.5 rounded-full bg-primary/20 text-primary border border-primary/30">
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                      <div className="pt-4 border-t border-white/10">
                        <p className="text-sm italic text-white/70">{techResult.overallSummary}</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ) : (
                <div className="flex items-center justify-center border-2 border-dashed border-white/10 rounded-lg p-12 text-center">
                  <div>
                    <Rocket className="w-12 h-12 text-white/20 mx-auto mb-4" />
                    <p className="text-white/40">Your generated roadmap will appear here.</p>
                  </div>
                </div>
              )}
            </div>
          </TabsContent>

          <TabsContent value="dj">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="bg-secondary/50 border-primary/20 h-fit">
                <CardHeader>
                  <CardTitle className="font-headline text-2xl">Set the Stage</CardTitle>
                  <CardDescription>What's the vibe and who's listening?</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-white/70">Desired Vibe</label>
                    <Textarea 
                      placeholder="e.g. Sophisticated sunset rooftop, transitioning into high-energy deep house..." 
                      className="bg-black border-primary/20 focus:border-primary text-white"
                      value={djVibeInput}
                      onChange={(e) => setDjVibeInput(e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-white/70">Audience Description</label>
                    <Textarea 
                      placeholder="e.g. Young tech professionals, mixed international crowd, high energy..." 
                      className="bg-black border-primary/20 focus:border-primary text-white"
                      value={djAudienceInput}
                      onChange={(e) => setDjAudienceInput(e.target.value)}
                    />
                  </div>
                  <Button 
                    className="w-full bg-primary hover:bg-primary/90 text-white animate-pulse-120" 
                    disabled={loading || !djVibeInput || !djAudienceInput}
                    onClick={handleDjGenerate}
                  >
                    {loading ? <Loader2 className="animate-spin mr-2" /> : <Sparkles className="mr-2 w-4 h-4" />}
                    Curate Profile
                  </Button>
                </CardContent>
              </Card>

              {djResult ? (
                <div className="space-y-6">
                  <Card className="bg-primary/5 border-primary shadow-[0_0_15px_rgba(230,0,0,0.1)] h-full">
                    <CardHeader>
                      <CardTitle className="text-primary font-headline flex items-center gap-2">
                        <Music className="w-5 h-5" /> Energy Profile
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="prose prose-invert max-w-none">
                        <p className="text-white/80 leading-relaxed whitespace-pre-wrap">
                          {djResult.setlistEnergyProfile}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ) : (
                <div className="flex items-center justify-center border-2 border-dashed border-white/10 rounded-lg p-12 text-center">
                  <div>
                    <Music className="w-12 h-12 text-white/20 mx-auto mb-4" />
                    <p className="text-white/40">Your customized setlist profile will appear here.</p>
                  </div>
                </div>
              )}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};
