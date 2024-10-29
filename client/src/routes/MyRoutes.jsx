import React, { useEffect } from "react";
import About from "../components/About";
import Contact from "../components/Contact";
import Home from "../components/Home";
import Product from "../components/Product";
import Discount from "../components/features/Discount";
import Footer from "../components/features/Footer";
import Hero from "../components/features/Hero";
import NavBar from "../components/features/Navbar";
import Search from "../components/features/Search";
import AddProducts from "../components/features/admin/AddProducts";
import AdminPanel from "../components/features/admin/AdminPanel";
import LogIn from "../components/features/admin/LogIn";
import Products from "../components/features/admin/Products";
import UpdateProduct from "../components/features/admin/UpdateProduct";
import { Route, Routes } from "react-router-dom";

const MyRoutes = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Check if the token exists in localStorage
    const token = localStorage.getItem("token");
    if (token) {
      // Navigate to the admin dashboard if token exists
      navigate("/admin/dashboard");
    }
  }, []);

  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <NavBar />
              <Hero />
              <Outlet />
              <Footer />
            </div>
          }
        >
          <Route index element={<Home />}></Route>
          <Route path="about" element={<About />}></Route>
          <Route path="contact" element={<Contact />}></Route>
          <Route path="product" element={<Product />}></Route>
        </Route>
        <Route path="/log-in" element={<LogIn />}></Route>
        <Route path="/offers" element={<Discount />}></Route>
        <Route path="/search" element={<Search />}></Route>

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
