import React from "react";
import { Route, Routes } from "react-router-dom";
import Discount from "../components/features/Discount";
import Navbar from "../components/features/Navbar";
import Home from "../components/Home";
import Footer from "../components/features/Footer";
import AdminPanel from "../components/features/admin/AdminPanel";
import About from "../components/test/About";
import Contact from "../components/Contact";

const MyRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/offers" element={<Discount />}></Route>
        <Route path="/admin" element={<AdminPanel />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
    </div>
  );
};

export default MyRoutes;
