import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Products from "../pages/Products";   // ✅ Capital P
import Login from "../pages/Login";
import CreateProduct from "../admin/CreateProduct"
import Register from "../pages/Register"
import ProductDetails from "../admin/ProductDetails";
const Mainroutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/admin/create-product" element={<CreateProduct/>}></Route>
      <Route path="/product/:id" element={<ProductDetails/>}></Route>
    </Routes>
  );
};

export default Mainroutes;
