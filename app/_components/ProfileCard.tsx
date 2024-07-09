'use client';

import Image, { StaticImageData } from 'next/image';
import { useState } from 'react';
import openIcon from '@/public/icon-cross.svg';
import closeIcon from '@/public/icon-close.svg';
import iconTwitter from '@/public/icon-twitter.svg';
import iconLinkedIn from '@/public/icon-linkedin.svg';
import Link from 'next/link';

interface IProfileCard {
  name: string;
  avatar: StaticImageData;
  position: string;
  quote: string;
}

const ProfileCard = ({ name, avatar, position, quote }: IProfileCard) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='relative bg-secondary-sacramento-state-green h-[250px] px-16 flex justify-center items-center'>
      {isOpen ? (
        <div className='flex flex-col gap-8'>
          <h2 className='text-secondary-rapture-blue text-2xl text-center font-bold'>
            {name}
          </h2>
          <p className='text-primary-white text-[15px] text-center leading-[25px] font-semibold'>
            {quote}
          </p>
          <ul className='flex items-center  justify-center gap-6'>
            <li>
              <Link href='#'>
                <Image src={iconTwitter} alt='facebook icon' />
              </Link>
            </li>

            <li>
              <Link href='#'>
                <Image src={iconLinkedIn} alt='twitter icon' />
              </Link>
            </li>
          </ul>
        </div>
      ) : (
        <div className='flex flex-col gap-6'>
          <div className='overflow-hidden border-2 border-primary-white rounded-full relative mx-auto'>
            <Image
              src={avatar}
              alt='avatar of the testimonial author'
              height={110}
              width={110}
              placeholder='blur'
              className='object-cover '
            />
          </div>

          <div className='flex flex-col text-center'>
            <h3 className='text-secondary-rapture-blue font-bold text-[18px] leading-[28px] capitalize'>
              {name}
            </h3>
            <i>
              <p className='text-primary-white text-[13px] capitalize'>
                {position}
              </p>
            </i>
          </div>
        </div>
      )}

      <div
        onClick={() => setIsOpen(prev => !prev)}
        className='h-[50px] absolute cursor-pointer transition-all duration-300 ease-in-out left-1/2 bottom-0 -translate-x-1/2 translate-y-1/2 flex items-center justify-center aspect-square rounded-full bg-primary-light-coral hover:bg-secondary-rapture-blue'>
        <Image src={isOpen ? closeIcon : openIcon} alt='toggle icon' />
      </div>
    </div>
  );
};

export default ProfileCard;
