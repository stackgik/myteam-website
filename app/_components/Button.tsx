import Link from 'next/link';
import { ReactNode } from 'react';

interface IButton {
  children: ReactNode;
  variation: 'primary' | 'secondary';
  theme: 'light' | 'dark';
  href?: string;
  onClick?: () => void;
}
const Button = ({ children, variation, theme, href, onClick }: IButton) => {
  const style: Record<string, string> = {
    'primary-light':
      'border-2 border-primary-white text-primary-white hover:text-primary-midnight-green hover:bg-primary-white disabled:cursor-not-allowed disabled:border-gray-400 disabled:text-gray-400',
    'primary-dark':
      'border-2 border-secondary-sacramento-state-green text-secondary-sacramento-state-green hover:text-primary-white hover:bg-secondary-sacramento-state-green disabled:cursor-not-allowed disabled:border-gray-400 disabled:text-gray-400',
    'secondary-light':
      'text-secondary-sacramento-state-green bg-primary-white hover:bg-secondary-rapture-blue disabled:bg-secondary-police-blue',
  };

  const styleKey = `${variation}-${theme}`;
  const btnClass: string = style[styleKey];

  if (href) {
    return (
      <Link
        onClick={onClick}
        href={href}
        className={`py-4 px-10 rounded-[80px] text-[15px] font-semibold transition-all duration-300 ease-in-out ${btnClass}`}>
        {children}
      </Link>
    );
  }

  return (
    <button
      onClick={onClick}
      className={`py-4 px-10 rounded-[80px] text-[15px] font-semibold transition-all duration-300 ease-in-out ${btnClass}`}>
      {children}
    </button>
  );
};

export default Button;
