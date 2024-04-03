import React from "react";
import ProductCard from "./ProductCard";
import Button from "./Button";
import { useSupbaseProducts } from "../context/SupabaseDatabaseProvider";
import { FiLoader } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const FeaturedProducts = () => {
    const navigate = useNavigate();
    const { products } = useSupbaseProducts();

    return (
        <div className="h-auto p-10 flex justify-center mb-[40px]overflow-hidden">
            <div className="h-full w-full">
                <h3 className="text-center text-2xl text-[#2A254B] font-clash-medium">
                    New Ceramics
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  mt-[50px] h-full gap-10">
                    {products ? (
                        products.slice(0, 4).map((product) => {
                            return (
                                <ProductCard
                                    key={product.id}
                                    id={product.id}
                                    name={product.name}
                                    price={product.price}
                                    image={product.image}
                                />
                            );
                        })
                    ) : (
                        <div className="h-[400px] col-span-4 flex items-center justify-center w-full">
                            <FiLoader size={40} className="animate-spin" />
                        </div>
                    )}
                </div>
                <div className="flex justify-center items-center mt-5 w-full">
                    <Button
                        className={"font-satoshi-regular px-5"}
                        onClick={() => {
                            navigate("/shop");
                        }}
                    >
                        View Collection
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default FeaturedProducts;
