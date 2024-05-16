import React from "react";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaVimeoV } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <div className="bg-custom-color    text-softpink sm:px-[20px] md:px-[110px] py-[70px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5">
        <div className="flex justify-center border-r pr-4 border-softpink h-[200px] font-bold text-[44px]">
          Smooth
        </div>
        <div className="flex sm:col-span-1 lg:col-span-2 flex-col gap-3 px-7 border-r pr-6 border-softpink h-[200px] ">
          <div className=" font-bold">Join our Mailing List</div>
          <div className="flex flex-row gap-3 h-[50px]  w-full">
            <input
              className="w-full px-4 py-3 placeholder-softpink bg-custom-color border border-softpink "
              type="email"
              placeholder="your@email.com"
            />
            <button className="bg-softpink text-black px-7">send</button>
          </div>
        </div>
        <div className="flex px-7 border-r  border-softpink pr-4 h-[200px]">
          <div className="flex flex-col gap-4  ">
            <li className="list-none text-softpink font-bold">Links</li>
            <li className="list-none text-softpink  hover:text-lightgreen">
              About us
            </li>
            <li className="list-none text-softpink  hover:text-lightgreen">
              Get in touch
            </li>
            <li className="list-none text-softpink  hover:text-lightgreen">
              Delivery
            </li>
            <li className="list-none text-softpink  hover:text-lightgreen">
              FAQ
            </li>
          </div>
        </div>
        <div className="flex flex-col top-0 gap-7  px-7">
          <h1 className="font-bold ">Get connected </h1>
          <div className="flex gap-4 text-[25px] flex-row">
            <FaFacebookSquare />
            <FaTwitter />
            <FaVimeoV />
            <FaTiktok />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
