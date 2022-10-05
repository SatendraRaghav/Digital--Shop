import React from "react";
import { useSelector, useDispatch } from "react-redux/es/exports";
import { setCartList, isPaymentRender, cartCount, setProduct } from "../Redux/webSlice";

const ProductDetails = () => {
  const state = useSelector((state) => {
    return state.webReducer;
  });

  const dispatch = useDispatch();

  // dispatch(isProductRender(false));
  const buyClickHandler = () => {
    dispatch(setCartList([...state.cartList,...state.product]));
    dispatch(cartCount(1));
    // dispatch(isPaymentRender(true));
  };
  const cartClickHandler = () => {
    dispatch(cartCount(1));
    const data = state.product[0];
    const id1= Math.random()
   const tempData= {...data,id:id1};
    dispatch(setCartList([...state.cartList,tempData]));
  };

  return (
    <div class="bg-black h-[100vh] text-white">
      {/* {state.cartBoolean
        ? state.cartList.map((elem, index) => {
            return (
              <div key={index}>
                <div class=" w-[100%] h-[20vh] md:h-[35vh] lg:h-[45vh] mt-12  mr-auto ml-auto ">
                  <img
                    class="h-[100%] rounded-lg shadow-2xl mx-auto border-2 border-blue-900 "
                    src={elem.image}
                  ></img>
                </div>
                <h1 class="text-center text-lg font-extrabold">{elem.title}</h1>
                <div class="bg-red-300 mt-6 py-2 pl-4">
                  Price-&#8377;{elem.price}
                </div>
                <div class=" mt-8 font-extralight">{elem.description}</div>
                <div class=" flex justify-around  border-[0.1px] border-white fixed bottom-0 w-[100%] bg-gray-900">
                  <button onClick={buyClickHandler} class="btn">
                    Buy Now
                  </button>
                </div>

                <div class="p-3 my-12 "></div>
              </div>
            );
          })*/}

        {state.product.map((elem) => { 
            return (
              <div>
                <div class=" w-[50%] h-[20vh] md:h-[35vh] lg:h-[45vh] mt-12  mr-auto ml-auto ">
                  <img
                    class="h-[100%] rounded-lg shadow-2xl mx-auto border-2 border-blue-900 "
                    src={elem.image}
                  ></img>
                </div>
                <h1 class="text-center text-lg font-extrabold">{elem.title}</h1>
                <div class="bg-red-300 mt-6 py-2 pl-4">
                  Price-&#8377;{elem.price}
                </div>
                <div class=" mt-9 font-extralight">{elem.description}</div>
                <div class=" flex justify-around border-t-2 border-gray-500 fixed bottom-0 w-[100%] bg-gray-900">
                  <button onClick={buyClickHandler} class="btn">
                    Buy Now
                  </button>
                  <button
                    onClick={cartClickHandler}
                    class=" my-1 py-1 border-2 hover:bg-sky-400 border-white flex-none rounded-md w-2/6 bg-black"
                  >
                    Add to cart
                  </button>
                </div>

                <div class="p-3 my-12 "></div>
              </div>
            );
          })}
    </div>
  );
};

export default ProductDetails;
