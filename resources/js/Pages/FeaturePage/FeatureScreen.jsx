import React from "react";
import Layout from "@/Components/Layout/public/Layout";
import { HeroWithoutContent } from "@/Components/Hero/HeroSection";
import Footer from "@/Components/Footer/footer";
import {
    ProductCardImageLeftHasReadMore,
    ProductCardImageRightHasReadMore,
} from "@/Components/Cards/ProductCard";

export default function FeatureScreen() {
    return (
        <>
            <Layout
                heroSection={
                    <HeroWithoutContent image="./images/bg-featurepage.png" />
                }
                content={
                    <div className="container flex flex-col gap-8 md:gap-16 my-8 md:my-16">
                        <ProductCardImageLeftHasReadMore
                            heading="OUR SERVICE"
                            image={"./images/hight-quality.png"}
                            title="EDUCATION"
                            description="We provide cutting-edge educational platforms designed to foster learning and development. Our solutions range from e-learning systems to tools that enhance both online and classroom experiences, making education more accessible and engaging."
                        />
                        <ProductCardImageRightHasReadMore
                            image={"./images/user-friendly.png"}
                            title="E-COMMERCE"
                            description="Our e-commerce solutions are built to streamline online transactions and shopping experiences for businesses of all sizes. From intuitive user interfaces to secure payment gateways, we help companies grow their online presence and sales."
                        />
                        <ProductCardImageLeftHasReadMore
                            image={"./images/specialized-in-technology.png"}
                            title="SYSTEM DELIVERY"
                            description="Our system delivery services ensure seamless implementation of custom software and infrastructure tailored to meet the specific needs of your business. We handle every stage of the process—from "
                        />
                        <ProductCardImageRightHasReadMore
                            image={"./images/user-friendly.png"}
                            title="HOSPITAL SYSTEM"
                            description="We specialize in developing hospital management systems that simplify and automate hospital operations, patient records, and appointments. Our solutions help healthcare providers improve efficiency and provide better care to patients."
                        />
                        <ProductCardImageLeftHasReadMore
                            image={"./images/specialized-in-technology.png"}
                            title="ILLNESS  SYSTEM"
                            description="Our illness management systems are designed to assist patients and healthcare providers in tracking and managing chronic conditions. These systems provide tools for monitoring symptoms, medication schedules, and health progress, helping to enhance the quality of care."
                        />
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
