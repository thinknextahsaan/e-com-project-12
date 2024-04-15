import React, { useEffect } from "react";
import Footer from "../components/Footer";
import { Navigate } from "react-router-dom";
import Button from "../components/Button";
import { Link } from "react-router-dom";
import { useSupabaseAuth } from "../context/SupabaseAuthContext";
import ProductCounter from "../components/ProductCounter";
import { useSupbaseProducts } from "../context/SupabaseDatabaseProvider";

const Cart = () => {
    const { cart } = useSupbaseProducts();
    console.log(cart);
    return (
        <div className="py-20 bg-slate-100">
            <div className=" pt-2 md:px-10 lg:px-20 px-4">
                <div className="font-clash-medium text-custom-blue text-xl md:text-2xl lg:text-3xl  py-4">
                    Your shopping cart
                </div>
                <div className="hidden md:flex items-center  gap-4 font-clash-regular mt-8">
                    <div className="w-[60%] ">Product</div>
                    <div className="w-[20%] ">Quantity</div>
                    <div className="w-[20%] ">Total</div>
                </div>
                <div className="h-[1.5px] bg-gray-400 my-2 w-[100%] md:w-[95%] lg:w-[92%]" />
                <div>
                    {cart?.items?.map((cart_item) => {
                        return (
                            <CartItem
                                cart_item={cart_item}
                                productname={"White pendent lamp"}
                                desc={
                                    "Beautiful and simple lamp, this is one for the classics"
                                }
                                price={12300}
                                qty={4}
                                image={
                                    "https://images.unsplash.com/photo-1590003689662-0773d48b6417?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fGxhbXB8ZW58MHx8MHx8fDA%3D"
                                }
                            />
                        );
                    })}
                    <div className="h-[1.5px] bg-gray-400 my-6 w-[100%] md:w-[95%] lg:w-[93%]" />
                    <div className="font-clash-regular flex justify-end px-2 md:px-10 lg:px-20 text-end">
                        <div>
                            <div className="text-right text-[12px] md:text-[15px] lg:text-[18px]">
                                Taxes and shipping are calculated at checkout
                            </div>
                            <div className="mt-4">
                                <span className="mx-2 opacity-70 mt-4	">
                                    SubTotal
                                </span>
                                25,900
                            </div>
                            <div>
                                <Link to={"/checkout"}>
                                    <Button
                                        className={
                                            "bg-custom-blue text-white my-2 "
                                        }
                                    >
                                        Go to Checkout
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;

function CartItem({ image, desc, productname, price, qty, cart_item }) {
    console.log(cart_item);

    useEffect(() => {
        // TODO:
        // fetch the product whose id is equal to the cart_item.product_id
    }, [cart_item]);

    return (
        <div className=" h-[200px] md:h-[150px] flex gap-5 my-4 overflow-hidden">
            <div className="h-full">
                <img
                    src={image}
                    className="h-full object-cover object-center"
                    alt=""
                />
            </div>
            <div className=" flex-1">
                <div className="flex flex-col md:flex-row gap-1 md:gap-3 h-full items-start md:items-center pl-2 md:justify-between">
                    <div className="flex flex-col gap-2 self-start order-1  h-full w-full md:w-[52%]">
                        <div className="w-[50%] flex flex-col gap-2 md:gap-3">
                            <h2 className="text-base md:text-2xl font-clash-regular">
                                {productname}
                            </h2>
                            <p className="text-sm md:text-base font-satoshi-regular">
                                {desc}
                            </p>
                        </div>
                    </div>

                    <p className="text-base md:text-xl font-satoshi-regular order-2 md:order-3 flex-1 h-full  flex items-center">
                        ₹{price?.toLocaleString()}
                    </p>
                    <div className="order-3 md:order-2  h-full flex-1 flex items-center">
                        <ProductCounter value={qty} />
                    </div>
                </div>
            </div>
        </div>
    );
}

// <table>
//     <tr className="hidden md:block">
//         <th colSpan={2}>Product</th>

//         <th>Quantity</th>
//         <th>Total</th>
//     </tr>
//     <tr>
//         <td>
//             <img src="" alt="" />
//         </td>
//         <td>
//             <h2>Product Name</h2>
//             <p>Product Price</p>
//             <p>Product Price</p>
//             <p>Product Price</p>
//         </td>
//         <td></td>
//         <td>
//             Price
//         </td>

//     </tr>
// </table>;

{
    /* <div className="grid grid-cols-5  md:gap-4 lg:gap-4 font-clash-regular mt-4">
<div className="col-span-3 flex gap-2 md:gap-4 lg:gap-4">
    <img
        className="w-[87px] h-[130px] md:w-[110px] md:h-[130px]
lg:w-[110px] lg:h-[130px]"
        src="https://images.unsplash.com/photo-1590003689662-0773d48b6417?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fGxhbXB8ZW58MHx8MHx8fDA%3D"
        alt=""
    />
    <div className="w-[190px]">
        <div className="text-[12px] md:text-[20px] lg:text-[20px]">
            White pendent lamp
        </div>
        <div className="text-[9px] md:text-[12px] lg:text-[14px] mt-1 md:mt-2 lg:mt-3 line-clamp-3">
            Beautiful and simple lamp, this is one for
            the classics.
        </div>
        <div className="text-[14px] md:text-[17px] lg:text-[19px] mt-2">
            ₹ 1,450
        </div>
    </div>
</div>
<div className="ml-3 md:ml-2 lg:ml-2 text-[12px] md:text-[20px] lg:text-[20px]">
    2
</div>
<div className="text-[12px] md:text-[18px] lg:text-[19px]">
    ₹ 2,900
</div>
</div>
<div className="grid grid-cols-5  md:gap-4 lg:gap-4 font-clash-regular mt-4">
<div className="col-span-3 flex gap-2 md:gap-4 lg:gap-4">
    <img
        className="w-[110px] h-[130px]"
        src="https://images.unsplash.com/photo-1590251024078-8a6d9f90b02d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDN8fHNvZmF8ZW58MHx8MHx8fDA%3D"
        alt=""
    />
    <div className="w-[190px]">
        <div className=" text-[12px] md:text-[18px] lg:text-[20px]">
            Gray Fabric Sofa
        </div>
        <div className="text-[9px] md:text-[12px] lg:text-[14px] mt-1 md:mt-2 lg:mt-3 line-clamp-3 ">
            Beautiful and simple this is one for the
            classics.
        </div>
        <div className="text-[14px] md:text-[18px] lg:text-[19px] mt-2">
            ₹ 23,000
        </div>
    </div>
</div>
<div className="ml-3 md:ml-2 lg:ml-2  text-[12px] md:text-[18px] lg:text-[19px]">
    1
</div>
<div className="text-[12px] md:text-[18px] lg:text-[19px] ">
    ₹ 23,000
</div>
</div> */
}
