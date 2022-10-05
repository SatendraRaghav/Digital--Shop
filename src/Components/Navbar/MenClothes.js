import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {  setProduct, isProductRender } from "../Redux/webSlice";

const MenClothes = () => {

    const product = useSelector((state) => {
      return state.productSlice;
    });
    const dispatch = useDispatch();
  
    
      const demoMan = product.product.filter((elem) => {
        return (elem.category === "men's clothing");
      });
    return (
      <div class="grid grid-cols-1  md:grid-cols-2  text-white ">
        {demoMan.map((elem) => {
          return (
            <div
            key={elem.id}
            class=" text-center w-[80%] px-2 py-2  rounded-md ml-auto mr-auto my-2 bg-slate-800 "
          >
            <button
              class="active:bg-gray-700 "
              onClick={() => {
                dispatch(isProductRender(true));
                dispatch(setProduct(elem));
              }}
            >
              <img
                class=" w-11/12 max-w-[180px] rounded-full mr-auto ml-auto mb-2"
                src={elem.image}
                alt="product-image"
              />

              <p class="w-full mb-1 font-mono text-sm">
                {elem.title}
              </p>
              <p>&#8377;{elem.price}</p>

              <p>Rating-{elem.rating.rate}</p>
            </button>
          </div>
          );
        })}
      </div>
    );
}

export default MenClothes