import { createContext, useContext, useEffect, useState } from "react";
import supabase from "../supabase/supabase.config";
import { registerValidation } from "../lib/validations";
import toast from "react-hot-toast";

const SupabaseContext = createContext();

const SupbaseAuthProvider = ({ children }) => {
    const [user, setUser] = useState();

    const signUpUserWithEmailAndPassword = async ({
        email,
        password,
        username,
    }) => {
        try {
            let result = await registerValidation.validate(
                { email, password, username },
                {
                    abortEarly: false,
                }
            );

            let { data, error } = await supabase.auth.signUp({
                email: result.email,
                password: result.password,
                options: {
                    data: {
                        username: result.username,
                    },
                },
            });

            if (error) {
                throw new Error(error.message);
            }

            toast.success("User registered successfully");

            return data;
        } catch (error) {
            toast.error(
                error.message || error?.errors[0] || "Something went wrong"
            );

            return false;
        }
    };

    useEffect(() => {
        let { data } = supabase.auth.onAuthStateChange((event, session) => {
            if (event === "SIGNED_IN") {
                setUser(session);
            } else if (event === "INITIAL_SESSION") {
                setUser(session);
            } else if (event === "SIGNED_OUT") {
                setUser(null);
            }
        });

        return () => {
            data.subscription.unsubscribe();
        };
    }, []);

    console.log(user);

    return (
        <SupabaseContext.Provider value={{ signUpUserWithEmailAndPassword }}>
            {children}
        </SupabaseContext.Provider>
    );
};

export default SupbaseAuthProvider;

// Custom hook to use values from Supbase Context
export const useSupabaseAuth = () => {
    let context = useContext(SupabaseContext);

    if (!context) {
        throw new Error(
            "useSupabaseAuth hook must be called inside a SupabaseAuthProvider"
        );
    }

    return context;
};
