import nikita from '@/public/avatar-nikita.jpg';
import griffin from '@/public/avatar-griffin.jpg';
import cristian from '@/public/avatar-christian.jpg';
import cruz from '@/public/avatar-cruz.jpg';
import drake from '@/public/avatar-drake.jpg';
import aden from '@/public/avatar-aden.jpg';
import ProfileCard from './ProfileCard';
import pattern1 from '@/public/bg-pattern-about-2-contact-1.svg';
import pattern2 from '@/public/bg-pattern-home-4-about-3.svg';
import Image from 'next/image';

const directors = [
  {
    name: 'Nikita Marks',
    avatar: nikita,
    position: 'Founder & CEO',
    quote: '"The only way to do great work is to love what you do."',
  },
  {
    name: 'Cristian Duncan',
    avatar: cristian,
    position: 'C0-founder & COO',
    quote:
      '"In the end, we will remember not the words of our enemies, but the silence of our friends."',
  },
  {
    name: 'Cruz Hamer',
    avatar: cruz,
    position: 'Co-founder & CTO',
    quote:
      '"Success is not final, failure is not fatal: It is the courage to continue that counts."',
  },
  {
    name: 'Drake Heaton',
    avatar: drake,
    position: 'Business development lead',
    quote: '"Life is what happens when you are busy making other plans."',
  },
  {
    name: 'Griffin Wise',
    avatar: griffin,
    position: 'Lead Marketing',
    quote: '"The best way to predict the future is to invent it."',
  },
  {
    name: 'Aden Allan',
    avatar: aden,
    position: 'Marketing & Public Relations',
    quote: '"It does not matter how slowly you go as long as you do not stop."',
  },
];

const DirectorSection = () => {
  return (
    <section className='py-64 bg-secondary-deep-jungle-green relative z-10'>
      <h2 className='text-[48px] leading-[48px] font-bold text-center mb-24 text-primary-white tablet:text-[30px]'>
        Meet the directors
      </h2>
      <div className='w-fluidSection mx-auto px-12 grid grid-cols-3 gap-x-10 gap-y-20 tablet:grid-cols-2 mobile:grid-cols-1'>
        {directors.map(director => (
          <ProfileCard
            name={director.name}
            avatar={director.avatar}
            quote={director.quote}
            position={director.position}
            key={director.name}
          />
        ))}
      </div>

      <Image
        src={pattern1}
        alt={'pattern 1'}
        className='absolute inset-0 -translate-x-1/2'
      />
      <Image
        src={pattern2}
        alt={'pattern 2'}
        className='absolute right-0 bottom-0'
      />
    </section>
  );
};

export default DirectorSection;
