import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { useContextCustom } from "../context/stateContext";

const Cart = ({ item, increasePrice, decreasePrice, mainTotal }) => {
  const [quantity, setQuantity] = useState(1);
  const { dispatch } = useContextCustom();

  const increaseQty = () => {
    setQuantity(quantity + 1);
    increasePrice(item.price);
  };
  const decreaseQty = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
      decreasePrice(item.price);
    }
  };

  const oneItemPrice = quantity * item.price;

  const delBtn = () => {
    dispatch({ type: "REMOVE_FROM_CART", payLoad: item });
    decreasePrice(oneItemPrice);
  };
  return (
    <div className=" container px-6 mb-6 mx-auto">
      <div className=" md:flex justify-around gap-10 items-center mb-4">
        <img
          src={item.thumbnail}
          className="w-[250px] rounded h-[250px] object-contain mx-auto mb-3"
          loading="lazy"
        />
        <div className="w-[95%] md:w-[700px] flex justify-between items-center ">
          <div className="flex flex-col justify-center items-start">
            <h1 className="text-lg md:text-2xl font-semibold  ">
              {item.title}
            </h1>
            <h1 className=" text-lg md:text-2xl font-semibold mb-5 ">
              ${oneItemPrice}
            </h1>
            <button
              onClick={delBtn}
              className="btn btn-warning text-white font-semibold hover:text-slate-900 bg-[#f97316]"
            >
              Remove
            </button>
          </div>
          <div className=" flex flex-col justify-center items-center md:mr-16">
            <p onClick={increaseQty} className=" cursor-pointer text-3xl">
              <IoIosArrowUp />
            </p>
            <p className="text-lg md:text-2xl text-black font-semibold">
              {quantity}
            </p>
            <p onClick={decreaseQty} className=" cursor-pointer text-3xl">
              <IoIosArrowDown />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
