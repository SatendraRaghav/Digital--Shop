import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { cartCount, setCartList,  setPayFinal} from "../Redux/webSlice";

const Bill = () => {
  const state = useSelector((state) => {
    return state.webReducer;
  });
  const [list, setList] = useState(state.cartList);
  const dispatch = useDispatch();

  const price = list.reduce((total, elem) => {
    return total + elem.price;
  }, 0);
  const removeHandler = (x) => {
    const newCart = list.filter((elem) => {
      return x.id != elem.id;
    });
    setList(newCart);
    dispatch(cartCount(-1));
    if (state.cart === 1) {
      dispatch(setCartList([]));
    }
  };
  const payHandler = ()=>{
    if(state.formComplete){
        dispatch(setPayFinal(true))
    }else{
       alert('Please complete Login Form')
    }
  }
  return (
    <div class="bg-black h-max text-white mb-4">
      {state.cart > 0 ? (
        <>
          <div>
            {list.map((elem, index) => {
              return (
                <div
                  key={index}
                  class=" w-[90%] md:w-[75%] relative lg:w-[60%] ml-auto mr-auto mb-8 flex border-gray-600 border-b-2 justify-start"
                >
                  <div class=" h-[25vh] ">
                    <img
                      class="h-[100%] rounded-lg shadow-2xl  border-2 border-blue-900 "
                      src={elem.image}
                      alt="PRODUCT-IMAGE"
                    ></img>
                  </div>
                  <div class=" flex-none w-7/12">
                    <h1 class="text-center text-lg font-extrabold pt-4">
                      {elem.title}
                    </h1>
                    <div class=" mt-6 py-2 pl-4 overflow-hidden h-14">
                      {elem.description}
                    </div>

                    <div class=" mt-6 py-2 pl-4">Price-&#8377;{elem.price}</div>
                  </div>

                  <button
                    onClick={() => removeHandler(elem)}
                    class="absolute bottom-2 bg-gray-600 hover:bg-gray-800 hover:border-white hover:border-[0.1px] active:bg-green-700 rounded-md px-2 py-1 right-4 mr-5"
                  >
                    Remove
                  </button>
                </div>
              );
            })}
          </div>
          <div class="">
          <h1 class="text-white bg-green-700 text-center font-bold ">
            Order Summary
          </h1>
          <div class="flex text-white justify-between">
            <div class="flex-none w-5/12 ml-4">
              <div>Orginal Price</div>
              <div class="">Delivery</div>
              <div class="">Total</div>
            </div>
            <div class="flex-none w-5/12 mr-4 mb-10 text-right">
              <div class="">&#8377;{Math.ceil(price)}</div>
              <div class="">{price > 65 ? "Free" : <span>&#8377;15</span>}</div>
              <div class="">
                &#8377;{price > 65 ? Math.ceil(price) : Math.ceil(price + 15)}
              </div>
            </div>
            <button class="bg-sky-900 hover:bg-sky-700 active:bg-green-900 rounded-xl w-full fixed bottom-0  py-2"
            onClick={payHandler}>
              Pay Now
            </button>
          </div>
          </div>
        </>
      ) : (
        <div class="text-center h-[100vh] pt-8">
          <h1 class="text-5xl">No item added in cart..!!</h1>
          <br />
          <div>
            <img class = "w-1/4 mr-auto ml-auto" src = "../images/emptyCart.jpg" alt="cart-img" />
          </div>
          <p>Please add items to cart.</p>
        </div>
      )}
    </div>
  );
};

export default Bill;
