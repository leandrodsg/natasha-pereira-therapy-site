import { Hero } from '@/components/sections/Hero';
import ProblemStatement from '@/components/sections/ProblemStatement';
import SoundFamiliar from '@/components/sections/SoundFamiliar';
import Services from '@/components/sections/Services';

export default function Home() {
  return (
    <main>
      <Hero />
      <ProblemStatement />
      <SoundFamiliar />
      <Services />
    </main>
  );
}
