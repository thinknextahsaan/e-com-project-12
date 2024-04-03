import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ id , image, name, price }) => {
    return (
        <Link to={`/product/${id}`}>
            <div className="h-[400px] w-full ">
                <div className="h-[75%] overflow-hidden">
                    <img src={image} className="h-full w-full" alt="" />
                </div>
                <div className="py-4">
                    <p className="font-clash-regular text-[20px]">{name}</p>
                    <p className="font-clash-regular text-[18px]">₹{price}</p>
                </div>
            </div>
        </Link>
    );
};

export default ProductCard;
