import React from 'react';
import SectionTitle from '../SectionTitle';
import { skills } from '../../static';

const About = () => {
  return (
    <section id='about' className='min-h-[75vh] py-[100px]'>
      <SectionTitle index='01.' title='About Me' />
      <div className='grid gap-10 grid-cols-1 md:grid-cols-[3fr,2fr]'>
        <div className='space-y-5'>
          <div className='space-y-5'>
            <p className='ml-1 mt-5 prose prose-lg text-lightSlate'>
              A passionate self-taught Full Stack developer from Bangladesh.
              <br />I develop web applications, mobile applications and desktop
              applications
            </p>
            <p className='ml-1 mt-5 prose prose-lg text-lightSlate'>
              Here are a few technologies I've been working with recently:
            </p>
          </div>
          <ul className='ml-1 font-SFMono text-green list-inside tracking-[1px] list-[square] grid gap-x-4 gap-y-3 grid-cols-[repeat(2,minmax(140px,200px))]'>
            {skills.map((skill, index) => (
              <li className='before:' key={index}>
                {skill.name}
              </li>
            ))}
          </ul>
        </div>
        <div className='max-w-[300px] mx-auto '>
          <div className='relative shadow-2xl group cursor-pointer'>
            <div className='z-0 rounded-lg absolute w-full h-full top-7 sm:top-9 left-7 sm:left-9 border-4 border-green group-hover:top-6 group-hover:left-6 transition-all duration-200 ease-transition'></div>
            <div className='rounded-lg overflow-hidden'>
              <img
                className='z-10 filter grayscale hover:grayscale-[20%] transition-all duration-200 ease-transition'
                src='/hasib.jpg'
                alt=''
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
