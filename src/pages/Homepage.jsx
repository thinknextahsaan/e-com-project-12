import React from "react";
import HeroSection from "../components/HeroSection";
import Features from "../components/Features";
import FeaturedProducts from "../components/FeaturedProducts";
import Footer from "../components/Footer";

const Homepage = () => {
    return (
        <div>
            <HeroSection />
            <Features />
            <FeaturedProducts />
        </div>
    );
};

export default Homepage;
