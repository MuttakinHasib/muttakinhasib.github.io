import React from 'react';

const SectionTitle = ({ index, title }) => {
  return (
    <div className='flex items-center space-x-4 mt-5 mb-10'>
      <p className='text-[20px] text-green font-SFMono'>{index}</p>
      <h1 className='relative font-semibold text-[27px] whitespace-nowrap'>
        {title}
      </h1>
      <span className='w-52 h-[1px] bg-[#233554]' />
    </div>
  );
};

export default SectionTitle;
