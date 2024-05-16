import React, { useState } from "react";
import { BsPerson } from "react-icons/bs";
import { LiaShoppingBagSolid } from "react-icons/lia";
import { IoMdMenu } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaVimeoV } from "react-icons/fa";

import Dropdownitems from "./Dropdownitems";
import Megadropdown from "./Megadropdown";
import SearchBar from "./SearchBar";
const Data = ["Sweet", "Sharp"];
const Megadata = [
  {
    id: 1,
    category: "By the bag",
    item1: "Shop all bags",
    item2: "Colombia",
    item3: "Ethopia",
    item4: "Kenya",
  },
  {
    id: 1,
    category: "By the bag",
    item1: "Shop all bags",
    item2: "Colombia",
    item3: "Ethopia",
    item4: "Kenya",
  },
  {
    id: 1,
    category: "By the bag",
    item1: "Shop all bags",
    item2: "Colombia",
    item3: "Ethopia",
    item4: "Kenya",
  },
];

const Navbar = () => {
  const [value, setvalue] = useState(true);

  const handleChange = () => {
    setvalue(!value);
  };
 

  return (
    <div className=" size full  ">
      {/* mobile */}

      <div
        className={`${
          value ? "hidden" : ""
        } absolute bg-custom-color  z-30 w-[80%] `}
      >
        <div className="flex flex-col pb-[100px]  text-[15px] gap-4">
          <div className="text-[40px] text-softpink absolute right-10 pt-8  ">
            <IoMdClose onClick={handleChange} />
          </div>

          <li className="list-none text-softpink px-4 hover:text-lightgreen pt-[100px]">
            Home
          </li>
          <hr className="border-softpink border-solid border-opacity-25" />
          <li className="list-none text-softpink px-4 hover:text-lightgreen">
            About us
          </li>
          <hr className="border-softpink border-solid border-opacity-25" />
          <li className="list-none text-softpink px-4 hover:text-lightgreen">
            Get in touch
          </li>
          <hr className="border-softpink border-solid border-opacity-25" />
          <li className="list-none text-softpink px-4 hover:text-lightgreen">
            Delivery
          </li>
          <hr className="border-softpink border-solid border-opacity-25" />
          <li className="list-none text-softpink px-4 hover:text-lightgreen">
            FAQ
          </li>
          <hr className="border-softpink border-solid border-opacity-25" />
          <li className="list-none text-softpink px-4 hover:text-lightgreen">
            About us
          </li>
          <hr className="border-softpink border-solid border-opacity-25" />
          <div className="px-4">
            <Megadropdown menu="Categories" data={Megadata} />
          </div>
          <hr className="border-softpink border-solid border-opacity-25" />
          <div className="px-4">
            <Dropdownitems data={Data} menu="dropdown" />
          </div>
          <li className="list-none text-softpink px-4 hover:text-lightgreen">
            Login
          </li>
          <hr className="border-softpink border-solid border-opacity-25" />
          <li className="list-none text-softpink px-4 hover:text-lightgreen">
            Create Account
          </li>
          <hr className="border-softpink  border-solid border-opacity-25" />
          <div className="flex flex-row text-softpink gap-6 text-[20px] text-center justify-center">
            <FaFacebookSquare />
            <FaTwitter />
            <FaVimeoV />
            <FaTiktok />
          </div>
        </div>
      </div>
      {/* top */}
      <div className="md:flex hidden space-x-4 justify-between bg-custom-color px-16 pt-2.5">
        {/* left  */}
        <div className="flex flex-row gap-7  ">
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
        {/* right */}
        <div className="flex flex-row gap-7 ">
          <div>
            <Dropdownitems data={Data} menu="dropdown" className="" />
          </div>

          <BsPerson className="text-softpink size-7  hover:text-lightgreen" />
          <LiaShoppingBagSolid className="text-softpink size-7  hover:text-lightgreen" />
        </div>
      </div>
      {/* bottom */}
      <div className="bg-custom-color px-16 pt-2.5 border-[1px] border-softpink text-softpink">
        <div className="flex flex-row items-center ">
          <IoMdMenu
            onClick={handleChange}
            className={` block md:hidden  text-[44px] `}
          />
          <div className="font-bold text-[44px] ">&nbsp;smooth</div>
        </div>
        <div className="flex justify-between   ">
          {/* left */}
          <div className="md:flex hidden flex-row gap-7 pt-[30px]">
            <li className="list-none text-softpink  hover:text-lightgreen">
              About us
            </li>
            <Megadropdown menu="Categories" data={Megadata} />
            <li className="list-none text-softpink  hover:text-lightgreen">
              Delivery
            </li>
            <div>
              <Dropdownitems data={Data} menu="dropdown" />
            </div>
          </div>
          {/* rigth */}
          <div className=" hidden md-lg:block lg:flex  w-[400px]">
            <SearchBar className="" bg="custom-color" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
