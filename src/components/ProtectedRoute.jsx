import React from "react";
import { useSupabaseAuth } from "../context/SupabaseAuthContext";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
    const { user } = useSupabaseAuth();

    if (!user) {
        return <Navigate to={"/login"} />;
    } else {
        return children;
    }
};

export default ProtectedRoute;
