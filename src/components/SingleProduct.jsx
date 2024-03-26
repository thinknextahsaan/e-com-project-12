import React from "react";

const SingleProduct = (props) => {
    return (
        <>
            <div className="w-[27%] h-80 mb-20">
                <img className="w-full h-full" img src={props.img} />
                <p className="mt-3 text-xl">{props.title}</p>
                <p className="text-lg">{props.price}</p>
            </div>
        </>
    );
};

export default SingleProduct;
