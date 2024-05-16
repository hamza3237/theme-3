// ProductDetail.jsx
import React, { useState } from "react";
import Selector from "./Selector";

const ProductDetail = () => {
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedModel, setSelectedMOdel] = useState("");
  const [quantity, setQuantity] = useState(1); // Initial quantity state

  // Function to handle subtraction
  const sub = () => {
    if (quantity > 1) {
      // Ensuring quantity doesn't go below 1
      setQuantity(quantity - 1);
    }
  };

  // Function to handle addition
  const add = () => {
    // You can set a maximum limit here, e.g., 10000
    if (quantity < 10000) {
      // Maximum limit set to 10000
      setQuantity(quantity + 1);
    }
  };
  const productData = [
    {
      id: 1,
      name: "Moonrise Pine",
      quality: "Whole Bean",
      price: 7.95,
    },
  ];
  const handleInputChange = (event) => {
    const value = parseInt(event.target.value); // Parse input value to integer
    // Check if the input is a valid number and within the desired range, e.g., between 1 and 10000
    if (!isNaN(value) && value >= 1 && value <= 10000) {
      setQuantity(value);
    }
  };

  const sizeOptions = ["Regular", "Decaf"];
  const modelOptions = ["First", "Second"];
  const colorOptions = ["Red", "Blue", "Green"];

  return (
    <div className="pt-10">
      {productData.map((item, index) => (
        <div
          key={index}
          className="form-select flex flex-col gap-2 justify-center"
        >
          <h5 className="text-[26px]">
            {item.name}:{item.quality}{" "}
          </h5>
          <p className="font-bold text-[19px]">${item.price}</p>
          <p>
            <a className="text-button" href="/">
              Shipping
            </a>{" "}
            calculated at checkout.
          </p>
          <h3>Size</h3>
          <div>
            <Selector
              data={sizeOptions}
              selected={selectedSize}
              setselected={setSelectedSize}
            />
          </div>
          <h3>Color</h3>
          <div>
            <Selector
              data={colorOptions}
              selected={selectedColor}
              setselected={setSelectedColor}
            />
          </div>
          <h3>Model</h3>
          <div>
            <Selector
              data={modelOptions}
              selected={selectedModel}
              setselected={setSelectedMOdel}
            />
          </div>
          <h3>Quantity</h3>
          <div className="border h-12 flex flex-row justify-between items-center w-[50%]">
            <div
              onClick={sub}
              className="cursor-pointer border w-12 text-center p-2 h-full"
            >
              -
            </div>
            <input
              type="text"
              value={quantity}
              onChange={handleInputChange}
              className=" text-center outline-none"
            />
            <div
              onClick={add}
              className="cursor-pointer border w-12 text-center p-2 h-full"
            >
              +
            </div>
          </div>
            <button className="w-full h-12 border-2 text-button mt-3 border-button">Add to cart</button>
            <button className="w-full h-12 bg-button text-white mt-3 font-bold text-[18px]" >BUY IT NOW</button>
        </div>
      ))}
    </div>
  );
};

export default ProductDetail;
