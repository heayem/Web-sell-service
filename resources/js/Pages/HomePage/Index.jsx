import React from "react";
import ProductCard from "@/Components/Cards/ProductCard";
import Hero from "@/Components/Hero/Hero";
import HeroSection from "@/Components/Hero/HeroSection";
export default function Index() {
    return (
        <>
            <div className="h-screen">
                <Hero
                    image="/images/placeholder.png"
                    title="WELCOME TO SERVICEBOX"
                    description="At SERVICEBOX, we provide a seamless platform for businesses to purchase the products they need to thrive. Whether you're looking for essential tools, equipment, or specialized solutions for your company, we are here to make the process easy and efficient."
                    buttonLabel="Get Started"
                    isButton
                />
            </div>
            <div className="h-screen">
                <HeroSection
                    image="/images/bg-01.png"
                    title="WELCOME TO SERVICEBOX"
                    description="At SERVICEBOX, we provide a seamless platform for businesses to purchase the products they need to thrive. Whether you're looking for essential tools, equipment, or specialized solutions for your company, we are here to make the process easy and efficient."
                    buttonLabel="Get Started"
                    isButton
                />
            </div>
            <div className="w-full">
                <ProductCard
                    isButtonReadMore
                    image="/images/product-quality.png"
                    title="High-Quality"
                    descriptionClass="w-1/2"
                    description="We only stock products from reputable brands, ensuring that you get top-quality, reliable technology for your business."
                />
            </div>
        </>
    );
}
