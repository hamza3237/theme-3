import React, { useState, useRef, useEffect } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";

const Filterdropdown = ({ data, menu }) => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event) => {
    console.log(ref.current)
    if (ref.current && !ref.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div ref={ref}>
      <div>
        <div
          className="flex flex-row cursor-pointer  border justify-between border-softpink py-[9px]   px-3 "
          onClick={handleToggle}
        >
          {menu}
          <RiArrowDropDownLine className="size-7" />
        </div>
        {isOpen && (
          <div
            className={`z-10 absolute border-softpink w-[268px] md:w-[580px] border`}
          >
            <div className="pl-3   pr-20 py-4  bg-white  w-full border-b-[1px] border-softpink flex flex-row justify-between ">
              <div className="flex  justify-between flex-row gap-2">
                <div> 0</div>
                <div className=" ">Selected</div>
              </div>
              <div className="text-button text-[15px] border-b border-button ">
                Reset{" "}
              </div>
            </div>
            {data.map((item, index) => (
              <div
                key={index}
                className="flex flex-row pl-2 items-center bg-white"
              >
                <input
                  type="checkbox"
                  id="checkbox"
                  name="checkbox"
                  className="h-4 w-4  border-gray-300 rounded focus:ring-black"
                />

                <div
                  key={index}
                  className={`flex flex-col pl-3 pr-20 py-4  bg-white w-[580px]`}
                >
                  {item}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Filterdropdown;
