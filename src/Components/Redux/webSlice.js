import { createSlice } from "@reduxjs/toolkit";

const initialValue = {
    list:[],
    demoList:[],
    product:[],
    productBoolean:false,
    filterPara:"",
    payment:false,
    cart:0,
    cartList:[],
    cartBoolean:false,
    loginBoolean:false,
    formComplete:false,
    userData:[],
    nav:false,
    payFinal:false,
    uniqueList:[],
    navList:[],
    navBoolean:false,
}
const webSlice = createSlice({
 name:"webReducer",
 initialState:initialValue,
 reducers:{
    setList:(state,action)=>{state.list=[...action.payload]},
    setUniqueList:(state,action)=>{state.uniqueList=[...action.payload]},
    setDemoList:(state,action)=>{state.demoList=[...action.payload]},
    setProduct:(state,action)=>{state.product=[action.payload]},
    isProductRender:(state,action)=>{state.productBoolean=action.payload},
    setFilterPara:(state,action)=>{state.filterPara=action.payload},
    isPaymentRender:(state,action)=>{state.payment=action.payload},    
    isCartRender:(state,action)=>{state.cartBoolean=action.payload},
    cartCount:(state,action)=>{state.cart += action.payload},
  setCartList:(state,action)=>{state.cartList = action.payload},
  setLogin:(state,action)=>{state.loginBoolean = action.payload},
  setLogComplete:(state,action)=>{state.formComplete = action.payload},
  setUserData:(state,action)=>{state.userData=action.payload},
  setNav:(state,action)=>{state.nav=action.payload},
  setPayFinal:(state,action)=>{state.payFinal = action.payload},
  setNavList:(state,action)=>{state.uniqueList=action.payload},
  isNavRender:(state,action)=>{state.navBoolean=action.payload},
  },
})


export default webSlice.reducer;
export const{setList,setDemoList,setLogin,setLogComplete,setProduct,isProductRender,setFilterPara,isPaymentRender,
isCartRender,cartCount,setCartList,setUserData,setNav,setPayFinal,setUniqueList,setNavList,isNavRender}= webSlice.actions;