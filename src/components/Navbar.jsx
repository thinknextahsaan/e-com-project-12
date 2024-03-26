import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { UserContext } from "../context/UserContext";
import logo from "../assets/logo.png"

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
        <header className="sticky top-0  bg-white shadow-lg z-50">
            <div className="flex items-center justify-between px-10 py-5">
                <div className="flex flex-shrink-0 items-center gap-10">
                    <img
                        className="h-14 w-auto"
                        src={logo}
                        alt="Your Company"
                    />
                    <div className="flex space-x-4">
                        {links.map((item) => (
                            <Link
                                className="px-2 py-1 font-semibold text-slate-700"
                                key={item.text}
                                to={item.path}
                            >
                                {item.text}
                            </Link>
                        ))}
                    </div>
                </div>

                <div className="flex gap-3">
                    <Link to={"/cart"}>
                        <button className=" px-2 py-1 font-semibold text-slate-700 flex gap-2 items-center">
                           <FaShoppingCart/> Cart
                        </button>
                    </Link>
                    {user ? (
                        <button
                            className=" px-2 py-1 font-semibold text-slate-700"
                            onClick={logoutUser}
                        >
                            Logout
                        </button>
                    ) : (
                        <div className="flex gap-5">
                            <Link to={"/login"}>
                                <button className="px-2 py-1 font-semibold text-white bg-[#2A254B]">
                                    Login
                                </button>
                            </Link>
                            <Link to={"/register"}>
                                <button className="px-2 py-1 font-semibold text-white bg-[#2A254B]">
                                    Register
                                </button>
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
};

export default Navbar;
