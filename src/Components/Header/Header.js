import React from "react";
import { useSelector, useDispatch } from "react-redux/es/exports";
import {Link} from 'react-router-dom';


const Header = () => {
  const myState = useSelector((state) => {
    return state.webReducer;
  });

  
 

  return (
    <>
      <div class="pt-4 border-b-2 border-gray-500 w-full bg-black">
        <header class="w-[100%] text-white text-3xl">
          <Link to="Side">
          <button class="ml-1 mr-2">
            <img src="../images/nav.jpg" class="h-6 mb-0 pb-0" />
          </button>
          </Link>
          <span class="mb-3  ml-3 text-xl sm:text-2xl">
            Raghav Store
          </span>
          <div class=" float-right sm:mx-3 rounded-xl bg-white">
            <Link to="Cart">
            <button
              class="float-right sm:mx-3 active:bg-green-500 hover:bg-sky-500"
            >
              <img src="../images/cart.webp" class="h-6 mb-0 pb-0" />
            </button>

            <span class="text-sm p-0 mr-0 ml-4 rounded-lg  float-right text-green-900">
              {myState.cart}
            </span>
            </Link>
          </div>
          <Link to="Login">
          <button
            class=" float-right mr-2 ml-0 pl-0"
          >
            <img src="../images/loginForm.jpg" class="h-6 mb-0 pb-0" />
          </button>
          </Link>
        </header>
        <div class="text-center">
          <input
            type="text"
            class=" my-2 rounded-md w-[98%]  focus:bg-slate-500 pl-1 focus:border-none focus:text-white placeholder:text-gray-600"
            placeholder=" What are you looking for ?"
          ></input>
        </div>
      </div>
    </>
  );
};

export default Header;
