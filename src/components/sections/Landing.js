import { motion } from "framer-motion";
import React from "react";
import { email } from "../../static";
import BgAnimation from "./BgAnimation";

export const container = {
  animate: {
    transition: { delayChildren: 0.3, staggerChildren: 0.1 },
  },
};

export const item = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      // delay: 1.5,
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};

const Landing = () => {
  return (
    <motion.section
      variants={container}
      initial="initial"
      animate="animate"
      className="min-h-[90vh] md:pt-[100px] flex flex-col justify-center items-start relative overflow-hidden"
    >
      <div className="absolute w-full max-w-lg sm:-right-32 top-50">
        <BgAnimation />
      </div>
      <motion.div variants={item}>
        <p className="text-base ml-1 mb-[30px] uppercase text-green font-SFMono">
          Hey there!
        </p>
      </motion.div>
      <motion.div variants={item}>
        <h1
          className="tracking-[1.5px] text-[35px] sm:text-[40px] md:text-[50px] lg:text-[65px] xl:text-[70px] leading-[1.1] font-semibold uppercase text-blueWhite"
          style={{ wordSpacing: "4px" }}
        >
          I am Hasib
        </h1>
      </motion.div>
      <motion.div variants={item}>
        <h2 className="tracking-[1px] text-[22px] sm:text-[30px] md:text-[40px] lg:text-[50px] xl:text-[55px] font-light uppercase">
          Full Stack Developer
        </h2>
      </motion.div>
      <motion.div variants={item}>
        <p className="max-w-[550px] ml-1 mt-5 prose prose-lg text-lightSlate">
          A passionate self-taught Full Stack developer from Bangladesh. <br />I
          develop web applications, mobile applications and desktop applications
        </p>
      </motion.div>
      <motion.div variants={item}>
        <a
          href={`mailto:${email}`}
          className="inline-block px-6 py-4 md:px-7 md:py-5 border-2 border-green text-green mt-[50px] font-SFMono leading-[1] rounded-[4px] hover:bg-greenTint transition-colors duration-300 ease-ease-transition"
        >
          Get In Touch
        </a>
      </motion.div>
    </motion.section>
  );
};

export default Landing;
