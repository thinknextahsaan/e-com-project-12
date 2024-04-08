import React, { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { Toaster } from "react-hot-toast";
import axios from "axios";
import Navbar from "./components/Navbar";
import Shop from "./pages/Shop";
import ProductDetail from "./pages/ProductDetail";
import Footer from "./components/Footer";
import Cart from "./pages/Cart";

axios.defaults.baseURL = import.meta.env.VITE_BACKEND_API_URL || "";

const App = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
        });
    }, [pathname]);

    return (
        <div>
            <Toaster position="top-right" />
            <Navbar />
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/shop" element={<Shop />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/product/:id" element={<ProductDetail />} />

                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />

                <Route path="/*" element={<div>Not Found</div>} />
            </Routes>
            <Footer />
        </div>
    );
};

export default App;

// reactr-router-dom
