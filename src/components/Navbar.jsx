import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../context/UserContext";

const links = [
    {
        text: "Home",
        path: "/",
    },
    {
        text: "Shop",
        path: "/shop",
    },
    {
        text: "About",
        path: "/about",
    },
];

const Navbar = () => {
    const { user, logoutUser } = useContext(UserContext);

    return (
        <header className="shadow-lg">
            <div className="w-full max-w-screen-lg mx-auto flex py-2 items-center justify-between">
                <h1>Logo</h1>

                <nav className="flex gap-2 ">
                    {links.map((link) => {
                        return <Link key={link.text} to={link.path}>{link.text}</Link>;
                    })}

                    {user ? (
                        <button onClick={logoutUser}>Logout</button>
                    ) : (
                        <button>Login</button>
                    )}
                </nav>
            </div>
        </header>
    );
};

export default Navbar;
