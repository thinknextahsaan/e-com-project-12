import React from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { Toaster } from "react-hot-toast";
import axios from "axios";
import Navbar from "./components/Navbar";

axios.defaults.baseURL = import.meta.env.VITE_BACKEND_API_URL || "";

const App = () => {
    return (
        <div>
            <Toaster position="top-right" />
            <Navbar />
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
            </Routes>
        </div>
    );
};

export default App;

// reactr-router-dom
