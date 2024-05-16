// Selector.jsx
import React, { useState } from "react";

const Selector = ({ selected, data, setselected }) => {
  const [isActive, setisActive] = useState(false);

  const handleChange = () => {
    setisActive(!isActive);
  };

  // Set the default selected option as the first element in the data array
  if (!selected && data.length > 0) {
    setselected(data[0]);
  }

  return (
    <div className="dropdown  w-full relative">
      <div
        onClick={handleChange}
        className="dropdown-btn px-4 py-3 h-12 border-button  border-[0.1px]  flex items-center justify-between text-gray-700 bg-white"
      >
        {selected}
      </div>
      <div
        className={`dropdown-content absolute w-full p-3 z-10 bg-white shadow-lg  ${
          isActive ? "" : "hidden"
        }`}
      >
        {data.map((option, index) => (
          <div
            key={index}
            onClick={(e) => {
              setselected(option);
              setisActive(false);
              console.log(option)
            }}
            className="dropdown-item p-3 cursor-pointer"
          >
            {option}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Selector;
