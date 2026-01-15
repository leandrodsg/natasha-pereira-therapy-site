import { Hero } from '@/components/sections/Hero';
import ProblemStatement from '@/components/sections/ProblemStatement';
import SoundFamiliar from '@/components/sections/SoundFamiliar';
import { AboutTherapist } from '@/components/sections/AboutTherapist';
import Services from '@/components/sections/Services';
import { CTASection } from '@/components/sections/CTASection';
import Footer from '@/components/sections/Footer';
import { SkipLink } from '@/components/SkipLink';

export default function Home() {
  return (
    <>
      <SkipLink />
      <main id="main-content" tabIndex={-1}>
        <Hero />
        <ProblemStatement />
        <SoundFamiliar />
        <AboutTherapist />
        <Services />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
