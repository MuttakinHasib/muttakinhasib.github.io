import React from 'react';
import { email } from '../../static';

const Contact = () => {
  return (
    <section id='contact' className='md:min-h-[75vh] py-[100px]'>
      <div className='flex items-center justify-center space-x-4 mt-5 mb-10'>
        <p className='text-[18px] text-green font-SFMono'>04.</p>
        <h3 className='text-green font-SFMono text-[18px] whitespace-nowrap capitalize'>
          What’s Next?
        </h3>
      </div>
      <div className='text-center'>
        <h1 className='text-[length:clamp(40px,5vw,60px)] font-semibold leading-[1.1] tracking-[1px]'>
          Get In Touch
        </h1>
        <p className='prose prose-lg text-lightSlate mx-auto pt-5'>
          I am interested in working with any company that thinks my skill will
          be helpful for them. If you are looking for someone like me, please
          let me know. Or you can just 'say hi', I'll try my best to get back to
          you!
        </p>
      </div>
      <div className='flex justify-center items-center mt-[55px]'>
        <a
          href={`mailto:${email}`}
          className='px-6 py-3 md:px-7 md:py-4 border-2 border-green text-green font-SFMono leading-[1] rounded-[4px] hover:bg-greenTint transition-colors duration-300 ease-ease-transition'
        >
          Say Hello 👋
        </a>
      </div>
    </section>
  );
};

export default Contact;
