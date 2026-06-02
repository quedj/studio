"use client";

import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Mail, Phone, MapPin } from 'lucide-react';

export const StaticContact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you! Your inquiry has been sent. We will get back to you soon.");
  };

  return (
    <section id="contact" className="py-32 px-6 bg-black">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="font-headline text-4xl md:text-5xl font-bold tracking-tighter uppercase mb-6 leading-tight">
              Ready to <span className="text-primary">Connect?</span>
            </h2>
            <p className="text-white/60 text-lg mb-10 leading-relaxed max-w-md">
              Whether you're looking for a technology partner to build your next marketplace or a professional DJ for your event, we're here to deliver.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-white/40 uppercase tracking-widest font-bold">Email Us</p>
                  <p className="text-lg font-bold">hello@quedjexperience.co.za</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-white/40 uppercase tracking-widest font-bold">Call Us</p>
                  <p className="text-lg font-bold">+27 (0) 123 456 789</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-white/40 uppercase tracking-widest font-bold">Location</p>
                  <p className="text-lg font-bold">Johannesburg, South Africa</p>
                </div>
              </div>
            </div>
          </div>

          <Card className="bg-secondary/20 border-white/5 p-4">
            <CardHeader>
              <CardTitle className="font-headline text-2xl uppercase tracking-wider">Send a Brief</CardTitle>
              <CardDescription className="text-white/40">Tell us about your project or event.</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input placeholder="Full Name" className="bg-black/50 border-white/10 text-white p-6" required />
                  <Input type="email" placeholder="Email Address" className="bg-black/50 border-white/10 text-white p-6" required />
                </div>
                <Input placeholder="Subject" className="bg-black/50 border-white/10 text-white p-6" required />
                <Textarea placeholder="How can we help you?" className="bg-black/50 border-white/10 text-white min-h-[150px] p-6" required />
                <Button type="submit" className="w-full bg-primary hover:bg-white hover:text-black py-8 text-lg font-bold uppercase tracking-widest transition-all duration-300">
                  Submit Request
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
