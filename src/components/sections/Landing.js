import React from 'react';
import { email } from '../../static';

const Landing = () => {
  return (
    <section className='min-h-[90vh] md:pt-[100px] flex flex-col justify-center items-start'>
      <div>
        <p className='text-base ml-1 mb-[30px] uppercase text-green font-SFMono'>
          Hey there!
        </p>
      </div>
      <div>
        <h1
          className='tracking-[1.5px] text-[35px] sm:text-[40px] md:text-[50px] lg:text-[65px] xl:text-[70px] leading-[1.1] font-semibold uppercase text-blueWhite'
          style={{ wordSpacing: '4px' }}
        >
          I am Hasib
        </h1>
      </div>
      <div>
        <h2 className='tracking-[1px] text-[22px] sm:text-[30px] md:text-[40px] lg:text-[50px] xl:text-[55px] font-light uppercase'>
          Full Stack Developer
        </h2>
      </div>
      <div>
        <p className='max-w-[550px] ml-1 mt-5 prose prose-lg text-lightSlate'>
          A passionate self-taught Full Stack developer from Bangladesh. <br />I
          develop web applications, mobile applications and desktop applications
        </p>
      </div>
      <div>
        <a
          href={`mailto:${email}`}
          className='px-6 py-4 md:px-7 md:py-5 border-2 border-green text-green mt-[50px] block font-SFMono leading-[1] rounded-[4px] hover:bg-greenTint transition-colors duration-300 ease-ease-transition'
        >
          Get In Touch
        </a>
      </div>
    </section>
  );
};

export default Landing;
