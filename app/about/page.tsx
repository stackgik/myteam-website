'use client';

import DirectorSection from '../_components/DirectorSection';
import ClientsSection from '../_components/ClientsSection';
import CtaSection from '../_components/CtaSection';
import AboutHero from '../_components/AboutHero';
import { useToggle } from '../_context/ToggleContext';

const Page = () => {
  const { setIsOpen } = useToggle();
  return (
    <main onClick={() => setIsOpen(false)}>
      <AboutHero />
      <DirectorSection />
      <ClientsSection />
      <CtaSection />
    </main>
  );
};

export default Page;
