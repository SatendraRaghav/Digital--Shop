import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setUniqueList } from "../Redux/webSlice";

const Navbar = () => {
  const state = useSelector((state) => {
    return state.webReducer;
  });
  const dispatch = useDispatch();

  const navClickHandler=(x)=>{
    const filterItem = state.uniqueList.filter((elem)=>{
         return elem ==x;
  })
  console.log(filterItem)
  dispatch(setUniqueList(filterItem))
  }
  return (
    <div class=" text-[2.5vw] sm:text-[2vw] lg:text-[1vw] flex-nowrap py-2 border-b-4 border-gray-500">
      <ul class="flex  justify-around w-full   overflow-y-auto bg-gray-800 text-white ">
        <li class=" text-center w-1/5 lg:w-[12%] xl:w-[10%] mr-6 py-2 pl-2">
          <button id={1} onClick={()=>navClickHandler("men's clothing")}><img src="../images/manCloth.jpg" class="p-0 rounded-full h-14 sm:h-24  w-[100%]" />
         <div class="relative bottom-0"> Men's Clothing</div>
         </button>
        </li>
        
        <li class=" text-center w-1/5 lg:w-[12%] xl:w-[10%] mr-7 py-2 pl-2">
        <button id={2} onClick={()=>navClickHandler("jewelery")}>
          <img src="../images/jewelery.jpg" class="rounded-full sm:h-24 p-0 h-14 w-[100%]" />
          Jewelery
          </button>
        </li>
        <li class="float-none text-center w-1/5 lg:w-[12%] xl:w-[10%] mr-7 py-2 pl-2">
        <button id={3} onClick={()=>navClickHandler("electronics")}>
          <img src="../images/electronic.jpg" class=" rounded-full sm:h-24 p-0 h-14 w-[100%]" />
          Electronic
          </button>
        </li>
        <li class="float-none text-center w-1/5 lg:w-[12%] xl:w-[10%] mr-7 py-2 pl-2">
        <button id={4} onClick={()=>navClickHandler("women's clothing")}>
          <img src="../images/womanClothes.jpg" class=" rounded-full sm:h-24 p-0 h-14 w-[100%]" />
          Woman's Clothing
          </button>
        </li>
        
      </ul>
    </div>
  );
};

export default Navbar;
