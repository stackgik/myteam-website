import Kady from '@/public/avatar-kady.jpg';
import Aiysha from '@/public/avatar-aiysha.jpg';
import Arthur from '@/public/avatar-arthur.jpg';
import bgHomePattern4 from '@/public/bg-pattern-home-4-about-3.svg';
import bgHomePattern5 from '@/public/bg-pattern-home-5.svg';

import Testimonial from './Testimonial';
import Image from 'next/image';
import { useToggle } from '../_context/ToggleContext';

const testimonials = [
  {
    testimonial:
      '"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias veniam id corporis voluptas voluptatibus unde cum odio. Totam, accusamus dolorum quas tenetur magni, earum"',
    author: 'Kady Baker',
    profession: 'product manager at bookmark',
    avatar: Kady,
  },
  {
    testimonial:
      '"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias veniam id corporis voluptas voluptatibus unde cum odio. Totam, accusamus dolorum quas tenetur magni, earum"',
    author: 'Aiysha Reese',
    profession: 'founder of manage',
    avatar: Aiysha,
  },
  {
    testimonial:
      '"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias veniam id corporis voluptas voluptatibus unde cum odio. Totam, accusamus dolorum quas tenetur magni, earum"',
    author: 'Arthur Clarke',
    profession: 'co-founder of MyPhysio',
    avatar: Arthur,
  },
];

const TestimonialSection = () => {
  return (
    <section className='bg-secondary-deep-jungle-green relative py-64'>
      <div className='w-fluidSection mx-auto px-12 tablet:px-36 mobile:px-12'>
        <h2 className='text-primary-white text-[48px] font-bold leading-[48px] text-center mb-24 tablet:text-[30px]'>
          Delivering real results for top companies. Some of our{' '}
          <span className='text-secondary-rapture-blue'>success stories.</span>
        </h2>

        <ul className='grid grid-cols-3 gap-6 text-center miniDesktop:gap-12 tablet:grid-cols-1 tablet:gap-32'>
          {testimonials.map((testimonial, index) => (
            <Testimonial
              key={index}
              testimonial={testimonial.testimonial}
              author={testimonial.author}
              profession={testimonial.profession}
              avatar={testimonial.avatar}
            />
          ))}
        </ul>
      </div>

      <Image
        src={bgHomePattern4}
        alt='testimonial section pattern 1'
        className='absolute inset-0'
      />

      <Image
        src={bgHomePattern5}
        alt='testimonial section pattern 2'
        className='absolute right-0 bottom-0'
      />
    </section>
  );
};

export default TestimonialSection;
