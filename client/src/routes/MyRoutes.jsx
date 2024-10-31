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
import { Outlet, Route, Routes, useNavigate } from "react-router-dom";
import MobileNavbar from "../components/features/admin/MobileNavbar";
import Password from "../components/features/admin/Password";

const AdminLayout = ({ children }) => {
  const token = localStorage.getItem("token");
  return token ? children : <LogIn />;
};

const MyRoutes = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/admin/dashboard");
    }
  }, []);

  return (
    <div>
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

        <Route path="/log-in" element={<LogIn />} />
        <Route path="/offers" element={<Discount />} />
        <Route path="/search" element={<Search />} />
        <Route path="/test" element={<MobileNavbar />} />

        {/* Admin panel routes */}
        <Route
          path="/admin"
          element={
            <AdminLayout>
              <Outlet />
            </AdminLayout>
          }
        >
          <Route path="dashboard" element={<AdminPanel />} />
          <Route path="password" element={<Password />} />
          <Route path="update/:id" element={<UpdateProduct />} />
          <Route path="product" element={<Products />} />
          <Route path="add-product" element={<AddProducts />} />
        </Route>
      </Routes>
    </div>
  );
};

export default MyRoutes;
