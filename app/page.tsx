import { Hero } from '@/components/sections/Hero';
import ProblemStatement from '@/components/sections/ProblemStatement';
import SoundFamiliar from '@/components/sections/SoundFamiliar';
import { AboutTherapist } from '@/components/sections/AboutTherapist';
import Services from '@/components/sections/Services';
import { CTASection } from '@/components/sections/CTASection';
import Footer from '@/components/sections/Footer';

export default function Home() {
  return (
    <main>
      <Hero />
      <ProblemStatement />
      <SoundFamiliar />
      <AboutTherapist />
      <Services />
      <CTASection />
      <Footer />
    </main>
  );
}
