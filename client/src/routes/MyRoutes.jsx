import React, { useEffect } from "react";
import { Outlet, Route, Routes, useNavigate } from "react-router-dom";
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
import LogIn from "../components/features/admin/LogIn";

const MyRoutes = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Check if the token exists in localStorage
    const token = localStorage.getItem("token");
    if (token) {
      // Navigate to the admin dashboard if token exists
      navigate("/admin/dashboard");
    }
  }, []); // Only run when the component mounts or when navigate changes

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
        <Route path="/log-in" element={<LogIn />}></Route>
        <Route
          path="/admin/dashboard"
          element={localStorage.getItem("token") ? <AdminPanel /> : <LogIn />}
        ></Route>
        <Route
          path="admin/update/:id"
          element={
            localStorage.getItem("token") ? <UpdateProduct /> : <LogIn />
          }
        ></Route>
        <Route
          path="admin/product"
          element={localStorage.getItem("token") ? <Products /> : <LogIn />}
        ></Route>
        <Route
          path="admin/add-product"
          element={localStorage.getItem("token") ? <AddProducts /> : <LogIn />}
        ></Route>
      </Routes>
    </div>
  );
};

export default MyRoutes;
