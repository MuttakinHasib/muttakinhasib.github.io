import React from 'react';
import SectionTitle from '../SectionTitle';

const About = () => {
  return (
    <section id='about' className='min-h-[75vh] py-[100px]'>
      <SectionTitle index='01.' title='About Me' />
      <div className='grid gap-50 col-1'>
        <div className='col-span-2'>
          <div>
            <p className='max-w-[500px] ml-1 mt-5 prose prose-lg text-gray-300'>
              A passionate self-taught Full Stack developer from Bangladesh.
              <br />I develop web applications, mobile applications and desktop
              applications
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
