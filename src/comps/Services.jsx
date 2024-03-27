import React from "react";
import { motion } from "framer-motion";

const AboutCard = ({ title, desc }) => {
  return (
    <div className="flex border-2 border-solid p-4 text-[#d3d3d3] rounded-md border-white flex-col gap-y-2 hover:bg-white hover:text-black transition duration-300 ease-in-out max-md:px-10  max-md:min-w-full ">
      <h1 className="font-main text-xl font-semibold  ">{title}</h1>
      <p className=" font-main font-light text-lg  ">{desc}</p>
      <button className=" w-1/2 self-center bg-[#ffa500] rounded-md text-black font-main p-3 text-md hover:brightness-[85%]">
        Go
      </button>
    </div>
  );
};

const About = () => {
  const slideIn = {
    initial: {
      opacity: 0,
      x: -100,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1,
      },
    },
  };
  const cards = [
    {
      title: "Web Development",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem cum at repellendus accusamus facere et corporis libero tempora. Odit, alias.",
    },
    {
      title: "UI/UX Design",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem cum at repellendus accusamus facere et corporis libero tempora. Odit, alias.",
    },
    {
      title: "Marketing",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem cum at repellendus accusamus facere et corporis libero tempora. Odit, alias.",
    },
    {
      title: "Branding",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem cum at repellendus accusamus facere et corporis libero tempora. Odit, alias.",
    },
  ];
  const spanStyle = "hover:text-[#ffa500] font-bold";
  return (
    <div className="flex flex-col bg-gradient-to-b from-[#0d0d21] to-[#111130] size-screen snap-start " id="services">
      <motion.div
        whileInView="animate"
        viewport={{ once: false, amount: 0.25 }}
        variants={slideIn}
        initial="initial"
        className="flex justify-end"
      >
        <p className="font-main text-lg text-[#808080] text-center mt-4">
          I focus on helping your brand grow<br className="max-md:hidden"></br> and move forward
        </p>
        <hr className="w-1/3 self-center stroke-slate-500 stroke-1 " />
      </motion.div>
      <motion.div
        whileInView="animate"
        viewport={{ once: false, amount: 0.25 }}
        variants={slideIn}
        initial="initial"
        className="flex flex-col gap-y-4"
      >
        <h1 className=" text-center font-light text-7xl font-main text-white max-md:text-5xl px-2">
          <span className={spanStyle}>Unique </span>Ideas<br></br>{" "}
          <span className={spanStyle}>For Your </span> Buisness.
        </h1>
        <div className=" self-center bg-[#ffa500] rounded-xl text-black font-main p-4 cursor-pointer text-lg">
          WHAT WE DO?
        </div>
      </motion.div>
      <motion.div
        whileInView="animate"
        viewport={{ once: false, amount: 0.25 }}
        variants={slideIn}
        initial="initial"
        className="flex  gap-x-8 my-8 px-8 max-md:overflow-x-scroll max-md:gap-x-12"
      >
        {cards.map((card, index) => (
          <AboutCard key={index} title={card.title} desc={card.desc} />
        ))}
      </motion.div>
    </div>
  );
};

export default About;
