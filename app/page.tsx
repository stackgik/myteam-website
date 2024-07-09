'use client';

import HeroSection from './_components/HeroSection';
import FeaturesSection from './_components/FeaturesSection';
import TestimonialSection from './_components/TestimonialSection';
import CtaSection from './_components/CtaSection';
import { useToggle } from './_context/ToggleContext';

export default function Home() {
  const { setIsOpen } = useToggle();
  return (
    <main onClick={() => setIsOpen(false)}>
      <HeroSection />
      <FeaturesSection />
      <TestimonialSection />
      <CtaSection />
    </main>
  );
}
