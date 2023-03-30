import React from "react";
import { Link } from "react-router-dom";
import { useContextCustom } from "../context/stateContext";

const Product = (props) => {
  const {
    id,
    title,
    thumbnail,
    description,
    price,
    images,
    discountPercentage,
    brand,
  } = props;
  const { dispatch } = useContextCustom();
  /*
  const {
    state: { detail },
  } = useContextCustom();
  
  */
  

  return (
    <div className="flex flex-col">
      <div className="card card-compact w-80 bg-base-100 shadow-xl p-3 mb-3">
        <figure>
          <img
            src={thumbnail}
            alt="Phone"
            className="w-[250px] md:h-[250px] object-contain"
            loading="lazy"
          />
        </figure>
        <div className="card-body box-border">
          <h2 className="card-title text-xl font-semibold ">{title}</h2>
          <p className=" overflow-hidden h-[80px] p-2 border-2 border-[#f97316]">
            {description}
          </p>
          <p className=" text-2xl font-semibold">${price}</p>
          <div className="card-actions justify-center">
            <button
              onClick={() => dispatch({ type: "ADD_TO_CART", payLoad: props })}
              className="btn btn-warning text-white font-bold hover:text-slate-900 bg-[#f97316]"
            >
              Add to Cart
            </button>
            <Link to={"/detail"}>
              <button
                onClick={() =>
                  dispatch({ type: "ADD_TO_DETAIL", payLoad: props })
                }
                className="btn btn-warning text-white font-bold hover:text-slate-900 bg-[#f97316]"
              >
                Detail
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
