
import { SplitHero } from '@/components/SplitHero';
import { AITool } from '@/components/AITool';
import { Timeline } from '@/components/Timeline';
import { BookingPortal } from '@/components/BookingPortal';
import { Footer } from '@/components/Footer';
import { Toaster } from '@/components/ui/toaster';

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <SplitHero />
      <AITool />
      <Timeline />
      <BookingPortal />
      <Footer />
      <Toaster />
    </main>
  );
}
