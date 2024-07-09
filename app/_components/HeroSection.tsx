'use client';
import Image from 'next/image';
import bgPatternHome1 from '@/public/bg-pattern-home-1.svg';
import bgPatternHome2 from '@/public/bg-pattern-home-2.svg';

const HeroSection = () => {
  return (
    <section className='bg-primary-midnight-green relative px-12 pt-16'>
      <div className='w-fluidSection h-[550px] relative mx-auto'>
        <div className='grid grid-cols-[600px_360px] justify-between p-2 tablet:grid-cols-1 tablet: max-w-[400px] tablet:mx-auto tablet:gap-8 tablet:text-center mobile:gap-8'>
          <h1 className='text-[100px] text-primary-white font-bold leading-[100px] tablet tablet:text-[64px] tablet:leading-[64px] mobile:text-[48px] mobile:leading-[48px]'>
            Find the best{' '}
            <span className='text-primary-light-coral'>talent</span>
          </h1>
          <div className='flex flex-col justify-between'>
            <div className='h-[4px] w-[50px] bg-secondary-rapture-blue tablet:hidden'></div>
            <p className='text-[1.5rem] font-semibold text-primary-white'>
              Finding the right people and building high performing teams can be
              hard. Most companies aren&apos;t tapping into the abundance of
              global talent. We&apos;re about to change that.
            </p>
          </div>
        </div>
        <Image
          src={bgPatternHome2}
          alt={'The second background pattern'}
          className='absolute bottom-0 right-0'
        />
      </div>
      <Image
        src={bgPatternHome1}
        alt={'The first background pattern'}
        className='absolute top-16 left-0 -translate-x-1/2 miniDesktop:hidden'
      />
    </section>
  );
};

export default HeroSection;
