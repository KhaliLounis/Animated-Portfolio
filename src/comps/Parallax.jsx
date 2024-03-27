import React, { useRef } from "react";
import { useScroll, motion, useTransform } from "framer-motion";

const WhatWeDo = ({ type }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "70%"]);
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "175%"]);
  return (
    <div
      className={`relative h-screen w-screen snap-start ${
        type === "works"
          ? "bg-gradient-to-b from-[#171737] to-[#3e3e55]"
          : "bg-[#0f0f2a]"
      } -z-50`}
    >
      <div className=" bg-[url('/mountains.png')] bg-cover bg-no-repeat bg-bottom z-40 size-full "></div>
      <motion.div
        className="absolute top-0 bg-[url('/stars.png')] bg-cover bg-no-repeat bg-bottom -z-10 size-full "
        style={{ x }}
      ></motion.div>
      <motion.div
        className={`flex items-center  justify-center absolute top-0 bg-[url('/${
          type === "works" ? "sun" : "planets"
        }.png')] bg-cover bg-no-repeat bg-bottom -z-10 size-full`}
        ref={ref}
        style={{ y }}
      >
        <p className="max-lg:text-5xl text-[6rem] font-main font-extrabold text-[#d3d3d3]">
          What We {type === "works" ? "Did" : "Do"}?
        </p>
      </motion.div>
    </div>
  );
};

export default WhatWeDo;
