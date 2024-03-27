import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  const buttonStyle =
    "bg-transparent rounded-xl p-4 border-slate-300 border-solid text-white hover:bg-white hover:text-black transition duration-300 ease-in-out border-[1px] max-md:text-center";
  const slideIn = (delay) => {
    return {
      initial: {
        opacity: 0,
        x: -500,
      },
      animate: {
        x: 0,
        opacity: 1,
        transition: {
          duration: 1,
          delay: delay,
        },
      },
    };
  };

  return (
    <div className="overflow-y-hidden max-md:mt-8  ">
      <div className="flex justify-between items-center px-10 w-full lg:gap-x-28 max-md:flex-col max-md:gap-y-16 ">
        <div className="flex flex-col gap-y-16 max-md:gap-y-10">
          <motion.div
            className=" flex flex-col gap-y-16 max-md:gap-y-4 max-md:text-center"
            variants={slideIn()}
            initial="initial"
            animate="animate"
          >
            <h3 className="text-[#663394] font-main text-3xl font-semibold tracking-[0.5rem] max-lg:text-2xl">
              HARVEY TYLER
            </h3>
            <h1 className="font-bold font-main text-[#d3d3d3] text-7xl max-lg:text-4xl ">
              Web developer and UI designer
            </h1>
          </motion.div>
          <motion.div
            className="flex gap-x-4 z-10 max-md:self-center"
            variants={slideIn(0.6)}
            initial="initial"
            animate="animate"
          >
            <a href="#featured" className={buttonStyle}>
              See my latest works
            </a>
            <a href="#contact">
              <button className={buttonStyle}>Contact Me</button>
            </a>
          </motion.div>
        </div>
        <div className="relative w-[30rem] h-[32rem] flex-shrink-0 z-10 max-md:w-72 max-md:h-96">
          <img
            src="/hero.png"
            alt="hero"
            className=" w-full h-full object-cover"
          />
        </div>
      </div>
      <motion.span
        animate={{
          x: [0, -1550, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "loop",
          ease: "linear",
        }}
        className=" bottom-0 max-md:bottom-10 absolute text-[7rem] max-md:text-8xl text-slate-600 opacity-20 font-bold font-main text-nowrap"
      >
        Writer Content Creator Influencer
      </motion.span>
    </div>
  );
};

export default Hero;
