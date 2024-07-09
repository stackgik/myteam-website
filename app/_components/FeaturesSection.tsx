import Image from 'next/image';
import bgPatternHome3 from '@/public/bg-pattern-home-3.svg';

import iconPerson from '@/public/icon-person.svg';
import iconCog from '@/public/icon-cog.svg';
import iconChart from '@/public/icon-chart.svg';


const features = [
  {
    tag: 'Experienced Individuals',
    details:
      'Our network is made up of highly experineced professionals who are passionate about what they do',
    icon: iconPerson,
  },
  {
    tag: 'Easy to Implement',
    details:
      'Our processes have been refined over years of implementation, meaning our teams always delivers',
    icon: iconCog,
  },
  {
    tag: 'Enhanced Productivity',
    details:
      'Our customised platform with in-built analytics helps you manage your distributed teams ',
    icon: iconChart,
  },
];

const FeaturesSection = () => {
  return (
    <section className='bg-secondary-sacramento-state-green relative py-64 overflow-hidden'>
      <article className='w-fluidSection px-12 mx-auto grid grid-cols-2 gap-64 miniDesktop:gap-32 tablet:grid-cols-1 tablet:px-36 mobile:px-12'>
        <div className='relative'>
          <div className='h-[4px] w-[50px] bg-primary-light-coral absolute -top-24 left-0'></div>
          <h2 className='text-[48px] text-primary-white font-bold leading-[48px] tablet:text-[30px]'>
            Build & manage distributed teams like no one else.
          </h2>
        </div>

        <ul className='flex flex-col gap-8'>
          {features.map((feature, index) => (
            <li
              key={index}
              className='flex gap-6 text-primary-white mobile:flex-col mobile:text-center'>
              <Image
                src={feature.icon}
                alt='icon of a person'
                className='self-start mobile:self-center'
              />
              <div className='flex flex-col gap-8'>
                <h3 className='text-[18px] text-primary-light-coral font-semibold mobile:text-[15px]'>
                  {feature.tag}
                </h3>
                <p className='text-[15px] leading-[25px] font-semibold mobile:text-[13px]'>
                  {feature.details}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </article>
      <Image
        src={bgPatternHome3}
        alt={'The third background pattern'}
        className='absolute bottom-0 right-0 translate-x-1/2 miniDesktop:translate-x-2/3 miniDesktop:top-0'
      />
    </section>
  );
};

export default FeaturesSection;
