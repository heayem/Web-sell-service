import React from "react";
import Layout from "@/Components/Layout/public/Layout";
import { HeroWithoutContent } from "@/Components/Hero/HeroSection";
import Footer from "@/Components/Footer/footer";
import {
    ProductCardImageLeftHasReadMore,
    ProductCardImageRightHasReadMore,
} from "@/Components/Cards/ProductCard";
import { useTranslation } from "react-i18next";

export default function ProductScreen() {
    const { t } = useTranslation();
    return (
        <>
            <Layout
                heroSection={
                    <HeroWithoutContent className="w-full h-[80vh] md:h-[85vh] lg:h-[88vh]" image="./images/bg-featurepage.png" />
                }
                content={
                    <div className="container flex flex-col gap-8 md:gap-16 my-8 md:my-16">
                        <ProductCardImageLeftHasReadMore
                            heading={t("our_products.header")}
                            image={"./images/hight-quality.png"}
                            title={t("our_products.education_platform.header")}
                            description={t("our_products.education_platform.description")}
                        />
                        <ProductCardImageRightHasReadMore
                            image={"./images/user-friendly.png"}
                            title={t("our_products.e_commerce_solution.header")}
                            description={t("our_products.e_commerce_solution.description")}
                        />
                        <ProductCardImageLeftHasReadMore
                            image={"./images/specialized-in-technology.png"}
                            title={t("our_products.hospital_management.header")}
                            description={t("our_products.hospital_management.description")}
                        />
                        <ProductCardImageRightHasReadMore
                            image={"./images/user-friendly.png"}
                            title={t("our_products.illness_tracker.header")}
                            description={t("our_products.illness_tracker.description")}
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
