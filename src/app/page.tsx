"use client";

import React from 'react';
import { Navbar } from '@/components/Navbar';
import { StaticHero } from '@/components/StaticHero';
import { StaticWhyUs } from '@/components/StaticWhyUs';
import { StaticServices } from '@/components/StaticServices';
import { StaticProjects } from '@/components/StaticProjects';
import { StaticContact } from '@/components/StaticContact';
import { StaticFooter } from '@/components/StaticFooter';
import { CursorGlow } from '@/components/CursorGlow';
import { Toaster } from '@/components/ui/toaster';

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-primary selection:text-white relative">
      <CursorGlow />
      
      <div className="relative z-10">
        <Navbar />
        <StaticHero />
        <StaticWhyUs />
        <StaticServices />
        <StaticProjects />
        <StaticContact />
        <StaticFooter />
      </div>
      
      <Toaster />
    </main>
  );
}
