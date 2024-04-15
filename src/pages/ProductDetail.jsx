import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSupbaseProducts } from "../context/SupabaseDatabaseProvider";
import { FiLoader } from "react-icons/fi";
import Button from "../components/Button";
import ProductCounter from "../components/ProductCounter";
import { FaCartShopping } from "react-icons/fa6";
import supabase from "../supabase/supabase.config";
import toast from "react-hot-toast";

const ProductDetail = () => {
    const [qty, setQty] = useState(1);
    const { cart } = useSupbaseProducts();
    const { getProductById } = useSupbaseProducts();
    const { id } = useParams();
    const [productDetail, setProductDetail] = useState(null);
    const [loading, setLoading] = useState(true);

    async function handleAddToCart() {
        // qty,product.id, cart_id

        if (!cart.id) {
            return;
        }


        // TODO:
        // check if a product has already been added to cart
        // let {data, error} =supabase.from("cart_items").select().eq("product_id", productDetail.id)
        // if(data){supabase.from("cart_items").update({quantity: qty}).eq("product_id", productDetail.id)}

        let { data: cart_item_result, error: cart_item_error } = await supabase
            .from("cart_items")
            .insert({
                cart_id: cart.id,
                product_id: productDetail.id,
                quantity: qty,
            })

        if (cart_item_error) {
            toast.error(cart_item_error.message);
            return;
        }

        toast.success("Product Added to Cart Successfully");
    }

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
                        <ProductCounter
                            value={qty}
                            setValue={setQty}
                            productDetail={productDetail}
                        />
                    </div>
                    <div className="mt-10 flex gap-5">
                        <Button
                            onClick={handleAddToCart}
                            className="bg-custom-blue text-white font-satoshi-regular flex gap-2 items-center"
                        >
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
