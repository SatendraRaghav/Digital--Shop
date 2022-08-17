import React, { useEffect } from "react";
import axios from "axios";
import { setList } from "../Redux/webSlice";
import { fetchProduct } from "../ApiCall/ProductSlice";
import { useDispatch, useSelector } from "react-redux";
import Content from "./Content";

const Section = () => {
  const product = useSelector((state) => {
    return state.productSlice;
  });
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProduct());
  }, []);

  const uniqueList = [
    ...new Set(
      product.product.map((elem) => {
        return elem.category;
      })
    ),
  ];

  return (
    <>
      <div>
        {product.loading && (
          <button class=" my-12  p-8  text-white">
            <svg class="animate-spin h-5 w-5 mr-3 ... bg-white" viewBox="5 0 24 24">
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
            {uniqueList.map((elem, index) => {
              return (
                <section key={index} class="text-white bg-black  ">
                  <h1 class="capitalize font-bold ml-6">{elem}</h1>
                  <Content para={elem} />
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
