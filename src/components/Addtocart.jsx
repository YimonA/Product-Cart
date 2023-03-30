import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useContextCustom } from "../context/stateContext";
import Cart from "./Cart";

const Addtocart = () => {
  const [mainTotal,setMainTotal]=useState(0);
  const {
    state: { cart },dispatch
  } = useContextCustom();
  //console.log(cart);

  useEffect(()=>{
    setMainTotal(Total);
  },[])

  const increasePrice=(price)=>{
    setMainTotal(mainTotal+price);
  }

  const decreasePrice=(price)=>{
    setMainTotal(mainTotal-price);
  }
  
  const Total=()=>cart.reduce((pv,cv)=>pv+cv.price,0);

  return (
    <div className=" container mt-10 mx-auto">
      {cart?.length === 0 ? (
        <div className=" mt-20">
          <h1 className=" text-2xl text-center mb-6">Your Cart is empty.</h1>
          <Link to={'/'}>
          <div className=" flex justify-center">
          <button className="btn btn-warning text-white text-lg font-bold hover:text-slate-900 bg-[#f97316]">go to Shopping</button>
            </div></Link>
        </div>
      ) : (
        <div>
          <div>
            {cart?.map((item) => {
              return <Cart key={item.id} item={item} increasePrice={increasePrice} decreasePrice={decreasePrice} mainTotal={mainTotal}></Cart>;
            })}
          </div>
          <hr className=" w-[70%] border-3 my-4 mx-auto " />
          <div className=" flex justify-between md:justify-around mb-8 px-6">
            <h2 className=" text-2xl font-semibold">Total</h2>
            <p className=" text-2xl font-semibold">${mainTotal}</p>
          </div>
          <div className="flex justify-center mb-8">
            <button onClick={()=>dispatch({type:"CLEAR_CART"})} className=" border-2 border-red-500 text-red-500 rounded shadow px-6 py-1 ">Clear List</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Addtocart;
