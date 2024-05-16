import React, { useState } from 'react'
import { RiArrowDropDownLine } from "react-icons/ri";

const Megadropdown = ({ data, menu }) => {

    const [hover,sethover] = useState(true);
    const onhover=()=>{
        sethover(false)
    }
    const outhover=()=>{
        sethover(true)
    }

    
    return (
        <div >
            <div className=' flex flex-row cursor-pointer  hover:text-lightgreen text-softpink pb-2.5'  onMouseEnter={onhover}
            onMouseLeave={outhover} >{menu}
                <RiArrowDropDownLine className='size-7' />
            </div>
            <div className={`${hover ? 'hidden' : ''} z-10   absolute left-0 right-0 flex flex-row  border-softpink border`} 
           onMouseEnter={onhover}
           onMouseLeave={outhover}
            >

                {data.map((data, index) => (
                 <div key={index} className={`flex flex-col size-full px-16 gap-5 py-6 border  border-softpink text-softpink  bg-custom-color `}>
                    <li className='list-none font-bold'>{data.category}</li>
                    <li className='list-none  hover:text-lightgreen'>{data.item1}</li>
                    <li className='list-none  hover:text-lightgreen'>{data.item2}</li>
                    <li className='list-none  hover:text-lightgreen'>{data.item3}</li>
                    <li className='list-none  hover:text-lightgreen'>{data.item4}</li>
                
                 </div>

                ))}
            </div>
        </div>
    )
}

export default Megadropdown