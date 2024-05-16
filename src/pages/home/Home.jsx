import React from "react";
import BannerSlider from "../../components/BannerSlider.jsx";
import Products from "../../components/Products.jsx";
import SearchBar from "../../components/SearchBar.jsx";
import YoutubeVideo from "../../components/YoutubeVideo.jsx";

const Home = () => {
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
  ];
  const data2 = [
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

  return (
    <>
      <div>
        <BannerSlider className="z-0" />
        <Products product={data} />
        <div className=" relative overflow-hidden w-full  h-[600px]   my-20">
          <YoutubeVideo className="z-0" videoId="-tUOVHgkhgA" />
          <div className=" flex flex-col gap-2  items-center  w-full 0 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 text-4xl text-white">
            <h5 className="   text-center z-10 text-sm text-white">
              PREFECT POUR
            </h5>
            <h1 className="   text-center z-10 text-5xl pb-4 text-white">
              How to make the prefect cup of coffee
            </h1>
            <button className="hover:bg-white bg-button text-white px-2 py-1  inline text-[16px] font-bold w-[190px] hover:text-button">Find out now</button>
          </div>
        </div>

        <Products product={data2} />
        <div
          style={{ backgroundColor: "#e0c692" }}
          className=" h-[300px] flex flex-col gap-5 w-full  md: text-center justify-center items-center"
        >
          <p className=" font-thin text-4xl">Looking for something?</p>
          <div className="lg:w-[600px] w-full px-8 md:px-16">
            <SearchBar bg="white" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
          