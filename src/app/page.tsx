import { Navbar } from '@/components/Navbar';
import { StaticHero } from '@/components/StaticHero';
import { StaticServices } from '@/components/StaticServices';
import { StaticWhyUs } from '@/components/StaticWhyUs';
import { StaticProjects } from '@/components/StaticProjects';
import { StaticContact } from '@/components/StaticContact';
import { StaticFooter } from '@/components/StaticFooter';
import { CursorGlow } from '@/components/CursorGlow';
import { Toaster } from '@/components/ui/toaster';

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white scroll-smooth relative selection:bg-primary selection:text-white">
      <CursorGlow />
      <div className="relative z-10">
        <Navbar />
        <StaticHero />
        <StaticServices />
        <StaticWhyUs />
        <StaticProjects />
        <StaticContact />
        <StaticFooter />
      </div>
      <Toaster />
    </main>
  );
}
