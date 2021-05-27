import React from 'react';

const Container = ({ children }) => {
  return (
    <div className='px-[25px] sm:px-[50px] md:px-[100px] lg:px-[150px]'>
      {children}
    </div>
  );
};

export default Container;
