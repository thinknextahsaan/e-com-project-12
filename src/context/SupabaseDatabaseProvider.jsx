import { createContext, useContext, useEffect, useId, useState } from "react";
import toast from "react-hot-toast";
import supabase from "../supabase/supabase.config";
import axios from "axios";
import { useSupabaseAuth } from "./SupabaseAuthContext";

export const SupabaseDatabaseContext = createContext();

export default function SupabaseDatabaseProvider({ children }) {
    const { user } = useSupabaseAuth();
    const [products, setProducts] = useState(null);
    const [cartProducts, setCartProducts] = useState(null);

    useEffect(() => {
        async function getProducts() {
            try {
                let { data, error } = await supabase.from("products").select();

                if (error) {
                    throw new Error(error.message);
                }
                console.log(data);
                setProducts(data);
            } catch (error) {
                toast.error(error.message || "Something went wrong");
            }
        }

        getProducts();
    }, []);

    useEffect(() => {
        if (user) {
            const fetchCartItems = async (userid) => {
                let { data: cart, error: cartError } = await supabase
                    .from("cart")
                    .select()
                    .eq("user_id", userid);
                if (cartError) {
                    return;
                }

                let { data: cartItemsData, error: cartItemsError } =
                    await supabase
                        .from("cart_items")
                        .select()
                        .eq("cart_id", cart[0].id);

                setCartProducts(cartItemsData);
            };

            fetchCartItems(user.user.id);
        }
    }, [user]);

    const getProductById = async (id) => {
        try {
            let { data, error } = await supabase
                .from("products")
                .select()
                .eq("id", id)
                .single();

            if (error) {
                throw new Error(error.message);
            }

            return data;
        } catch (error) {
            console.log(
                "ERROR WHILE GETTING SINGLE PRODUCT FROM DATABASE",
                error
            );
        }
    };

    return (
        <SupabaseDatabaseContext.Provider
            value={{ products, getProductById, cartProducts }}
        >
            {children}
        </SupabaseDatabaseContext.Provider>
    );
}

export const useSupbaseProducts = () => {
    const context = useContext(SupabaseDatabaseContext);

    if (!context) {
        throw new Error(
            "useSupbaseProducts can only be used inside SupbaseDatabaseProvider."
        );
    }

    return context;
};
