import type { Metadata } from 'next';
import { Livvic } from 'next/font/google';
import '@/app/_styles/globals.css';
import { ReactNode } from 'react';
import Header from './_components/Header';
import Footer from './_components/Footer';
import MobileMenu from './_components/MobileMenu';
import { ToggleProvider } from './_context/ToggleContext';

const livvic = Livvic({
  subsets: ['vietnamese'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '900'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    template: '%s | myteam-multipage-website',
    default: 'Welcome | myteam-multipage-website',
  },
  description:
    'This is a multipage website that allows users to find the best talents thereis',
};

interface IRootLayout {
  children: ReactNode;
}

export default function RootLayout({ children }: IRootLayout) {
  return (
    <html lang='en' className='text-[62.5%]'>
      <body
        className={`${livvic.className} antialiased flex flex-col overflow-x-hidden min-h-screen`}>
        <ToggleProvider>
          <Header />
          <div className='flex-1'>
            <main>{children}</main>
          </div>
          <Footer />
          <MobileMenu />
        </ToggleProvider>
      </body>
    </html>
  );
}
