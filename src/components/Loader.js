import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const Loader = ({ setLoading }) => {
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  const svgVariants = {
    hidden: {
      opacity: 1,
    },
    visible: {
      opacity: 0,
      scale: 0.8,
      transition: { delay: 2, duration: 0.3, ease: 'easeInOut' },
    },
  };

  const pathVariants = {
    hidden: {
      opacity: 0,
      pathLength: 0,
    },
    visible: {
      opacity: 1,
      pathLength: 1,
      transition: {
        duration: 1,
        ease: 'easeInOut',
      },
    },
  };
  const textVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        delay: 1,
        duration: 0.5,
        ease: 'easeInOut',
      },
    },
  };

  return (
    <div className='bg-darkNavy w-screen h-screen flex items-center justify-center fixed inset-0 z-[99]'>
      <div className='w-20 h-20 text-green'>
        <motion.svg
          variants={svgVariants}
          initial='hidden'
          animate='visible'
          id='logo'
          xmlns='http://www.w3.org/2000/svg'
          role='img'
          viewBox='0 0 84 96'
          fill='none'
        >
          <title>Logo</title>
          <motion.path
            variants={pathVariants}
            d='M42 3L3 25v45l39 23 39-22V26z'
            fill='none'
            stroke='currentColor'
            strokeWidth={5}
          />
          <g>
            <motion.path
              variants={textVariants}
              fill='currentColor'
              d='M29.3,63.9V32.1h6.4v12.5h12.6V32.1h6.4v31.8h-6.4V50H35.7v13.9H29.3z'
            />
          </g>
        </motion.svg>
      </div>
    </div>
  );
};

export default Loader;
