import React, { createRef, useEffect, useRef, useState } from 'react';
import { useMediaQuery } from '@react-hook/media-query';
import Link from 'next/link';
import { TweenMax, TimelineMax, gsap, Power3 } from 'gsap';
import { Transition } from '@headlessui/react';
import useScrollPosition from '../hooks/useScrollPosition';
import { navLinks } from '../static';

const Header = () => {
  const scrollPosition = useScrollPosition();
  const isMediumDevice = useMediaQuery('only screen and (min-width: 768px)');

  const [isOpen, setIsOpen] = useState(isMediumDevice);

  return (
    <header
      className={`z-50 h-auto backdrop-filter backdrop-blur bg-darkNavy absolute flex items-center w-full px-6 md:py-0 md:px-10 ${
        scrollPosition >= 120
          ? 'header-active py-4 md:h-[70px] bg-opacity-95'
          : 'md:h-[100px] py-5'
      }`}
    >
      <nav className='flex flex-col md:flex-row md:items-center justify-center md:justify-between w-full relative'>
        <div className='w-[32px] md:w-[42px] w-[32px] md:h-[42px]'>
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
        <Transition
          appear={true}
          show={isOpen}
          enter='transition-opacity transition-[height] duration-500 ease-transition'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='transition-opacity duration-500 ease-transition'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
          className='flex flex-col md:flex-row md:items-center mt-5 md:mt-0'
        >
          <ol className='flex flex-col md:flex-row md:items-center md:justify-between list-outside'>
            {navLinks.map((link, index) => (
              <Transition.Child
                key={index}
                as='li'
                enter='transition-opacity delay-600 transition-transform duration-500 ease-transition'
                enterFrom='opacity-0'
                enterTo='opacity-100'
                leave='transition-opacity delay-600 transition-transform duration-500 ease-transition'
                leaveFrom='opacity-100'
                leaveTo='opacity-0'
                className='md:mx-1 py-3 md:py-0 relative order font-SFMono text-[15px] leading-[1] text-lightestSlate hover:text-green transition-colors duration-300'
              >
                <a className='p-[10px] order-item' href={link.url}>
                  {link.name}
                </a>
              </Transition.Child>
            ))}
          </ol>
          <div>
            <a
              href='/resume.pdf'
              target='_blank'
              rel='noopener noreferrer'
              className='text-green inline-block leading-[1] text-[13px] mt-[15px] md:mt-0 ml-[12px] md:ml-[15px] font-SFMono font-medium bg-transparent border-2 border-green rounded-[4px] hover:bg-greenTint py-[0.6rem] px-4 transition-colors duration-300 ease-transition'
            >
              Resume
            </a>
          </div>
        </Transition>
        <button
          className='inline-block md:hidden focus:outline-none text-green absolute top-0 right-0'
          onClick={() => setIsOpen(prev => !prev)}
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-6 w-6'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M4 6h16M4 12h16M4 18h16'
            />
          </svg>
        </button>
      </nav>
    </header>
  );
};

export default Header;
