import React, { useEffect, useState } from "react";
import SingleProduct from "../components/SingleProduct";
import axios from "axios";
import CollectionCard from "../components/CollectionCard";

const Shop = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios
            .get("/ecommerce/products")
            .then(({ data }) => setProducts(data.data.products))
            .catch((err) => console.log(err));
    }, []);

    console.log(products);
    return (
        <div>
            <header className="w-full h-40 bg-center bg-no-repeat  bg-cover  bg-[url('src/assets/about3.jpg')]">
                <div className="ml-16 pt-20">
                    <p className="text-3xl text-white font-bold">
                        All Products
                    </p>
                </div>
            </header>

            <div className="w-full flex min-h-screen">
                <div className="w-[25%] bg-white">
                    <div className="flex flex-col px-16 py-10 gap-3">
                        <p className="text-xl">Product Type</p>
                        <div className="flex gap-2">
                            <input type="checkbox" name="" id="" />
                            <label>Furniture</label>
                        </div>
                        <div className="flex gap-2">
                            <input type="checkbox" name="" id="" />
                            <label>Homeware</label>
                        </div>
                        <div className="flex gap-2">
                            <input type="checkbox" name="" id="" />
                            <label>Sofas</label>
                        </div>
                        <div className="flex gap-2">
                            <input type="checkbox" name="" id="" />
                            <label>Homeware</label>
                        </div>
                        <div className="flex gap-2">
                            <input type="checkbox" name="" id="" />
                            <label>Light Fittings</label>
                        </div>
                        <div className="flex gap-2">
                            <input type="checkbox" name="" id="" />
                            <label>Accessories</label>
                        </div>
                    </div>

                    <div className="flex flex-col px-16 gap-3">
                        <p className="text-xl">Price</p>
                        <div className="flex gap-2">
                            <input type="checkbox" name="" id="" />
                            <label>0-100</label>
                        </div>
                        <div className="flex gap-2">
                            <input type="checkbox" name="" id="" />
                            <label>101-250</label>
                        </div>
                        <div className="flex gap-2">
                            <input type="checkbox" name="" id="" />
                            <label>250+</label>
                        </div>
                    </div>

                    <div className="flex flex-col px-16 py-10 gap-3">
                        <p className="text-xl">Designer</p>
                        <div className="flex gap-2">
                            <input type="checkbox" name="" id="" />
                            <label>Robert Smith</label>
                        </div>
                        <div className="flex gap-2">
                            <input type="checkbox" name="" id="" />
                            <label>Liam Gallagher</label>
                        </div>
                        <div className="flex gap-2">
                            <input type="checkbox" name="" id="" />
                            <label>Biggie Smalls</label>
                        </div>
                        <div className="flex gap-2">
                            <input type="checkbox" name="" id="" />
                            <label>Thome Work</label>
                        </div>
                    </div>
                </div>

                <div className="flex-1 bg-white p-10">
                    <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
                        {products.map((product) => {
                            return (
                                <CollectionCard
                                    key={product._id}
                                    img={product.mainImage.url}
                                    title={product.name}
                                    price={product.price}
                                />
                            );
                        })}

                        {/* <SingleProduct
                            img="https://images.pexels.com/photos/6580227/pexels-photo-6580227.jpeg?auto=compress&cs=tinysrgb&w=600"
                            title="The Dandy Chair"
                            price="€600"
                        />
                        <SingleProduct
                            img="https://images.pexels.com/photos/8490259/pexels-photo-8490259.jpeg?auto=compress&cs=tinysrgb&w=600"
                            title="The Dandy Chair"
                            price="€400"
                        />
                        <SingleProduct
                            img="https://images.pexels.com/photos/7318959/pexels-photo-7318959.jpeg?auto=compress&cs=tinysrgb&w=600"
                            title="The Dandy Chair"
                            price=" €300"
                        />
                        <SingleProduct
                            img="https://images.pexels.com/photos/4846437/pexels-photo-4846437.jpeg?auto=compress&cs=tinysrgb&w=600"
                            title="The Dandy Chair"
                            price=" €690"
                        />
                        <SingleProduct
                            img="https://images.pexels.com/photos/3932957/pexels-photo-3932957.jpeg?auto=compress&cs=tinysrgb&w=600"
                            title="The Dandy Chair"
                            price=" €458"
                        />
                        <SingleProduct
                            img="https://images.pexels.com/photos/5825576/pexels-photo-5825576.jpeg?auto=compress&cs=tinysrgb&w=600"
                            title="The Dandy Chair"
                            price=" €900"
                        />
                        <SingleProduct
                            img="https://images.pexels.com/photos/6580227/pexels-photo-6580227.jpeg?auto=compress&cs=tinysrgb&w=600"
                            title="The Dandy Chair"
                            price=" €590"
                        />
                        <SingleProduct
                            img="https://images.pexels.com/photos/8490259/pexels-photo-8490259.jpeg?auto=compress&cs=tinysrgb&w=600"
                            title="The Dandy Chair"
                            price=" €399"
                        />
                        <SingleProduct
                            img="https://images.pexels.com/photos/7318959/pexels-photo-7318959.jpeg?auto=compress&cs=tinysrgb&w=600"
                            title="The Dandy Chair"
                            price=" €499"
                        />
                        <SingleProduct
                            img="https://images.pexels.com/photos/4846437/pexels-photo-4846437.jpeg?auto=compress&cs=tinysrgb&w=600"
                            title="The Dandy Chair"
                            price=" €799"
                        />
                        <SingleProduct
                            img="https://images.pexels.com/photos/3932957/pexels-photo-3932957.jpeg?auto=compress&cs=tinysrgb&w=600"
                            title="The Dandy Chair"
                            price=" €199"
                        />
                        <SingleProduct
                            img="https://images.pexels.com/photos/5825576/pexels-photo-5825576.jpeg?auto=compress&cs=tinysrgb&w=600"
                            title="The Dandy Chair"
                            price=" €500"
                        /> */}
                    </div>

                    <div className="text-center mt-[40px]">
                        <button className="p-3 bg-[#2A254B] text-white ">
                            {" "}
                            Load More
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Shop;
