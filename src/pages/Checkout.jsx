import React, { useState } from "react";
import { Link } from "react-router-dom";

const Checkout = () => {
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        phone: "",
        address: "",
        city: "",
        zip: "",
        country: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your address submission logic here
        // console.log("Address submitted with data:", formData);
    };

    return (
        <div className=" ">
            <form
                onSubmit={handleSubmit}
                className="w-[300px] md:w-[350px] lg:w-[450px] shadow-xl p-4 mx-auto font-clash-regular   "
            >
                <h2 className="text-3xl my-8 flex justify-center font-clash-medium  text-custom-blue ">
                    Your Address
                </h2>
                <div className="mb-4">
                    <label
                        htmlFor="fullName"
                        className="block mb-2 outline-none"
                    >
                        Full Name
                    </label>
                    <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded focus:ring-1 outline-none"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="block mb-2">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-3 py-2 border rounded focus:ring-1 outline-none"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="phone" className="block mb-2">
                        Phone Number
                    </label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-3 py-2 border rounded focus:ring-1 outline-none"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="address" className="block mb-2">
                        Address
                    </label>
                    <input
                        type="text"
                        id="address"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded focus:ring-1 outline-none"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="city" className="block mb-2">
                        City
                    </label>
                    <input
                        type="text"
                        id="city"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded focus:ring-1 outline-none"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="zip" className="block mb-2">
                        Pin Code
                    </label>
                    <input
                        type="text"
                        id="zip"
                        name="zip"
                        value={formData.zip}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded focus:ring-1 outline-none"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="country" className="block mb-2">
                        Country
                    </label>
                    <select
                        id="country"
                        name="country"
                        value={formData.country}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded focus:ring-1 outline-none"
                        required
                    >
                        <option value="">Select Country</option>
                        <option value="US">United States</option>
                        <option value="CA">Canada</option>
                        <option value="UK">United Kingdom</option>
                        <option value="IND">India</option>
                        {/* Add more countries as needed */}
                    </select>
                </div>
                <div className=" flex  justify-center">
                    <Link to={"/payment"}>
                        <button
                            type="submit"
                            className="bg-custom-blue  text-white px-4 py-2  hover:bg-custom-blue/90"
                        >
                            Submit Address
                        </button>
                    </Link>
                </div>
            </form>
        </div>
    );
};

export default Checkout;
