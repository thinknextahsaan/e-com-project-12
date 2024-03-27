import React from "react";
import { Link } from "react-router-dom";

const Homepage = () => {
    return (
        <div>
            <HeroSection />
            <Features />
        </div>
        // <div className="flex w-full h-auto p-5">
        //   <div className="w-1/2">
        //     <div className="flex flex-col px-10 gap-5 pt-44">
        //       <h1 className="text-6xl font-bold w-[450px]">
        //         Summer styles are finally here
        //       </h1>
        //       <p className="text-xl w-[470px] text-[#747A87]">
        //         This year, our new summer collection will shelter you from the harsh
        //         elements of a world that doesn't care if you live or die.
        //       </p>
        //       <Link>
        //         <button className="bg-[#4F46E5] rounded-lg px-5 py-3 text-white font-bold">
        //           Shop Collections
        //         </button>
        //       </Link>
        //     </div>
        //   </div>
        //   <div className="w-1/2 flex items-center">
        //     <div className="gap-y-5	grid-cols-1	grid ml-10">
        //       <div className="w-44 h-64 overflow-hidden rounded-lg">
        //         <img src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-02.jpg" />
        //       </div>
        //       <div className="w-44 h-64 overflow-hidden rounded-lg">
        //         <img src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-01.jpg" />
        //       </div>
        //     </div>

        //     <div className="gap-y-5	grid-cols-1	grid ml-10 mr-10">
        //       <div className="w-44 h-64 overflow-hidden rounded-lg">
        //         <img src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-03.jpg" />
        //       </div>
        //       <div className="w-44 h-64 overflow-hidden rounded-lg">
        //         <img src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-04.jpg" />
        //       </div>
        //       <div className="w-44 h-64 overflow-hidden rounded-lg">
        //         <img src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-05.jpg" />
        //       </div>
        //     </div>

        //     <div className="gap-y-5	grid-cols-1	grid ">
        //       <div className="w-44 h-64 overflow-hidden rounded-lg">
        //         <img src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-06.jpg" />
        //       </div>
        //       <div className="w-44 h-64 overflow-hidden rounded-lg">
        //         <img src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-07.jpg" />
        //       </div>
        //     </div>
        //   </div>
        // </div>
    );
};

export default Homepage;
