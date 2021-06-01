import React from 'react';
import Link from 'next/link';
import useScrollPosition from '../hooks/useScrollPosition';
import { navLinks } from '../static';

const Header = () => {
  const scrollPosition = useScrollPosition();

  return (
    <header
      className={`z-50 bg-darkNavy absolute flex items-center w-full px-6 md:px-10 ${
        scrollPosition >= 120
          ? 'header-active h-[70px] bg-opacity-95'
          : 'h-[100px]'
      }`}
    >
      <nav className='flex items-center justify-between w-full'>
        <div className='w-[42px] h-[42px]'>
          <Link href='/'>
            <a className='text-green w-full h-full hover:bg-greenTint transition-colors duration-300 ease-transition'>
              {/* Hasib */}
              <svg
                id='logo'
                xmlns='http://www.w3.org/2000/svg'
                role='img'
                viewBox='0 0 84 96'
                fill='none'
              >
                <title>Logo</title>
                <polygon
                  id='Shape'
                  stroke='currentColor'
                  strokeWidth='5'
                  points='42,3 3,25 3,70 42,93 81,71 81,26 '
                />
                <g>
                  <path
                    fill='currentColor'
                    d='M29.3,63.9V32.1h6.4v12.5h12.6V32.1h6.4v31.8h-6.4V50H35.7v13.9H29.3z'
                  />
                </g>
              </svg>
            </a>
          </Link>
        </div>
        <div className='hidden md:flex items-center'>
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
