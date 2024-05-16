import React, { useState } from "react";
import Filterdropdown from "../../components/Filterdropdown";
import { IoMdClose } from "react-icons/io";

const Product = () => {
  const data = [
    {
      id: 1,
      img: "https://fresh-theme-smooth.myshopify.com/cdn/shop/products/Fresh_Coffee_Product_Bag_01Product_Bag_4_Front_e6c2201c-51c8-4000-a457-a8e933d52798_300x.png?v=1619007695",
      name: "Bulk Buy Offer",
      quality: "10kg",
      price: 236.95,
    },
    {
      id: 2,
      img: "https://fresh-theme-smooth.myshopify.com/cdn/shop/products/Fresh_Coffee_Product_Bag_01Product_Bag_4_Front_e6c2201c-51c8-4000-a457-a8e933d52798_300x.png?v=1619007695",
      name: "Mountain Fir",
      quality: "Whole Bean",
      price: 5.95,
    },
    {
      id: 3,
      img: "https://fresh-theme-smooth.myshopify.com/cdn/shop/products/Fresh_Coffee_Product_Bag_01Product_Bag_4_Front_e6c2201c-51c8-4000-a457-a8e933d52798_300x.png?v=1619007695",
      name: "Mountain Fir",
      quality: "Ground",
      price: 6.95,
    },
    {
      id: 4,
      img: "https://fresh-theme-smooth.myshopify.com/cdn/shop/products/Fresh_Coffee_Product_Bag_01Product_Bag_2_Front_c1f2c610-00ac-48ce-b1e1-70208f16d4ab_300x.png?v=1618934248",
      name: "Moonrise Pine",
      quality: "Whole Bean",
      price: 7.95,
    },
    {
      id: 5,
      img: "https://fresh-theme-smooth.myshopify.com/cdn/shop/products/Fresh_Coffee_Product_Bag_01Product_Bag_2_Front_300x.png?v=1618934210",
      name: "Moonrise Pine",
      quality: "Ground",
      price: 7.95,
    },
    {
      id: 6,
      img: "https://fresh-theme-smooth.myshopify.com/cdn/shop/products/Fresh_Coffee_Product_Bag_01Product_Bag_3_Front_ec89ffd2-aa90-424b-9084-cc877604b0b8_300x.png?v=1618934260",
      name: "Ocean Beech",
      quality: "Ground",
      price: 6.95,
    },
    {
      id: 7,
      img: "https://fresh-theme-smooth.myshopify.com/cdn/shop/products/Fresh_Coffee_Product_Bag_01Product_Bag_3_Front_300x.png?v=1618934204",
      name: "Ocean Beech",
      quality: "Whole Bean",
      price: 6.95,
    },
    {
      id: 8,
      img: "https://fresh-theme-smooth.myshopify.com/cdn/shop/products/Fresh_Coffee_Product_Bag_01Product_Bag_1_Front_0f5061ec-deb1-4fd1-b8dc-f158b5d10b61_300x.png?v=1618934266",
      name: "Sunset Oak",
      quality: "Whole Bean",
      price: 6.95,
    },

    {
      img: "https://fresh-theme-smooth.myshopify.com/cdn/shop/products/Fresh_Coffee_01Product_Bottle_4_Front_300x.png?v=1618934221",
      name: "Bulk Buy Offer",
      quality: "10kg",
      price: 236.95,
    },
    {
      img: "https://fresh-theme-smooth.myshopify.com/cdn/shop/products/Fresh_Coffee_01Product_Bottle_4_Front_300x.png?v=1618934221",
      name: "Mountain Fir",
      quality: "Whole Bean",
      price: 5.95,
    },
    {
      img: "https://fresh-theme-smooth.myshopify.com/cdn/shop/products/Fresh_Coffee_01Product_Bottle_3_Front_300x.png?v=1618934228",
      name: "Mountain Fir",
      quality: "Ground",
      price: 6.95,
    },
    {
      img: "https://fresh-theme-smooth.myshopify.com/cdn/shop/products/Fresh_Coffee_01Product_Bottle_3_Front_300x.png?v=1618934228",
      name: "Moonrise Pine",
      quality: "Whole Bean",
      price: 7.95,
    },
  ];
  const Avaliability = [" In stock (15)", "Out of stock (10)"];
  const Down = ["Sweet", "Sharp"];
  const Size = [" 200g (8)", "250g (8)", "1kg (8)"];
  const Bottlesize = [" 250ml (8)", " 500ml (8)", "1000ml (8)"];
  const Caffeinecontent = ["Decaf (17)", "Regular (17)"];
  const Grind = [" Espresso (5)", " Filter (5)", "French press (5)"];


  const [value,setvalue]=useState(false);

  const handelChange =()=>{
   setvalue(true)

  }
  const handelChange2=()=>{
    setvalue(false)
  }

  return (
    <div>
      {/* mobile filter */}

      <div className={` absolute ${value?'':'hidden'} shadow-2xl duration-500 h-full w-[80%] bg-white`}>
        <div className="flex justify-end ">
          <IoMdClose onClick={handelChange2} className="text-[70px] right-10 pt-8" />
        </div>
        <div className="w-[300px] px-4 pt-[20px]">
          <div className="flex flex-col ">
            <h1 className="pb-3 ">Store by</h1>
            <Filterdropdown data={Down} menu="dropdown" />
          </div>
          <div className="pt-10 ">
            <h1 className="pb-3">filter by</h1>
            <div className="flex flex-col gap-2">
              <Filterdropdown data={Avaliability} menu="Avaliability" />
              <Filterdropdown data={Size} menu="Size" />
              <Filterdropdown data={Bottlesize} menu="Bottle size" />
              <Filterdropdown data={Caffeinecontent} menu="Caffeine content" />
              <Filterdropdown data={Grind} menu="Grind" />
            </div>
          </div>
        </div>
      </div>

      <div className="py-[30px]   items-center flex flex-col justify-between gap-2">
        <h1 className="text-[40px] font-['Open_Sans']">Shop All</h1>
        <p className="text-center max-w-xl px-5">
          We partner with farmers who share our passion to ensure all our coffee
          is ethically and sustainably sourced.
        </p>
      </div>
      <div className="px-8">
        <button onClick={handelChange} className="block md:hidden text-center bg-button text-white w-full  py-2">
          Filter/Sort
        </button>
      </div>

      <div className="flex flex-row">
        <div className="hidden md:block">
          <div className="w-[300px] px-4 pt-[20px]">
            <div className="flex flex-col ">
              <h1 className="pb-3 ">Store by</h1>
              <Filterdropdown data={Down} menu="dropdown" />
            </div>
            <div className="pt-10 ">
              <h1 className="pb-3">filter by</h1>
              <div className="flex flex-col gap-2">
                <Filterdropdown data={Avaliability} menu="Avaliability" />
                <Filterdropdown data={Size} menu="Size" />
                <Filterdropdown data={Bottlesize} menu="Bottle size" />
                <Filterdropdown
                  data={Caffeinecontent}
                  menu="Caffeine content"
                />
                <Filterdropdown data={Grind} menu="Grind" />
              </div>
            </div>
          </div>
        </div>
        {/* rigth products*/}
        <div className="w-full ">
          <div className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3  gap-8 px-[20px] py-[60px] ">
            {data.map((item, index) => (
              <div
                key={index}
                className="hover:shadow-2xl px-4 py-3 duration-500 flex flex-col items-center justify-between gap-5"
              >
                <div className="flex flex-col items-center text-center w-full">
                  <img className="w-full" src={item.img} alt="" />
                  <p className="pt-1 text-center">
                    {item.name}:{item.quality}
                  </p>
                  <p className=" font-bold text-[13px]">from </p>
                  <p className=" font-bold "> &nbsp;€{item.price}</p>
                </div>
                <button className="border font-bold text-[15px] text-white bg-button w-full py-3">
                  View options
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
