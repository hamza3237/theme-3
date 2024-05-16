import React from "react";
import YoutubeVideo from "../../components/YoutubeVideo";
import ProductDetail from "../../components/ProductDetail";
const SingleProduct = () => {
  const data = [
    " https://fresh-theme-smooth.myshopify.com/cdn/shop/products/Fresh_Coffee_Product_Bag_01Product_Bag_4_Front_e6c2201c-51c8-4000-a457-a8e933d52798_300x.png?v=1619007695",
    " https://fresh-theme-smooth.myshopify.com/cdn/shop/products/Fresh_Coffee_Product_Bag_01Product_Bag_2_Front_c1f2c610-00ac-48ce-b1e1-70208f16d4ab_300x.png?v=1618934248",
    " https://fresh-theme-smooth.myshopify.com/cdn/shop/products/Fresh_Coffee_Product_Bag_01Product_Bag_2_Front_300x.png?v=1618934210",
  ];
  return (
    <div>
      {/*prduct detail and picture */}
      <div className="flex md:flex-row justify-between flex-col">
        <div className=" flex-1   ">
          {data.map((item, index) => (
            <div key={index} className="flex flex-col justify-center">
              <img src={item} alt="" className="px-10 items-center"/>
            </div>
          ))}
        </div>
        <div className=" flex-1  sticky top-0 h-[690px] p-4 ">
          
          <ProductDetail/>
          </div>
      </div>



      {/*video*/}
      <div className=" relative overflow-hidden w-full  h-[460px]   my-20">
        <YoutubeVideo className="z-0" videoId="692QSQiby3A" />
        <div className=" flex flex-col gap-2  items-center  w-full 0 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 text-4xl text-white">
          <h5 className="   text-center z-10 text-sm text-white">
            PREFECT POUR
          </h5>
          <h1 className="   text-center z-10 text-5xl pb-4 text-white">
            How to make the prefect cup of coffee
          </h1>
          <button className="hover:bg-white bg-button text-white px-2 py-1  inline text-[16px] font-bold w-[190px] hover:text-button">
            Find out now
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
