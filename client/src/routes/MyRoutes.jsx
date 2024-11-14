import React, { useEffect, useState } from "react";
import { Outlet, Route, Routes, useNavigate } from "react-router-dom";
import NavBar from "../components/layouts/Navbar";
import Hero from "../components/container/Hero";
import Footer from "../components/layouts/Footer";
import Home from "../components/pages/Home";
import About from "../components/pages/About";
import Contact from "../components/pages/Contact";
import Product from "../components/pages/Product";
import Discount from "../components/pages/Discount";
import Search from "../components/pages/Search";
import AddProducts from "../components/features/admin/AddProducts";
import Products from "../components/features/admin/Products";
import UpdateProduct from "../components/features/admin/UpdateProduct";
import Password from "../components/features/admin/Password";
import AdminPanel from "../components/features/admin/AdminPanel";
import LogIn from "../components/features/admin/LogIn";
import MobileNavbar from "../components/features/admin/MobileNavbar";
import { hitApi } from "../services/HitApi";
import { toast, ToastContainer } from "react-toastify";
import AdminSearch from "../components/features/admin/AdminSearch";
import SpecificProduct from "../components/container/SpecificProduct";

const AdminLayout = ({ children, validToken }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!validToken) {
      navigate("/log-in"); // Redirect to login if token is invalid
    }
  }, [validToken, navigate]);

  return validToken ? children : null; // Render children only if token is valid
};

const MyRoutes = () => {
  const [validToken, setValidToken] = useState(false);
  const navigate = useNavigate();

  const tokenValidation = async () => {
    const token = localStorage.getItem("token");
    if (!token) return;

    try {
      await hitApi({
        method: "POST",
        url: "webuser/authorized",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setValidToken(true);
    } catch (error) {
      toast.error("Token validation failed. Please log in again.");
      setValidToken(false);
    }
  };

  useEffect(() => {
    tokenValidation();
  }, []); // Validate token only once on component mount

  return (
    <div>
      <ToastContainer />
      <Routes>
        {/* Main site routes */}
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
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="product" element={<Product />} />
        </Route>

        {/* Pass setValidToken to LogIn */}
        <Route
          path="/log-in"
          element={<LogIn setValidToken={setValidToken} />}
        />
        <Route path="/offers" element={<Discount />} />
        <Route path="/search" element={<Search />} />
        <Route path="/test" element={<MobileNavbar />} />
        <Route path="/product/:id" element={<SpecificProduct />} />

        {/* Admin panel routes */}
        <Route
          path="/admin"
          element={
            <AdminLayout validToken={validToken}>
              <Outlet />
            </AdminLayout>
          }
        >
          <Route path="dashboard" element={<AdminPanel />} />
          <Route path="password" element={<Password />} />
          <Route path="update/:id" element={<UpdateProduct />} />
          <Route path="product" element={<Products />} />
          <Route path="add-product" element={<AddProducts />} />
          <Route path="search" element={<AdminSearch />}></Route>
        </Route>
      </Routes>
    </div>
  );
};

export default MyRoutes;
