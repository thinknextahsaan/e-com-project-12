import React from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { Toaster } from "react-hot-toast";
import axios from "axios";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Products from "./pages/Products";
import Home from "./pages/Home";
import About from "./pages/About";
import Shop from "./pages/Shop";
import Cart from "./pages/Cart";
import NotFound from "./pages/NotFound";

axios.defaults.baseURL = import.meta.env.VITE_BACKEND_API_URL || "";

const App = () => {
    return (
        <>
        
            <Toaster position="top-right" />
            <Navbar/>
            <Routes>
                <Route index element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />         
                <Route path="/about" element={<About />} />
                <Route path="/shop" element={<Shop />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="*" element={<NotFound />} />
             </Routes>
             <Footer/>
        
         </>
    );
};

export default App;