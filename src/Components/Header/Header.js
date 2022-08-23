import React from "react";
import { useSelector, useDispatch } from "react-redux/es/exports";
import {
  isCartRender,
  isPaymentRender,
  isProductRender,
  setLogin,
  setNav,
  setPayFinal
} from "../Redux/webSlice";

const Header = () => {
  const myState = useSelector((state) => {
    return state.webReducer;
  });
  const dispatch = useDispatch();
  const cartHandler = () => {
    dispatch(isPaymentRender(true));
  };
  const backHandler = () => {
    if (myState.payment) {
      dispatch(isPaymentRender(false));
      return;
    } else if (myState.cartBoolean) {
      dispatch(isCartRender(false));
      return;
    }else if (myState.loginBoolean) {
      dispatch(setLogin(false))
      return;
    }else if (myState.nav) {
      dispatch(setNav(false))
      return;
    }
     else if (myState.productBoolean) {
      dispatch(isProductRender(false));
      return;
    }
    else if (myState.payFinal) {
      dispatch(setPayFinal(false));
      return;
    }
    return;
  };
  const navHandler = ()=>{
    dispatch(setNav(true))
  }
  
  return (
    <>
      <div class="pt-4 border-b-2 border-gray-500 w-full bg-black">
        <header class="w-[100%] text-white text-2xl">
          <button class="ml-1 mr-2" onClick={navHandler}>
            <img src="../images/nav.jpg" class="h-6 mb-0 pb-0" />
          </button>
          <span class="mb-2 pb-2 ml-3">Raghav Store</span>
          <div class=" float-right mx-3 rounded-xl bg-white">
            <button
              onClick={cartHandler}
              class="float-right mx-3 active:bg-green-500 hover:bg-sky-500"
            >
              <img src="../images/cart.webp" class="h-6 mb-0 pb-0" />
            </button>

            <span class="text-sm p-0 mr-0 ml-4 rounded-lg  float-right text-green-900">
              {myState.cart}
            </span>
          </div>
          <button onClick={()=>dispatch(setLogin(true))} class=" float-right  ml-0 pl-0">
            <img src="../images/loginForm.jpg" class="h-6 mb-0 pb-0" />
          </button>
        </header>
        <div class="text-center">
          <input
            type="text"
            class=" my-2 rounded-md w-[98%]  focus:bg-slate-500 pl-1 focus:border-none focus:text-white placeholder:text-gray-600"
            placeholder=" What are you looking for ?"
          ></input>
        </div>
      </div>

     
       {(myState.productBoolean||myState.cartBoolean||myState.payment||myState.loginBoolean||myState.nav||myState.payFinal)?( <button
        onClick={backHandler}
        class="text-4xl text-white w-[100vw] bg-gray-800 hover:text-green-500 text-left sticky top-0"
      >&larr; </button>):""}
     
    </>
  );
};

export default Header;
