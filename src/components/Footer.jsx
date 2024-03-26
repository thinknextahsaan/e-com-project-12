import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaGithub, FaYoutube } from "react-icons/fa";
import { FaXTwitter ,FaInstagram } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className=" flex font-light bg-[#2A254B] border shadow-lg text-white">
      <div className="flex py-5 px-5 flex-col">
        
      <div className="flex  py-5">
      <div className="pt-24 pb-8 px-6">
          <img 
            className="h-10 block align-middle"
            src="src/assets/4141508.jpg"
          />
          <p className=" my-8 leading-6 text-lg w-[450px]">Making the world a better place through constructing elegant hierarchies.</p>
          <div className="flex my-8 gap-8">
            <Link to={"/"}><FaFacebook className="size-6"/></Link>
            <Link to={"/"}><FaXTwitter className="size-6"/></Link>
            <Link to={"/"}><FaInstagram className="size-6"/></Link>
            <Link to={"/"}><FaGithub className="size-6"/></Link>
            <Link to={"/"}><FaYoutube className="size-6"/></Link>
          </div>
        </div>

        <div className="grid gap-72 grid-cols-3 mt-16 ml-5">
            <div>
                <h1 className=" leading-6 font-semibold text-xl">Menu</h1>
                <ul className="mt-6">
                    <li className="text-lg mt-5">New Arrivals</li>
                    <li className="text-lg mt-5">Best Sellers</li>
                    <li className="text-lg mt-5">Recently viewed</li>
                    <li className="text-lg mt-5">Popular this week</li>
                    <li className="text-lg mt-5">All products</li>

                </ul>
            </div>
            <div>
                <h1 className=" leading-6 font-semibold text-xl">Categories</h1>
                <ul className="mt-6">
                    <li className="text-lg mt-5">Crockery</li>
                    <li className="text-lg mt-5">Furniture</li>
                    <li className="text-lg mt-5">Homeware</li>
                    <li className="text-lg mt-5">Plant pots </li>
                    <li className="text-lg mt-5">Chairs </li>
                    <li className="text-lg mt-5">Crockery </li>

                </ul>
            </div>
            <div>
                <h1 className=" leading-6 font-semibold text-xl">Our Company</h1>
                <ul className="mt-6">
                    <li className="text-lg mt-5">About</li>
                    <li className="text-lg mt-5">Blog</li>
                    <li className="text-lg mt-5">Job</li>
                    <li className="text-lg mt-5">Press</li>
                    <li className="text-lg mt-5">Partners</li>
                </ul>
            </div>
             
        </div>
      </div>
       <div className="pt-10 border-t-2 text-center inline-block  ">
        <p>© 2020 Your Company, Inc. All rights reserved.</p>
       </div>
      </div>
    </footer>
  );
};

export default Footer;
