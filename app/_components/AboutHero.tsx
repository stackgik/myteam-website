'use client';

import Image from 'next/image';
import bgPattern from '@/public/bg-pattern-about-1-mobile-nav-1.svg';
import { useToggle } from '../_context/ToggleContext';

const AboutHero = () => {
  return (
    <section className='bg-primary-midnight-green relative pt-16 overflow-hidden'>
      <div className='w-fluidSection h-[350px] px-12 mx-auto'>
        <div className='grid grid-cols-[200px_1fr] gap-64 tablet:grid-cols-1 tablet:max-w-[400px] tablet:mx-auto tablet:gap-8 tablet:text-center mobile:gap-8'>
          <h1 className='text-[64px] text-primary-white font-bold leading-[64px] tablet:gap-24 tablet:text-center mobile:gap-8'>
            About
          </h1>
          <div className='flex flex-col gap-16 justify-between'>
            <div className='h-[4px] w-[50px] bg-primary-light-coral tablet:hidden'></div>
            <p className='text-[1.8rem] font-semibold text-primary-white tablet:text-center tablet:text-[1.5rem]'>
              We help companies build dynamic teams made up of top global
              talent. Using our network of passionate professionals we drive
              innovations and incredible outcomes. talented, diverse teams shape
              the best products and experiences. We&apos;ll bring those teams to
              you.
            </p>
          </div>
        </div>
      </div>
      <Image
        src={bgPattern}
        alt={'The second background pattern'}
        className='absolute bottom-0 right-0 translate-x-1/2 mobile:translate-y-1/2'
      />
    </section>
  );
};

export default AboutHero;
