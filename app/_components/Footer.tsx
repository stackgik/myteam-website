'use client';

import Image from 'next/image';
import Link from 'next/link';
import iconFacebook from '@/public/icon-facebook.svg';
import iconPinterest from '@/public/icon-pinterest.svg';
import iconTwitter from '@/public/icon-twitter.svg';

import logo from '@/public/logo.svg';
import { useToggle } from '../_context/ToggleContext';

const Footer = () => {
  const { setIsOpen } = useToggle();
  return (
    <footer
      className='py-28 bg-secondary-dark-green px-12 z-10'
      onClick={() => setIsOpen(false)}>
      <div className='w-fluidSection mx-auto grid grid-cols-[auto_1fr_auto] gap-[10rem] items-center tablet:grid-cols-2 tablet:gap-y-12 mobile:grid-cols-1'>
        <div className='flex flex-col gap-10'>
          <Link href='/' className='mobile:mx-auto'>
            <Image src={logo} alt='logo of myteam business organization' />
          </Link>

          <nav>
            <ul className='flex items-center gap-16 mobile:justify-center'>
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
            </ul>
          </nav>
        </div>

        <ul className='flex flex-col gap-4 text-[15px] font-semibold text-gray-400 mobile:text-center'>
          <li>987 Hillcrest Lane</li>
          <li>Irvine, CA</li>
          <li>California 92714</li>
          <li>Call Us: 949-833-7432</li>
        </ul>

        <div className='flex flex-col justify-between gap-8 text-[15px] font-semibold text-gray-400'>
          <ul className='flex items-center gap-6 self-end tablet:self-start mobile:self-center'>
            <li>
              <Link href='#'>
                <Image src={iconFacebook} alt='facebook icon' />
              </Link>
            </li>
            <li>
              <Link href='#'>
                <Image src={iconPinterest} alt='pinterest icon' />
              </Link>
            </li>
            <li>
              <Link href='#'>
                <Image src={iconTwitter} alt='twitter icon' />
              </Link>
            </li>
          </ul>
          <p className='mobile:text-center'>{`Copyright ${new Date().getFullYear()}. All Rights Reserved `}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
