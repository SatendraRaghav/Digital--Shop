import React from "react";
import {Link} from 'react-router-dom';

const Navbar = () => {
 

  return (
 <nav class="text-white">
  
  <div class=" text-[2.5vw] sm:text-[2vw] lg:text-[1vw] flex-nowrap py-2 border-b-4 border-gray-500">
      <ul class="flex  justify-around w-full   overflow-y-auto bg-gray-800 text-white ">
        <li class=" text-center w-1/5 lg:w-[12%] xl:w-[10%] mr-6 py-2 pl-2">
        <Link to= "/men'clothes">
            <img
              src="../images/manCloth.jpg"
              class="p-0 rounded-full h-14 sm:h-24  w-[100%]"
            />
            <div class="relative bottom-0"> Men's Clothing</div>
            </Link>
        </li>

        <li class=" text-center w-1/5 lg:w-[12%] xl:w-[10%] mr-7 py-2 pl-2">
        <Link to= '/jewerery'>
            <img
              src="../images/jewelery.jpg"
              class="rounded-full sm:h-24 p-0 h-14 w-[100%]"
            />
            Jewelery
            </Link>
        </li>
        <li class="float-none text-center w-1/5 lg:w-[12%] xl:w-[10%] mr-7 py-2 pl-2">
        <Link to= '/Electronics'>
            <img
              src="../images/electronic.jpg"
              class=" rounded-full sm:h-24 p-0 h-14 w-[100%]"
            />
            Electronic
            </Link>
        </li>
        <li class="float-none text-center w-1/5 lg:w-[12%] xl:w-[10%] mr-7 py-2 pl-2">
        <Link to= "/women">
            <img
              src="../images/womanClothes.jpg"
              class=" rounded-full sm:h-24 p-0 h-14 w-[100%]"
            />
            Woman's Clothing
            </Link>
        </li>
      </ul>
      </div>
 </nav>

  );
};

export default Navbar;
