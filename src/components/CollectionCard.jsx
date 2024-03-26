import React from "react";

const CollectionCard = ({ img, title, price }) => {
    return (
        <div className="w-full p-5 h-[350px]  shadow-xl hover:scale-105 transition-transform duration-300">
            <div className="mb-4 h-[80%]">
                <img
                    src={img}
                    className="h-full w-full object-center object-cover"
                />
            </div>
            <p className="text-[16px] capitalize font-semibold">{title}</p>
            <p className="text-[14px] font-medium text-slate-500">₹{price}</p>
        </div>
    );
};

export default CollectionCard;
