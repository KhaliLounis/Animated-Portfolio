import React, { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import facebook from "/facebook.png";
import instagram from "/instagram.png";
import youtube from "/youtube.png";
import dribbble from "/dribbble.png";
import { motion, AnimatePresence } from "framer-motion";

const Sidebar = ({ setIsOpen, isOpen }) => {
  const textSlideup = {
    initial: {
      opacity: 0,
      y: 50,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        staggerChildren: 0.25,
      },
    },
  };
  const variants = {
    open: {
      // opacity:1,
      clipPath: "circle(1000px at 500px 500px)",
      transition: {
        type: "spring",
        stiffness: 20,
      },
    },
    closed: {
      // opacity:0,
      clipPath: "circle(30px at 50px 50px)",
      transition: {
        delay: 1,
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
  };

  return (
    <motion.div
      variants={variants}
      animate={isOpen ? "open" : "closed"}
      className="  flex flex-col gap-y-8 text-4xl font-main font-medium items-center justify-center h-screen w-1/4 bg-white text-black absolute top-0 left-0"
    >
      {["Homepage", "Services", "Portfolio", "Contact"].map((text, index) => (
        <AnimatePresence>
          <motion.a
            href={`#${text.toLowerCase()}`}
            onClick={() => setIsOpen(!isOpen)}
            variants={textSlideup}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            animate="animate"
            initial="initial"
            key={index}
          >
            {text}
          </motion.a>
        </AnimatePresence>
      ))}
    </motion.div>
  );
};

const Navbar = () => {
  const socials = [
    { icon: facebook },
    { icon: instagram },
    { icon: youtube },
    { icon: dribbble },
  ];
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div className="flex justify-between items-center p-6 px-10">
        <div className="rounded-full bg-white size-12 flex items-center justify-center z-20  ">
          {!isOpen ? (
            <FiMenu
              size={25}
              className="self-center relative z-20 cursor-pointer"
              color="black"
              onClick={() => setIsOpen(!isOpen)}
            />
          ) : (
            <>
              <IoClose
                size={25}
                className="self-center relative z-20 cursor-pointer"
                color="black"
                onClick={() => setIsOpen(!isOpen)}
              />
              <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
            </>
          )}
        </div>
        <div className="flex gap-x-4 self-end">
          {socials.map((social, index) => (
            <a href="#">
              <img
                key={index}
                src={social.icon}
                alt="social"
                className="size-6 transition duration-300 hover:-translate-y-2"
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
