import { Navbar } from '@/components/Navbar';
import { StaticHero } from '@/components/StaticHero';
import { StaticServices } from '@/components/StaticServices';
import { StaticWhyUs } from '@/components/StaticWhyUs';
import { StaticProjects } from '@/components/StaticProjects';
import { StaticContact } from '@/components/StaticContact';
import { StaticFooter } from '@/components/StaticFooter';
import { Toaster } from '@/components/ui/toaster';

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white scroll-smooth">
      <Navbar />
      <StaticHero />
      <StaticServices />
      <StaticWhyUs />
      <StaticProjects />
      <StaticContact />
      <StaticFooter />
      <Toaster />
    </main>
  );
}
