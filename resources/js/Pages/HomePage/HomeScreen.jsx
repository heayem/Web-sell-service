import React from "react";
import Layout from "@/Components/Layout/public/Layout";
import {HeroWithContent} from "@/Components/Hero/HeroSection";
import {
    ProductCardImageLeft,
    ProductCardImageLeftHasReadMore,
    ProductCardImageRight,
    ProductCardImageRightHasReadMore,
} from "@/Components/Cards/ProductCard";

export default function HomeScreen() {
    return (
        <>
            <Layout
                heroSection={
                    <HeroWithContent
                        image="./images/image-one.jpg"
                        title="WELCOME TO SERVICEBOX"
                        description="At SERVICEBOX, we provide a seamless platform for businesses to purchase the products they need to thrive. Whether you're looking for essential tools, equipment, or specialized solutions for your company, we are here to make the process easy and efficient."
                        isButton
                        buttonLabel="Get Started"
                        url="#"
                    />
                }
                content={
                    <>
                        <ProductCardImageLeftHasReadMore
                            image={"./images/image-one.jpg"}
                            title="Product 1"
                            description="Description for Product 1"
                        />
                        <ProductCardImageRightHasReadMore
                            image={"./images/image-one.jpg"}
                            title="Product 1"
                            description="Description for Product 1"
                        />
                        <ProductCardImageLeft
                            image={"./images/image-one.jpg"}
                            title="Product 1"
                            description="Description for Product 1"
                        />
                        <ProductCardImageRight
                            image={"./images/image-one.jpg"}
                            title="Product 1"
                            description="Description for Product 1"
                        />
                    </>
                }
                footer={<></>}
            />
        </>
    );
}
