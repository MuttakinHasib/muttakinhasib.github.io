import React from 'react';

const Landing = () => {
  return (
    <section className='min-h-[75vh] flex flex-col justify-center items-start'>
      <div>
        <p className='text-base ml-1 mb-[30px] uppercase text-green font-SFMono'>
          Hey there!
        </p>
      </div>
      <div>
        <h1 className='text-[55px] sm:text-[65px] md:text-[70px] lg:text-[80px] leading-[1.1] font-calibre font-semibold uppercase text-blueWhite'>
          I am Hasib
        </h1>
      </div>
      <div>
        <h1 className='text-[35px] sm:text-[45px] md:text-[60px] lg:text-[70px] leading-[1.1] font-calibre font-light uppercase'>
          Full Stack Developer
        </h1>
      </div>
      <div>
        <p className='max-w-[500px] text-base ml-1 mt-5 font-SFMono'>
          A passionate self-taught Full Stack developer from Bangladesh. I
          develop web applications, mobile applications and desktop applications
        </p>
      </div>
      <div>
        <a
          href=''
          className='px-7 py-5 border-2 border-green text-green mt-[50px] block font-SFMono leading-[1] rounded-[4px] hover:bg-greenTint transition-colors duration-300 ease-ease-transition'
        >
          Get In Touch
        </a>
      </div>
    </section>
  );
};

export default Landing;
