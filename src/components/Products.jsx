import React from "react";

const Products = ({ product }) => {
  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-[30px] md:px-[60px] py-[60px] lg:px-[120px]">
        {product.map((item, index) => (
          <div key={index} className="hover:shadow-2xl px-4 py-3 duration-500 flex flex-col justify-between">
            <div className="">
              <img src={item.img} alt="" />
              <div className="pt-1 text-center">
                {item.name}:{item.quality}
              </div>
              <div className="py-3 flex flex-row items-center justify-center ">
                <p className=" font-bold text-[13px]">from </p>
                <div className=" font-bold "> &nbsp;€{item.price}</div>
              </div>
            </div>
            <div className="pt-7">
              <button  className="border font-bold text-[15px] text-white bg-button w-full py-3">
                View options
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
