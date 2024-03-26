import React, { useEffect, useState } from "react";
import ServiceCard from "../components/ServiceCard";
import { FaCar } from "react-icons/fa6";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { IoWalletOutline } from "react-icons/io5";
import { PiFlowerTulipDuotone } from "react-icons/pi";
import CollectionCard from "../components/CollectionCard";
import axios from "axios";

const Home = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios
            .get("/ecommerce/products")
            .then(({ data }) => setProducts(data.data.products))
            .catch((err) => console.log(err));
    }, []);

    console.log(products)

    return (
        <>
            <div className="w-[1200px] flex items-center justify-center h-[500px] mx-auto py-6">
                <div className="bg-[#2A254B] h-full p-7 w-[600px] flex flex-col justify-between">
                    <div>
                        <h2 className="text-[35px] text-white">
                            The furniture brand for the future
                            <br /> with timeless designs
                        </h2>
                        <button className="p-3 bg-[#494565] text-white mt-5">
                            View Collections
                        </button>
                    </div>
                    <p className="text-[20px] font-light text-white">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Odio iure exercitationem omnis?
                    </p>
                </div>
                <div className="w-[600px] h-full">
                    <img
                        className="h-full"
                        src="src/assets/containerimg.jpg"
                        alt=""
                    />
                </div>
            </div>

            <div className="   h-[350px] pt-10 px-36 ">
                <h2 className="text-3xl font-bold text-center mb-10 ">
                    What makes our brand different
                </h2>
                <div className="flex gap-14">
                    <ServiceCard
                        icon={<FaCar />}
                        title="Next day as standard"
                        desc="Order before 3pm as get your order the next day as standard"
                    />
                    <ServiceCard
                        icon={<IoIosCheckmarkCircleOutline />}
                        title="Made by true Artisans"
                        desc="Handamade crafted goods made real passion and craftmanship"
                    />
                    <ServiceCard
                        icon={<IoWalletOutline />}
                        title="Unbeatable Prices"
                        desc="For our materials and quality find you won't find better prices anywhere"
                    />
                    <ServiceCard
                        icon={<PiFlowerTulipDuotone />}
                        title="Recycled packaging"
                        desc="We use 100% recycled packaging to ensure our footprint is manageable"
                    />
                </div>
            </div>
            <div className="py-10 px-36  ">
                <h2 className="text-3xl font-bold  mb-10 text-center ">
                    New Ceramics
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                    {products.slice(0, 4).map((product) => {
                        return (
                            <CollectionCard
                                key={product._id}
                                img={product?.mainImage?.url}
                                title={product.name}
                                price={product.price}
                            />
                        );
                    })}
                    {/* <CollectionCard
                        img="src/assets/img4.jpg"
                        title="The Living Area"
                        price="€700"
                    />
                    <CollectionCard
                        img="src/assets/img5.jpg"
                        title="The Vaccum Cleaner"
                        price="€500"
                    />
                    <CollectionCard
                        img="src/assets/img6.jpg"
                        title="The Lucy Lamp"
                        price="€1500"
                    /> */}
                </div>
                <div className="text-center mt-[40px]">
                    <button className="p-3 bg-[#2A254B] text-white ">
                        {" "}
                        View Colllections
                    </button>
                </div>
            </div>

            <div className="p-20 bg-[#F9F9F9]">
                <div className="p-16 bg-white text-center">
                    <h2 className="text-3xl mb-4">
                        Join the club and get the benefits
                    </h2>
                    <p className="mb-7">
                        sign up for our newsletter and recieve exclusive offers
                        on new
                        <br /> ranges,sales popup stores and more
                    </p>
                    <form action="">
                        <input
                            className="text-gray-500 p-3 w-64 bg-[#F9F9F9] outline-none"
                            type="text"
                            placeholder="your@email.com"
                        />
                        <button className="p-3 bg-[#2A254B] text-gray-200">
                            Sign up
                        </button>
                    </form>
                </div>
            </div>

            <div className="w-full flex h-[500px]">
                <div className="bg-white h-full py-12 px-16 flex flex-col justify-between w-[1400px]">
                    <div>
                        <h2 className="text-[35px] text-black leading-10 mb-8">
                            From a studio in london to a global brand with over
                            400 outlets
                        </h2>
                        <p className="mb-8">
                            when we started Avion,the idea was simple make high
                            quality furniture <br /> affordable and available
                            for the mass market
                        </p>
                        <p>
                            Handmade,and lovingly crafted furniture and homeware
                            is what we live,breathe and design so our chelsea
                            boutique become the hotbed for the london interior
                            design community.
                        </p>
                    </div>
                    <button className="p-3 bg-[#F9F9F9] text-black mt-5 w-36">
                        Get in Touch
                    </button>
                </div>
                <div className=" h-full w-[1400px]">
                    <img
                        className="h-full"
                        src="src/assets/containerimg.jpg"
                        alt=""
                    />
                </div>
            </div>
        </>
    );
};

export default Home;
