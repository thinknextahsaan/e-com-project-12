import { createContext, useContext, useEffect, useId, useState } from "react";
import toast from "react-hot-toast";
import supabase from "../supabase/supabase.config";
import axios from "axios";
import { useSupabaseAuth } from "./SupabaseAuthContext";

export const SupabaseDatabaseContext = createContext();

export default function SupabaseDatabaseProvider({ children }) {
    const { user } = useSupabaseAuth();
    const [products, setProducts] = useState(null);
    const [cart, setCart] = useState(null);

    useEffect(() => {
        async function getProducts() {
            try {
                let { data, error } = await supabase.from("products").select();

                if (error) {
                    throw new Error(error.message);
                }

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
                let { data: fetchedCart, error: cartError } = await supabase
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
                        .eq("cart_id", fetchedCart[0].id);

                setCart({
                    ...fetchedCart[0],
                    items: [...cartItemsData],
                });
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
            value={{ products, getProductById, cart }}
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
