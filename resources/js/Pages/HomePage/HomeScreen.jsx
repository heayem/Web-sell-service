import React from "react";
import Layout from "@/Components/Layout/public/Layout";
import { HeroWithContent } from "@/Components/Hero/HeroSection";
import Footer from "@/Components/Footer/footer";
import {
    ProductCardImageLeft,
    ProductCardImageRight,
} from "@/Components/Cards/ProductCard";
import OurFeature from "@/Components/Slide/OurFeature";
import ContactUs from "./ContactUs";

export default function HomeScreen() {
    return (
        <>
            <Layout
                heroSection={
                    <HeroWithContent
                        image="./images/bg-homepage.png"
                        title="WELCOME TO SERVICEBOX"
                        description="At SERVICEBOX, we provide a seamless platform for businesses to purchase the products they need to thrive. Whether you're looking for essential tools, equipment, or specialized solutions for your company, we are here to make the process easy and efficient."
                        buttonLabel="Get Started"
                        url="#"
                    />
                }
                content={
                    <div className="container flex flex-col gap-8 md:gap-16 my-8">
                        <OurFeature />
                        <ProductCardImageLeft
                            heading="Why Choose Us?"
                            image={"./images/hight-quality.png"}
                            title="High-Quality"
                            description="We only stock products from reputable brands, ensuring that you get top-quality, reliable technology for your business."
                        />
                        <ProductCardImageRight
                            image={"./images/user-friendly.png"}
                            title="User-Friendly"
                            description="SERVICEBOX is designed for a seamless experience, allowing you to quickly browse, compare, and purchase the tech products or website services that meet your needs."
                        />
                        <ProductCardImageLeft
                            image={"./images/specialized-in-technology.png"}
                            title="Specialized in Technology"
                            description="SERVICEBOX offers a wide range of cutting-edge technology products and professional website services to help your business stay ahead in a digital world."
                        />
                        <ContactUs />
                    </div>
                }
                footer={
                    <>
                        <Footer />
                    </>
                }
            />
        </>
    );
}
