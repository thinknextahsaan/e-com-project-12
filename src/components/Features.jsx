import React from "react";

const Features = () => {
    return (
        <div className="h-[350px] p-10 flex justify-center mb-[40px]">
            <div className=" h-full w-full">
                <h3 className="text-center text-3xl font-bold">
                    What makes Our Brand 'Different'
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-5 h-full">
                    <div className="border border-black h-full">1</div>
                    <div className="border border-black h-full">2</div>
                    <div className="border border-black h-full">3</div>
                    <div className="border border-black h-full">4</div>
                </div>
            </div>
        </div>
    );
};

export default Features;
