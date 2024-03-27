import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import logo from "../assets/logo.png";
import { IoMenu } from "react-icons/io5";
import { FaXmark } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";
import Button from "./Button";

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
    const [open, setOpen] = useState(false);

    return (
        <header className="sticky top-0  bg-white shadow-lg z-50">
            <div className="flex items-center justify-between px-10 py-4 relative">
                <div className="flex flex-shrink-0 items-center gap-10">
                    <img
                        className="h-12 w-auto"
                        src={logo}
                        alt="Your Company"
                    />
                    <div className="hidden md:flex space-x-4">
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
                <div className="flex md:hidden gap-3 items-center">
                    <Link to={"/cart"}>
                        <button className=" px-2 py-1 font-semibold text-slate-700 flex gap-2 items-center">
                            <FaShoppingCart /> Cart
                        </button>
                    </Link>
                    <IoMenu onClick={() => setOpen(true)} size={30} />
                </div>

                {/* Mobile Menu */}
                <div
                    className={`block md:hidden h-screen transition-all duration-300 absolute  top-0 bg-white w-[200px] shadow-lg border border-l-slate-200 ${
                        open ? "right-[0%]" : "right-[-100%]"
                    }`}
                >
                    <div className="h-full p-5">
                        <div className="flex justify-end">
                            <FaXmark
                                size={25}
                                onClick={() => setOpen(false)}
                                className="cursor-pointer"
                            />
                        </div>
                        <div className="flex flex-col items-end mt-5 gap-3">
                            {links.map((link) => {
                                return (
                                    <Link
                                        key={link.text}
                                        className="hover:bg-slate-200 w-full py-2 px-3 text-right"
                                        to={link.path}
                                    >
                                        {link.text}
                                    </Link>
                                );
                            })}
                            <Button className="bg-[#2A254B] text-white  py-[5px] px-3">
                                Login
                            </Button>
                            <Button className="bg-[#2A254B] text-white  py-[5px] px-3">
                                Register
                            </Button>
                        </div>
                    </div>
                </div>

                {/* Desktop Buttons for user auth */}
                <div className="gap-3 hidden md:flex">
                    <Link to={"/cart"}>
                        <button className=" px-2 py-1 font-semibold text-slate-700 flex gap-2 items-center">
                            <FaShoppingCart /> Cart
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
