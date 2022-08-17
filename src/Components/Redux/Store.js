import webSlice from "./webSlice";
import { configureStore } from "@reduxjs/toolkit";
import ProductSlice from "../ApiCall/ProductSlice";


export const store = configureStore({
    reducer:{
        webReducer:webSlice,
        productSlice:ProductSlice
    },
   
})