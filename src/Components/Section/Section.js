import React, { useEffect } from "react";

import { setUniqueList } from "../Redux/webSlice";
import { fetchProduct } from "../ApiCall/ProductSlice";
import { useDispatch, useSelector } from "react-redux";
import Content from "./Content";
import { Link } from "react-router-dom";

const Section = () => {
  const product = useSelector((state) => {
    return state.productSlice;
  });
  const state = useSelector((state) => {
    return state.webReducer;
  });
  const dispatch = useDispatch();
  

  return (
    <>
      <div>
        {product.loading && (
          <button class=" my-12  p-8  text-white">
            <svg
              class="animate-spin h-5 w-5 mr-3 ... bg-white"
              viewBox="5 0 24 24"
            >
              ...
            </svg>
            Loading...
          </button>
        )}
        {!product.loading && product.error ? (
          <div class="text-center mt-12 text-white">
            Error : {product.error}
          </div>
        ) : null}
        {!product.loading && product.product.length ? (
          <div>
            {state.uniqueList.map((elem, index) => {
              return (
                <section key={index} class="text-white bg-black">
                  <h1 id={elem} class="capitalize font-bold ml-6">
                    {elem}
                  </h1>
                  {/* <Link to="/Content"> */}
                  <Content para={elem} />
                  {/* </Link> */}
                </section>
              );
            })}
          </div>
        ) : null}
      </div>
    </>
  );
};

export default Section;
