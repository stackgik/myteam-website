'use client';

import Image from 'next/image';
import ContactFeatures from '../_components/ContactFeatures';
import ContactForm from '../_components/ContactForm';
import contactBgPattern1 from '@/public/bg-pattern-about-2-contact-1.svg';
import contactBgPattern2 from '@/public/bg-pattern-contact-2.svg';
import { useToggle } from '../_context/ToggleContext';

const Page = () => {
  const { setIsOpen } = useToggle();
  return (
    <section
      className='py-40 bg-primary-midnight-green px-12 relative overflow-hidden miniDesktop:px-64 mobile:px-12'
      onClick={() => setIsOpen(false)}>
      <div className='w-fluidSection mx-auto grid grid-cols-2 tablet:grid-cols-1 tablet:gap-12 '>
        <ContactFeatures />
        <ContactForm />
      </div>
      <Image
        src={contactBgPattern1}
        alt={'contact bg pattern 1'}
        className='absolute inset-0 -translate-x-1/2'
      />
      <Image
        src={contactBgPattern2}
        alt={'contact bg pattern 2'}
        className='absolute right-0 bottom-0 translate-x-1/2 tablet:translate-y-1/2 mobile:translate-y-1/2'
      />
    </section>
  );
};

export default Page;
