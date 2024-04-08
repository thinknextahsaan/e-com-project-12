import React from "react";

const ProductCounter = ({ value = 1 }) => {
    return (
        <div className=" w-fit bg-gray-100 mt-4">
            <button className="px-2 py-2 ">-</button>
            <input
                className="border-none bg-white/35 text-center outline-none px-2 py-2  w-[70px] inline-flex items-center justify-center"
                type="number"
                disabled
                value={value}
            />
            <button className="px-2 py-2 ">+</button>
        </div>
    );
};

export default ProductCounter;
