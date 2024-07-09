import Image, { StaticImageData } from 'next/image';
import iconQuotes from '@/public/icon-quotes.svg';

interface ITestimonial {
  testimonial: string;
  author: string;
  profession: string;
  avatar: StaticImageData;
}

const Testimonial = ({
  testimonial,
  author,
  profession,
  avatar,
}: ITestimonial) => {
  return (
    <li className='flex flex-col gap-12 relative'>
      <p className='text-[15px] leading-[25px] text-primary-white text-center font-semibold z-10'>
        {testimonial}
      </p>

      <div className='flex flex-col gap-2'>
        <h3 className='text-secondary-rapture-blue font-bold text-[18px] leading-[28px] capitalize'>
          {author}
        </h3>
        <i>
          <p className='text-primary-white text-[13px] capitalize'>
            {profession}
          </p>
        </i>
      </div>

      <div className='overflow-hidden border-2 border-primary-white rounded-full relative mx-auto'>
        <Image
          src={avatar}
          alt='avatar of the testimonial author'
          height={70}
          width={70}
          placeholder='blur'
          quality={80}
          className='object-cover'
        />
      </div>
      <Image
        src={iconQuotes}
        alt='icon of a quote'
        className='absolute top-0 left-1/2 -translate-x-1/2 -translate-y-2/3'
      />
    </li>
  );
};

export default Testimonial;
