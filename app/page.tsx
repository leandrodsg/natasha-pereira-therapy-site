import dynamic from 'next/dynamic';
import { Hero } from '@/components/sections/Hero';
import SoundFamiliar from '@/components/sections/SoundFamiliar';
import { AboutTherapist } from '@/components/sections/AboutTherapist';
import Reviews from '@/components/sections/Reviews';

// Lazy load below-the-fold components
const Credentials = dynamic(
  () =>
    import('@/components/sections/Credentials').then((mod) => ({
      default: mod.Credentials,
    })),
  { ssr: true }
);
const Services = dynamic(() => import('@/components/sections/Services'), {
  ssr: true,
});
const HowItWorks = dynamic(() => import('@/components/sections/HowItWorks'), {
  ssr: true,
});
const FAQSection = dynamic(
  () =>
    import('@/components/sections/FAQSection').then((mod) => ({
      default: mod.FAQSection,
    })),
  { ssr: true }
);
const InstagramFeed = dynamic(
  () => import('@/components/sections/InstagramFeed'),
  { ssr: true }
);
const Footer = dynamic(() => import('@/components/sections/Footer'), {
  ssr: true,
});

export default function Home() {
  return (
    <>
      <main id="main-content" tabIndex={-1}>
        <Hero />
        <SoundFamiliar />
        <AboutTherapist />
        <Credentials />
        <Services />
        <HowItWorks />
        <FAQSection />
        <Reviews />
        <InstagramFeed />
      </main>
      <Footer />
    </>
  );
}
