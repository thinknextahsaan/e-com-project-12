import { createContext, useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import supabase from "../supabase/supabase.config";

export const SupabaseDatabaseContext = createContext();

export default function SupabaseDatabaseProvider({ children }) {
    const [products, setProducts] = useState(null);

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
        <SupabaseDatabaseContext.Provider value={{ products, getProductById }}>
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
