import { createContext, useContext, useEffect, useState } from "react";
import supabase from "../supabase/supabase.config";
import { loginValidations, registerValidation } from "../lib/validations";
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
            // another api call to save user in database
            const registeredEmail = data.session.user.user_metadata.email;
            const registeredUsername = data.session.user.user_metadata.username;
            const registeredId = data.session.user.id;

            let { data: userCreateData, error: userCreatedError } =
                await supabase
                    .from("users")
                    .insert({
                        username: registeredUsername,
                        email: registeredEmail,
                        id: registeredId,
                    })
                    .select();

            console.log(userCreateData, userCreatedError);
            toast.success("User registered successfully");

            return data;
        } catch (error) {
            toast.error(
                error.message || error?.errors[0] || "Something went wrong"
            );

            return false;
        }
    };

    const signInUserWithEmailAndPassword = async ({ email, password }) => {
        try {
            let result = await loginValidations.validate(
                { email, password },
                {
                    abortEarly: false,
                }
            );

            let { data, error } = await supabase.auth.signInWithPassword({
                email: result.email,
                password: result.password,
            });

            if (error) {
                throw new Error(error.message);
            }

            toast.success("User Logged in successfully");

            return data;
        } catch (error) {
            toast.error(
                error.message || error?.errors[0] || "Something went wrong"
            );

            return false;
        }
    };

    const logoutUser = async () => {
        try {
            let { error } = await supabase.auth.signOut();

            if (error) {
                throw new Error(error.message);
            }

            toast.success("Logged out successfully");
            return true;
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

    return (
        <SupabaseContext.Provider
            value={{
                signUpUserWithEmailAndPassword,
                signInUserWithEmailAndPassword,
                user,
                logoutUser,
            }}
        >
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
