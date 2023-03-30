import React, { useEffect, useState } from "react";
import { useContextCustom } from "../context/stateContext";

const Detail = () => {
  const {
    state: { detail },
  } = useContextCustom();

  const [detailProduct, setDetailProduct] = useState(detail[0]);
  const [photos, setPhotos] = useState([]);
  const [discountPrice, setDiscountPrice] = useState(0);

  //console.log(detailProduct.discountPercentage);
  //console.log(typeof detailProduct.discountPercentage);

  useEffect(() => {
    const photos = [
      { id: "item1", name: detailProduct.images[0] },
      { id: "item2", name: detailProduct.images[1] },
      { id: "item3", name: detailProduct.images[2] },
      { id: "item4", name: detailProduct.images[3] },
    ];
    setPhotos(photos);

      const dPercentage =parseFloat((detailProduct.discountPercentage)/100);
      const dPrice = detailProduct.price;
      const fPrice =parseFloat(dPrice-(dPrice * dPercentage));
      setDiscountPrice(fPrice.toFixed(2));
    
  }, [detailProduct]);

  return (
    <div className=" container mx-auto flex flex-wrap gap-10 justify-center items-center my-6">
      <div className="  flex flex-col justify-center items-center w-full lg:w-[50%] h-[400px] px-6">
        <div className="carousel">
          {photos?.map((photo) => {
            return (
              <div
                key={photo.id}
                id={photo.id}
                className={`carousel-item w-full`}
              >
                <img src={photo.name} className="object-contain mx-auto" />
              </div>
            );
          })}
        </div>
        <div className="flex justify-center w-full py-2 gap-2">
          {photos?.map((photo) => {
            return (
              <a
                href={`#${photo.id}`}
                className="btn btn-xs bg-[#f97316] text-white border-none"
                key={photo.id}
              >
                {`${photo.id.substring(4, 5)}`}
              </a>
            );
          })}
        </div>
      </div>
      <div className="  flex flex-col justify-center items-start w-full lg:w-[35%] mx-7 ">
        <p className="text-xl lg:text-2xl mb-3 font-semibold">{detailProduct.title}</p>
        <p className="badge bg-[#f97316] border-none h-[40px] text-xl lg:text-2xl mb-3">
          {detailProduct.brand}
        </p>
        <p className=" text-xl mb-3 border-4 border-[#f97316] p-3">{detailProduct.description}</p>
        <p className=" text-xl lg:text-2xl font-semibold mb-3">
          Discount - {detailProduct.discountPercentage}%
        </p>
        <p className=" text-xl lg:text-2xl font-semibold mb-3">
          Price -{" "}
          <span className="line-through text-xl font-semibold">${detailProduct.price}</span>{" "}
          <span className="ml-3 text-2xl font-semibold my-5">${discountPrice}</span> 
        </p>
      </div>

    </div>
  );
};

export default Detail;
