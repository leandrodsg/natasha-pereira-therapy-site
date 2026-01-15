import { Hero } from '@/components/sections/Hero';
import ProblemStatement from '@/components/sections/ProblemStatement';
import SoundFamiliar from '@/components/sections/SoundFamiliar';
import { AboutTherapist } from '@/components/sections/AboutTherapist';

export default function Home() {
  return (
    <main>
      <Hero />
      <ProblemStatement />
      <SoundFamiliar />
      <AboutTherapist />
    </main>
  );
}
