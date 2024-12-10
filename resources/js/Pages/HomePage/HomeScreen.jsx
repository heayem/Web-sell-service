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
import { useTranslation } from "react-i18next";



export default function HomeScreen() {
    const { t } = useTranslation();
    return (
        <>
            <Layout
                heroSection={
                    <HeroWithContent
                        image="./images/bg-homepage.png"
                        title={t("hero_section.title")}
                        description={t("hero_section.description")}
                        buttonLabel={t("hero_section.button")}
                        url="#contact"
                    />
                }
                content={
                    <div className="container flex flex-col gap-8 md:gap-16 my-8">
                        <OurFeature />
                        <ProductCardImageLeft
                            heading={t("why_us.header")}
                            image={"./images/hight-quality.png"}
                            title={t("why_us.specialized.title")}
                            description={t("why_us.specialized.description")}
                        />
                        <ProductCardImageRight
                            image={"./images/user-friendly.png"}
                            title={t("why_us.high_quality.title")}
                            description={t("why_us.high_quality.description")}
                        />
                        <ProductCardImageLeft
                            image={"./images/specialized-in-technology.png"}
                            title={t("why_us.user_friendly.title")}
                            description={t("why_us.user_friendly.description")}
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
