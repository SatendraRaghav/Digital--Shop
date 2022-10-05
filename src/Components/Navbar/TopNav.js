import React from 'react'
import MenClothes from './MenClothes'
import WomanClothes from './WomanClothes'
import Electronics from './Electronics'
import Jewerery from './Jewerery'
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Navbar from './Navbar'
import Section from '../Section/Section'
import Login from '../Login/Login'
import Bill from '../PaymentPage/Bill'
import Content from '../Section/Content'
import ProductDetails from '../Product/ProductDetails'

const TopNav 
 = () => {
  return (
    <>
    <Navbar />
    <Routes>
    <Route path="/" element={<Section />}></Route>
    <Route index element={<Section />}></Route>
    <Route path="/Login" element={<Login />}></Route>
    <Route path="/Cart" element={<Bill />}></Route>
    <Route path="/Product" element={<ProductDetails />}></Route>
      <Route path="/men'clothes" element={<MenClothes />}></Route>
      <Route path="/jewerery" element={<Jewerery />}></Route>
      <Route
        path="women"
        element={<WomanClothes />}
      ></Route>
      <Route
        path="/Electronics"
        element={<Electronics />}
      ></Route>
      <Route
        path="/section"
        element={<Section />}
      ></Route>
    </Routes>
  </>
  )
}

export default TopNav
