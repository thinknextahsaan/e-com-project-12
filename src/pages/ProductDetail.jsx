import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSupbaseProducts } from "../context/SupabaseDatabaseProvider";
import { FiLoader } from "react-icons/fi";
import Button from "../components/Button";
import ProductCounter from "../components/ProductCounter";
import { FaCartShopping } from "react-icons/fa6";

const ProductDetail = () => {
    const { getProductById } = useSupbaseProducts();
    const { id } = useParams();
    const [productDetail, setProductDetail] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (id) {
            getProductById(id)
                .then((data) => {
                    data && setProductDetail(data);
                })
                .catch((err) => console.log(err))
                .finally(() => {
                    setLoading(false);
                });
        }
    }, [id]);

    if (loading) {
        return (
            <div className="h-screen flex items-center justify-center w-full">
                <FiLoader size={50} className="animate-spin" />
            </div>
        );
    }

    return (
        <div className="px-10 py-6">
            <div className=" grid grid-cols-1 md:grid-cols-2">
                <div className="w-full p-10 overflow-hidden">
                    <img
                        src={productDetail.image}
                        className="w-full h-full"
                        alt=""
                    />
                </div>
                <div className="w-full p-10 overflow-hidden">
                    <div>
                        <h1 className="font-clash-regular text-4xl">
                            {productDetail.name}
                        </h1>

                        <p className="text-2xl font-satoshi-regular mt-3">
                            ₹{productDetail.price.toLocaleString("en-IN")}
                        </p>
                    </div>
                    <div className="h-[1.5px] bg-gray-200 my-5 w-[90%]" />
                    <div>
                        <p className="font-clash-regular text-base">
                            Product Description
                        </p>
                        <p className="font-satoshi-regular text-base mt-4 tracking-wide">
                            {productDetail.short_description}
                        </p>
                    </div>
                    <div className="mt-5">
                        <p className="font-clash-regular text-base ">
                            Quantity
                        </p>
                        <ProductCounter />
                    </div>
                    <div className="mt-10 flex gap-5">
                        <Button className="bg-custom-blue text-white font-satoshi-regular flex gap-2 items-center">
                            <FaCartShopping /> Add To Cart
                        </Button>
                        <Button className="bg-custom-white text-custom-blue font-satoshi-regular">
                            Save to Favorites
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;
