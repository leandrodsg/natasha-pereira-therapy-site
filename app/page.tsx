import { Hero } from '@/components/sections/Hero';
import SoundFamiliar from '@/components/sections/SoundFamiliar';
import { AboutTherapist } from '@/components/sections/AboutTherapist';
import { Credentials } from '@/components/sections/Credentials';
import Services from '@/components/sections/Services';
import HowItWorks from '@/components/sections/HowItWorks';
import { FAQSection } from '@/components/sections/FAQSection';
import Footer from '@/components/sections/Footer';
import { SkipLink } from '@/components/SkipLink';

export default function Home() {
  return (
    <>
      <SkipLink />
      <main id="main-content" tabIndex={-1}>
        <Hero />
        <SoundFamiliar />
        <AboutTherapist />
        <Credentials />
        <Services />
        <HowItWorks />
        <FAQSection />
      </main>
      <Footer />
    </>
  );
}
