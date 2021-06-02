import React from 'react';
import { Picture } from 'next-img';
import SectionTitle from '../SectionTitle';
import { features } from '../../static';

const Work = () => {
  return (
    <section id='projects' className='min-h-[75vh] py-[50px] md:py-[100px]'>
      <SectionTitle index='03.' title="Some Things I've Built" />
      <ul className='space-y-[50px] md:space-y-[110px]'>
        {features.map((project, index) => (
          <li
            key={index}
            className={`grid grid-cols-12 gap-3 items-center ${
              (index + 1) % 2 === 0 ? 'text-left' : 'md:text-right'
            }`}
          >
            <div
              className={
                (index + 1) % 2 === 0
                  ? 'shadow-2xl md:shadow-none bg-darkNavy/[0.85] h-full md:h-auto md:bg-transparent relative z-10 px-10 py-6 sm:p-10 md:p-0 col-span-full md:col-start-1 md:col-end-[7] row-span-full'
                  : 'shadow-2xl md:shadow-none bg-darkNavy/[0.85] h-full md:h-auto md:bg-transparent relative z-10 px-10 py-6 sm:p-10 md:p-0 col-span-full md:col-start-5 lg:col-start-7 md:col-end-[-1] row-span-full'
              }
            >
              {/* <div className='text-right'> */}
              <p className='font-SFMono my-[10px] text-green text-sm font-regular'>
                Featured Project
              </p>
              <h3 className='hover:text-green tracking-[1px] text-[length:clamp(24px,5vw,28px)] font-semibold leading-[1.1] text-lightestSlate mb-6 transition-colors duration-300 ease-transition'>
                <a
                  className='static'
                  href={
                    project.links.external ||
                    project.links.github ||
                    project.links.download
                  }
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  {project.title}
                </a>
              </h3>
              <div className='relative z-10 rounded-sm md:p-5 md:bg-lightNavy text-lightSlate text-base'>
                <p>{project.description}</p>
              </div>
              <ul
                className={`text-green flex flex-wrap items-center space-x-5 mt-5 font-SFMono text-xs ${
                  (index + 1) % 2 === 0
                    ? 'justify-end md:justify-start'
                    : 'justify-end'
                }`}
              >
                {project.technologies.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
              <div
                className={`flex items-center mt-5 transition-colors duration-300 ease-transition ${
                  (index + 1) % 2 === 0
                    ? 'justify-end md:justify-start'
                    : 'justify-end'
                }`}
              >
                {project.links.github && (
                  <a
                    className='p-3 hover:text-green transition-colors duration-300 ease-transition'
                    href={project.links.github}
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      role='img'
                      viewBox='0 0 24 24'
                      fill='none'
                      stroke='currentColor'
                      strokeWidth='2'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      className='h-6 w-6'
                    >
                      <title>GitHub</title>
                      <path d='M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22'></path>
                    </svg>
                  </a>
                )}
                {project.links.download && (
                  <a
                    className='p-3 hover:text-green transition-colors duration-300 ease-transition'
                    href={project.links.download}
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='h-6 w-6'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                    >
                      <title>Download Now</title>
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4'
                      />
                    </svg>
                  </a>
                )}
                {project.links.external && (
                  <a
                    className='p-3 hover:text-green transition-colors duration-300 ease-transition'
                    href={project.links.external}
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      role='img'
                      viewBox='0 0 24 24'
                      fill='none'
                      stroke='currentColor'
                      strokeWidth='2'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      className='h-6 w-6'
                    >
                      <title>External Link</title>
                      <path d='M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6'></path>
                      <polyline points='15 3 21 3 21 9'></polyline>
                      <line x1='10' y1='14' x2='21' y2='3'></line>
                    </svg>
                  </a>
                )}
              </div>
              {/* </div> */}
            </div>
            <div
              className={
                (index + 1) % 2 === 0
                  ? 'col-span-full md:col-start-6 md:col-end-[-1] row-span-full'
                  : 'col-span-full md:col-start-1 md:col-end-8 row-span-full'
              }
            >
              <a
                href={
                  project.links.external ||
                  project.links.download ||
                  project.links.github
                }
                target='_blank'
                rel='noopener noreferrer'
              >
                <img
                  className='relative h-full object-cover filter hover:filter-none grayscale contrast-[1] brightness-90 transition-all duration-300 ease-transition'
                  width={project.image.width}
                  height={project.image.height}
                  src={project?.image?.url}
                  loading='lazy'
                  // loader
                />

                {/* <div className='absolute inset-0 w-full h-full z-10 bg-green/30' /> */}
              </a>
            </div>
          </li>
        ))}
      </ul>
      <div className='flex justify-center items-center mt-[55px]'>
        <a
          href='https://github.com/MuttakinHasib?tab=repositories'
          className='px-6 py-3 md:px-7 md:py-4 border-2 border-green text-green font-SFMono leading-[1] rounded-[4px] hover:bg-greenTint transition-colors duration-300 ease-ease-transition'
          target='_blank'
          rel='noopener noreferrer'
        >
          See more
        </a>
      </div>
    </section>
  );
};

export default Work;
