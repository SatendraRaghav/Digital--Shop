import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {  setProduct, isProductRender } from "../Redux/webSlice";


const Content = ({ para }) => {
  useEffect(()=>{
    filterData(para)
  },[])
 const [data, setData] = useState([]);
  const dispatch = useDispatch();
  const state = useSelector((state) => {
    return state.productSlice;
  });

  function filterData(x){
    console.log(x);
    const updateData = state.product.filter((elem) => {
      return elem.category === x;
    });
    console.log(updateData);
    setData([...updateData])
  };
   
  console.log("demoList");
  console.log(data);
  return (
    <div>
      <div  class="flex overflow-auto ">
        {data.map((elem) => {
          return (
            <div
              key={elem.id}
              class="flex-none text-center w-[40%] px-2 py-2  rounded-md my-2 mx-2 bg-slate-800  md:w-2/6 lg:w-1/5"
            >
              <button
              
              class="active:bg-gray-700 "
              onClick={()=>{
                dispatch(isProductRender(true))
                dispatch(setProduct(elem))
              }}
            >
             
              <img
                class="h-[20vh] w-11/12 max-w-[140px] rounded-full mr-auto ml-auto"
                src={elem.image}
                alt="product-image"
              />
              
              <p class="w-full mb-1 font-mono text-sm text-ellipsis break-all overflow-hidden">
                {elem.title}
              </p>
              <p>&#8377;{elem.price}</p>

              <p>Rating-{elem.rating.rate}</p>
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};


export default Content;
