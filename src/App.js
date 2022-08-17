import React from "react";
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Offer from "./Components/Offer";
import ProductDetails from "./Components/ProductDetails";
import { useSelector } from "react-redux";
import Section from "./Components/Section/Section";
import Bill from "./Components/PaymentPage/Bill";
import Login from "./Components/Login/Login";


const App = () => {
  const state = useSelector((state) => {
    return state.webReducer;
  });
 console.log(state.productBoolean)
  return (
    <>
      <div class="bg-black">
        {
          state.loginBoolean?(<Login />):(
            <>
            <Header />
        
            {state.payment?(<Bill />):
            (state.productBoolean?(<ProductDetails />):(<><Offer />
            <Navbar /><Section /></>))}
            </>
          )
        }
       
      </div>
    </>
  );
};

export default App;
