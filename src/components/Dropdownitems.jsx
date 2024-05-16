
import React from 'react'
import { useState } from 'react';
import { RiArrowDropDownLine } from "react-icons/ri";


const Dropdownitems = ({ data, menu }) => {
 
  const [hover,sethover] = useState(true);
  const onhover=()=>{
      sethover(false)
  }
  const outhover=()=>{
      sethover(true)
  }

  return (
    <div>
      <div className=' flex flex-row cursor-pointer pb-2.5  hover:text-lightgreen text-softpink' onMouseEnter={onhover}
           onMouseLeave={outhover}>{menu}
        <RiArrowDropDownLine className='size-7' />
      </div>
      <div onMouseEnter={onhover}
           onMouseLeave={outhover} className={`${hover ? 'hidden' : ''} z-10 absolute border-softpink border `}>

        {data.map((item, index) => (
          <div key={index} className={`flex flex-col pl-3 pr-20 py-4  hover:text-lightgreen text-softpink  bg-custom-color 
        `}> {item} </div>

        ))}
      </div>
    </div>


  )
}

export default Dropdownitems





























