'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

import iconClose from '@/public/icon-close.svg';
import Button from './Button';
import bgPattern from '@/public/bg-pattern-about-1-mobile-nav-1.svg';
import { useToggle } from '../_context/ToggleContext';

const MobileMenu = () => {
  const { setIsOpen, isOpen } = useToggle();

  if (isOpen)
    return (
      <motion.div
        animate={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: '100vw' }}
        className='h-full w-[250px] px-12 py-28 flex flex-col gap-16 text-primary-white bg-secondary-police-blue fixed right-0 top-0 z-30'>
        <Image
          src={iconClose}
          alt='icon to close menu'
          className='self-end'
          onClick={() => setIsOpen(false)}
        />
        <ul className='flex flex-col gap-16 pl-16'>
          <li>
            <Link
              href='/'
              onClick={() => setIsOpen(false)}
              className='text-[1.5rem] font-semibold text-primary-white transition-all duration-300 ease-in-out hover:text-primary-light-coral'>
              home
            </Link>
          </li>
          <li>
            <Link
              href='/about'
              onClick={() => setIsOpen(false)}
              className='text-[1.5rem] font-semibold text-primary-white transition-all duration-300 ease-in-out hover:text-primary-light-coral'>
              about
            </Link>
          </li>
          <li>
            <Button
              href={'/contact'}
              theme={'light'}
              variation={'primary'}
              onClick={() => setIsOpen(false)}>
              Contact us
            </Button>
          </li>
        </ul>
        <div className='bottom-0 right-0 translate-x-1/2 absolute'>
          <Image src={bgPattern} alt='background pattern' />
        </div>
      </motion.div>
    );
};

export default MobileMenu;
