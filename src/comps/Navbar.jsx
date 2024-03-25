import React from "react";
import { FiMenu } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import facebook from "/facebook.png";
import instagram from "/instagram.png";
import youtube from "/youtube.png";
import dribbble from "/dribbble.png";

const Navbar = () => {
  const socials = [
    { icon: facebook },
    { icon: instagram },
    { icon: youtube },
    { icon: dribbble },
  ];
  return (
    <div>
      <div className="flex justify-between items-center p-6 px-10">
        <div className="rounded-full bg-white size-12 flex items-center justify-center cursor-pointer ">
          <FiMenu size={25} className="self-center" color="black"/>
        </div>
        <div className="flex gap-x-4">
          {socials.map((social, index) => <a href="#"><img key={index} src={social.icon} alt="social" className="size-6 transition duration-300 hover:-translate-y-2" /></a>)}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
