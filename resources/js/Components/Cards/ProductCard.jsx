import { Image } from "primereact/image";
import React from "react";
import { ButtonReadMore } from "../Button/Button";

export default function ProductCard({
    image,
    title,
    description,
    imageToRight = false,
    isButtonReadMore = false,
    imageContainerClass = "",
    descriptionContainerClass = "",
    descriptionClass = "",
}) {
    return (
        <div
            className={`w-full flex justify-between max-sm:flex-col ${
                imageToRight ? "md:flex-row-reverse" : "md:flex-row"
            } gap-4 md:gap-6 p-4 bg-white rounded-lg`}
        >
            <div
                className={`${imageContainerClass} md:w-1/2  flex flex-row items-center justify-center`}
            >
                <Image
                    className="w-full rounded-md"
                    src={image}
                    alt="product image"
                />
            </div>
            <div
                className={`${descriptionContainerClass} md:w-1/2 flex flex-col gap-2 md:gap-4 justify-center`}
            >
                <h5 className="text-3xl font-bold text-gray-900">{title}</h5>
                <p
                    className={`${descriptionClass} font-normal text-gray-700 text-2xl whitespace-pre-wrap`}
                >
                    {description}
                </p>
                {isButtonReadMore && <ButtonReadMore />}
            </div>
        </div>
    );
}
