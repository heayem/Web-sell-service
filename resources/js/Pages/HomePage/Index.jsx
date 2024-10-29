import React from "react";
import ProductCard from "@/Components/Cards/ProductCard";
export default function Index() {
    return (
        <div className="w-full">
            <ProductCard
                isButtonReadMore
                image="/images/product-quality.png"
                title="High-Quality"
                descriptionClass="w-1/2"
                description="We only stock products from reputable brands, ensuring that you get top-quality, reliable technology for your business."
            />
        </div>
    );
}
