import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import UserContextProvider from "./context/UserContext.jsx";
import SupbaseAuthProvider from "./context/SupabaseAuthContext.jsx";
import SupabaseDatabaseProvider from "./context/SupabaseDatabaseProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <SupbaseAuthProvider>
            <SupabaseDatabaseProvider>
                <UserContextProvider>
                    <BrowserRouter>
                        <App />
                    </BrowserRouter>
                </UserContextProvider>
            </SupabaseDatabaseProvider>
        </SupbaseAuthProvider>
    </React.StrictMode>
);
