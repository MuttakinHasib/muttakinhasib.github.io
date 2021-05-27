import React from 'react';
import useScrollPosition from '../hooks/useScrollPosition';
import { navLinks } from '../static';

const Header = () => {
  const scrollPosition = useScrollPosition();

  return (
    <header
      className={`bg-darkNavy flex items-center w-full px-6 md:px-10 ${
        scrollPosition >= 120
          ? 'header-active h-[70px] bg-opacity-95 border-b border-gray-900'
          : 'h-[100px]'
      }`}
    >
      <nav className='flex items-center justify-between w-full'>
        <div className='w-20 bg-red-200'>
          <a href='/'></a>
        </div>
        <div className='flex items-center'>
          <ol className='flex items-center justify-between list-outside'>
            {navLinks.map((link, index) => (
              <li
                key={index}
                className='mx-1 relative order font-SFMono text-[13px] leading-[1] text-lightestSlate hover:text-green transition-colors duration-300'
              >
                <a className='p-[10px] order-item' href={link.url}>
                  {link.name}
                </a>
              </li>
            ))}
          </ol>
          <a
            href='/resume.pdf'
            target='_blank'
            rel='noopener noreferrer'
            className='text-green leading-[1] text-[13px] ml-[15px] font-SFMono font-medium bg-transparent border-2 border-green rounded-[4px] hover:bg-greenTint py-[0.6rem] px-4 transition-colors duration-300 ease-transition'
          >
            Resume
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
