import React, { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import ai from "/ai.png";
import food from "/food.png";
import commerce from "/commerce.png";
import mentalify from "/mentalify.png";
import music from "/music.png";

const Work = ({ img, title }) => {
  const textRef = useRef(null);

  const { scrollYProgress } = useScroll({ target: textRef });

  const y = useTransform(scrollYProgress, [0, 1], ["-15rem", "15rem"]);

  return (
    <div className="flex  items-center  h-screen w-screen snap-start bg-[#0f0f2a] px-24 max-md:flex-col max-md:justify-center max-md:gap-y-12 max-md:items-start max-md:p-12  ">
      <div className="  ml-10 w-10/12 ">
        <img src={img} alt="" className="w-11/12    " />
      </div>
      <motion.div
        className="flex flex-col items-start gap-y-4 project "
        ref={textRef}
        style={{ y }}
      >
        <h1 className="max-lg:text-5xl text-6xl font-main font-extrabold text-[#d3d3d3]">
          {title}
        </h1>
        <p className="font-main font-light text-md text-slate-500 text-wrap">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id
          ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum
          facilis, id eum sequi placeat accusantium saepe eos laborum.
        </p>
        <button className="self-start bg-[#ffa500] rounded-md text-black font-main p-3 text-md hover:brightness-[85%]">
          See demo
        </button>{" "}
      </motion.div>
    </div>
  );
};
const Featured = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const works = [
    {
      img: ai,
      title: "React AI chatbot",
    },
    {
      img: food,
      title: "Food Ordering app",
    },
    {
      img: commerce,
      title: "Next Commerce",
    },
    {
      img: mentalify,
      title: "Mentalify app",
    },
    {
      img: music,
      title: "Music Store",
    },
  ];
  return (
    <div
      className=" bg-[#0f0f2a] flex flex-col items-center  "
      ref={ref}
      id="portfolio"
    >
      <div className="sticky top-5 ">
        <h1 className="max-lg:text-5xl text-7xl font-main font-extrabold text-[#ffa500] text-center max-md:text-4xl">
          Featured Works
        </h1>
        <motion.div
          className="bg-white h-3 w-full "
          style={{ scaleX: y }}
        ></motion.div>
      </div>
      {works.map((work, index) => {
        return <Work key={index} {...work} />;
      })}
    </div>
  );
};

export default Featured;
