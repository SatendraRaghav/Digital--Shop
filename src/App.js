import React,{useEffect} from "react";
import Header from "./Components/Header/Header";
import TopNav from "./Components/Navbar/TopNav";
import { setUniqueList } from "./Components/Redux/webSlice";
import { fetchProduct } from "./Components/ApiCall/ProductSlice";
import { useDispatch, useSelector } from "react-redux";
import Offer from "./Components/Offer";
import ProductDetails from "./Components/Product/ProductDetails";
import Section from "./Components/Section/Section";
import Bill from "./Components/PaymentPage/Bill";
import Login from "./Components/Login/Login";
import SideNav from "./Components/Navbar/SideNav";
import Payment from "./Components/PaymentPage/Payment";

const App = () => {
  const state = useSelector((state) => {
    return state.webReducer;
  });
  const product = useSelector((state) => {
    return state.productSlice;
  });
const dispatch = useDispatch();
console.log("App COmpo")
  useEffect(() => {
    dispatch(fetchProduct());
  }, []);
  useEffect(() => {
    dispatch(
      setUniqueList([
        ...new Set(
          product.product.map((elem) => {
            return elem.category;
          })
        ),
      ])
    );
  }, [product.product]);


  return (
    <>
      <div class="bg-black">
        <Header />

        {state.payFinal ? (
          <Payment />
        ) : state.nav ? (
          <SideNav />
        ) : state.loginBoolean ? (
          <Login />
        ) : (
          <>
            {state.payment ? (
              <Bill />
            ) : state.productBoolean ? (
              <ProductDetails />
            ) : (
              <>
                <Offer />
                <TopNav />
              </>
            )}
          </>
        )}
      </div>
    </>
  );
};

export default App;
