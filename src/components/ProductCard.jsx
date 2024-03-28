import React from "react";

const ProductCard = () => {
    return (
        <div className="h-[400px] w-full ">
            <div className="h-[75%] bg-green-500 overflow-hidden">
                <img src="https://picsum.photos/600" className="h-full w-full" alt="" />
            </div>
            <div className="py-4">
                <p className="font-clash-regular text-[20px]">
                    The Dandy Chair
                </p>
                <p className="font-clash-regular text-[18px]">₹1250</p>
            </div>
        </div>
    );
};

export default ProductCard;
