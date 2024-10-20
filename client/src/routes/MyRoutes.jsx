import React from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import Contact from "../components/Contact";
import Home from "../components/Home";
import Discount from "../components/features/Discount";
import AdminPanel from "../components/features/admin/AdminPanel";
import About from "../components/About";
import Collection from "../components/features/Collection";
import Hero from "../components/features/Hero";
import Footer from "../components/features/Footer";
import BestSelling from "../components/features/BestSelling";
import Blog from "../components/features/Blog";
import Product from "../components/Product";
import UpdateProduct from "../components/features/admin/UpdateProduct";
import Products from "../components/features/admin/Products";
import AddProducts from "../components/features/admin/AddProducts";

const HomePage = () => {
  <div>
    <Collection />
    <BestSelling />
    <Blog />
  </div>;
};

const MyRoutes = () => {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <Hero />
              <Outlet />
              <Footer />
            </div>
          }
        >
          <Route index element={<Home />}></Route>
          <Route path="offers" element={<Discount />}></Route>

          <Route path="about" element={<About />}></Route>
          <Route path="contact" element={<Contact />}></Route>
          <Route path="product" element={<Product />}></Route>
        </Route>
        <Route path="/admin" element={<AdminPanel />}></Route>
        <Route path="admin/update/:id" element={<UpdateProduct />}></Route>
        <Route path="admin/product" element={<Products />}></Route>
        <Route path="admin/add-product" element={<AddProducts />}></Route>
      </Routes>
    </div>
  );
};

export default MyRoutes;
