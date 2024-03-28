import React from "react";
import ProductCard from "./ProductCard";
import Button from "./Button";

const FeaturedProducts = () => {
    return (
        <div className="h-auto p-10 flex justify-center mb-[40px]overflow-hidden">
            <div className="h-full w-full">
                <h3 className="text-center text-2xl text-[#2A254B] font-clash-medium">
                    New Ceramics
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  mt-[50px] h-full gap-10">
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                </div>
                <div className="flex justify-center items-center mt-5 w-full">
                    <Button className={"font-satoshi-regular px-5"}>View Collection</Button>
                </div>
            </div>
        </div>
    );
};

export default FeaturedProducts;
