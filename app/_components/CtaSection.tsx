import Image from 'next/image';
import homeBgPattern from '@/public/bg-pattern-home-6-about-5.svg';
import Button from './Button';

const CtaSection = () => {
  return (
    <article className='py-28 bg-primary-light-coral relative px-12'>
      <div className='w-fluidInnerWrapper mx-auto flex items-center flex-wrap justify-between miniDesktop:gap-64 miniDesktop:justify-center tablet:gap-28 mobile:gap-12'>
        <h2 className='font-bold text-[50px] text-secondary-sacramento-state-green tablet:text-[30px] mobile:text-center'>
          Ready to get started?
        </h2>
        <Button variation={'primary'} theme={'dark'} href={'/contact'}>
          Contact us
        </Button>
      </div>
      <Image
        src={homeBgPattern}
        alt={'the footer background pattern'}
        className='absolute left-0 bottom-0 miniDesktop:translate-y-[28px]'
      />
    </article>
  );
};

export default CtaSection;
