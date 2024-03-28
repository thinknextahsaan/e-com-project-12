import React from "react";
import Button from "./Button";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="bg-custom-blue p-20 pb-[30px] text-white">
            <div>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-6 gap-10">
                    <div className="col-span-1">
                        <h4 className="text-[18px] font-clash-regular mb-[15px]">
                            Menu
                        </h4>

                        <ul className="flex flex-col gap-[10px]">
                            <li className="text-[16px] font-satoshi-regular">
                                New Arrivals
                            </li>
                            <li className="text-[16px] font-satoshi-regular">
                                Best Sellers
                            </li>
                            <li className="text-[16px] font-satoshi-regular">
                                Recently Viewed
                            </li>
                            <li className="text-[16px] font-satoshi-regular">
                                Popular this week
                            </li>
                        </ul>
                    </div>
                    <div className="col-span-1">
                        <h4 className="text-[18px] font-clash-regular mb-[15px]">
                            Menu
                        </h4>

                        <ul className="flex flex-col gap-[10px]">
                            <li className="text-[16px] font-satoshi-regular">
                                New Arrivals
                            </li>
                            <li className="text-[16px] font-satoshi-regular">
                                Best Sellers
                            </li>
                            <li className="text-[16px] font-satoshi-regular">
                                Recently Viewed
                            </li>
                            <li className="text-[16px] font-satoshi-regular">
                                Popular this week
                            </li>
                        </ul>
                    </div>{" "}
                    <div className="col-span-1">
                        <h4 className="text-[18px] font-clash-regular mb-[15px]">
                            Menu
                        </h4>

                        <ul className="flex flex-col gap-[10px]">
                            <li className="text-[16px] font-satoshi-regular">
                                New Arrivals
                            </li>
                            <li className="text-[16px] font-satoshi-regular">
                                Best Sellers
                            </li>
                            <li className="text-[16px] font-satoshi-regular">
                                Recently Viewed
                            </li>
                            <li className="text-[16px] font-satoshi-regular">
                                Popular this week
                            </li>
                        </ul>
                    </div>
                    <div className="col-span-1 lg:col-span-3">
                        <h4 className="text-[18px] font-clash-regular mb-[15px]">
                            Join our mailing list
                        </h4>
                        <div className="flex lg:pr-[80px]">
                            <input
                                className="flex-1 py-4 bg-custom-white/20 border-none outline-none px-4 placeholder:font-satoshi-regular placeholder:text-white"
                                type="text"
                                placeholder="you@email.com"
                            />
                            <Button
                                className={
                                    "bg-white text-black px-2 md:px-10 py-4 font-satoshi-regular"
                                }
                            >
                                Signup
                            </Button>
                        </div>
                    </div>
                </div>
                <div className="bg-custom-white/30 h-[1.5px] my-10 rounded-md" />
                <div className="flex items-center justify-between">
                    <h5 className="text-[15px] font-satoshi-regular">
                        Copyright 2024 &copy; Thinknext Tech.
                    </h5>
                    <div className="flex gap-5 items-center">
                        <FaInstagram />
                        <FaInstagram />
                        <FaInstagram />
                        <FaInstagram />
                        <FaInstagram />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
