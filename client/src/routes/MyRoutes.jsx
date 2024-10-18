import React from "react";
import { Route, Routes } from "react-router-dom";
import Contact from "../components/Contact";
import Home from "../components/Home";
import Discount from "../components/features/Discount";
import AdminPanel from "../components/features/admin/AdminPanel";
import About from "../components/About";

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
