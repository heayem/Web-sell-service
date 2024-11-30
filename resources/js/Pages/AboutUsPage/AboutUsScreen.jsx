import React from "react";
import Layout from "@/Components/Layout/public/Layout";
import { HeroWithoutContent } from "@/Components/Hero/HeroSection";
import Footer from "@/Components/Footer/footer";
import { Heading } from "@/Components/Typography/Heading";

export default function AboutUsScreen() {
    return (
        <>
            <Layout
                heroSection={
                    <HeroWithoutContent
                        className="mx-auto h-[80vh] md:h-[85vh] lg:h-[88vh]"
                        image="./images/bg-aboutpage.png"
                    />
                }
                content={
                    <div className="container flex flex-col gap-8 md:gap-16 my-8 md:my-16">
                        <div>
                            <Heading title="Mission" />
                        </div>
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
