import React, { useState } from 'react';
import { CiSearch } from "react-icons/ci";

const SearchBar = ({bg}) => {
    const [text, setText] = useState('');
    const [isInputEmpty, setIsInputEmpty] = useState(true);

    const handleChange = (event) => {
        const inputValue = event.target.value;
        setText(inputValue);
        setIsInputEmpty(inputValue === '');
    };
        
    const clear = () => {
        setText('');
        setIsInputEmpty(true);
    };

    return (
        <div className={`mt-0 w-full bg-${bg} `}>
            <div className='   border-[1px] border-softpink h-11 flex flex-row items-center justify-between px-5 mt-0'>
                <input
                    value={text}
                    onChange={handleChange}
                    type="text"
                    placeholder='Search Smooth'
                    className={` placeholder-softpink outline-none  w-[270px] bg-${bg}`} />
                <div
                    className={`${isInputEmpty ? 'hidden' : ''} underline size-7 cursor-pointer`}
                    onClick={clear}>clear</div>
                <CiSearch className='size-6' />
            </div>

        </div>
    );
};

export default SearchBar;
