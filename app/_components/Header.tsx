'use client';

import Image from 'next/image';
import Link from 'next/link';
import logo from '@/public/logo.svg';
import Button from './Button';
import hamburger from '@/public/icon-hamburger.svg';
import { useToggle } from '../_context/ToggleContext';

const Header = () => {
  const { setIsOpen } = useToggle();
  return (
    <header className='bg-primary-midnight-green py-28 px-12'>
      <div className='w-fluidSection mx-auto flex gap-[10rem] items-center tablet:gap-[4rem] mobile:justify-between'>
        <Link href='/'>
          <Image
            src={logo}
            alt='logo of myteam business organization'
            width={100}
          />
        </Link>

        <nav className='flex-1 mobile:hidden'>
          <ul className='flex items-center gap-16'>
            <li>
              <Link
                href='/'
                className='text-[1.5rem] font-semibold text-primary-white transition-all duration-300 ease-in-out hover:text-primary-light-coral'>
                home
              </Link>
            </li>
            <li>
              <Link
                href='/about'
                className='text-[1.5rem] font-semibold text-primary-white transition-all duration-300 ease-in-out hover:text-primary-light-coral'>
                about
              </Link>
            </li>
            <li className='ml-auto'>
              <Button href={'/contact'} theme={'light'} variation={'primary'}>
                Contact us
              </Button>
            </li>
          </ul>
        </nav>

        <Image
          src={hamburger}
          alt='menu bar'
          className='hidden mobile:block'
          onClick={() => setIsOpen(true)}
        />
      </div>
    </header>
  );
};

export default Header;
