import Image from 'next/image';

import theVerge from '@/public/logo-the-verge.png';
import theJakartaPost from '@/public/logo-jakarta-post.png';
import theGuardian from '@/public/logo-the-guardian.png';
import techradar from '@/public/logo-tech-radar.png';
import gadgetsNow from '@/public/logo-gadgets-now.png';
import bgPattern from '@/public/bg-pattern-about-4.svg';

const ClientsSection = () => {
  return (
    <section className='bg-secondary-sacramento-state-green relative py-64'>
      <div className='w-fluidSection px-12 mx-auto'>
        <h2 className='text-[48px] leading-[48px] font-bold text-center mb-24 text-primary-white tablet:text-[30px]'>
          Some of our clients
        </h2>
        <div className='grid grid-cols-5 items-center gap-48 justify-center miniDesktop:gap-32 tablet:gap-20 mobile:grid-cols-1 '>
          <Image
            src={theVerge}
            alt='the verge logo'
            className='mobile:mx-auto mobile:h-[30px] mobile:w-auto'
          />
          <Image
            src={theJakartaPost}
            alt='jakarta post logo'
            className='mobile:mx-auto mobile:h-[30px] mobile:w-auto'
          />
          <Image
            src={theGuardian}
            alt='the guardian logo'
            className='mobile:mx-auto mobile:h-[30px] mobile:w-auto'
          />
          <Image
            src={techradar}
            alt='tech radar logo'
            className='mobile:mx-auto mobile:h-[30px] mobile:w-auto'
          />
          <Image
            src={gadgetsNow}
            alt='gadgets now logo'
            className='mobile:mx-auto mobile:h-[46px] mobile:w-auto'
          />
        </div>
      </div>

      <Image
        src={bgPattern}
        alt='bg pattern'
        className='absolute inset-0 tablet:-translate-y-1/2'
      />
    </section>
  );
};

export default ClientsSection;
