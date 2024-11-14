import React from "react";
import ProductCard from "@/Components/Cards/ProductCard";
import Hero from "@/Components/Hero/Hero";
import Profile from "@/Components/Profile/Profile";

export default function Index() {
    return (
        <>
            <div className="h-screen ">
                <Hero
                    image="/images/placeholder.png"
                    title="WELCOME TO SERVICEBOX"
                    description="At SERVICEBOX, we provide a seamless platform for businesses to purchase the products they need to thrive. Whether you're looking for essential tools, equipment, or specialized solutions for your company, we are here to make the process easy and efficient."
                    buttonLabel="Get Started"
                    isButton
                />
            </div>
            <div className="w-[80%] mx-auto">
                <ProductCard
                    isButtonReadMore
                    imageToRight
                    image="/images/product-quality.png"
                    title="High-Quality"
                    description="We only stock products from reputable brands, ensuring that you get top-quality, reliable technology for your business."
                />
            </div>

            <Profile
                name="Yem Hea"
                position="Tech Lead"
                linkedin_link="https://www.linkedin.com/in/yem-hea/"
                github_link="https://github.com/heayem"
            />
        </>
    );
}
