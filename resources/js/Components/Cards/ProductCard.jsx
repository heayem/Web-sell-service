import { Image } from "primereact/image";
import React from "react";

export default function ProductCard(props) {
    const {
        image,
        title,
        description,
        imageToRight = false,
        isButtonReadMore = false,
        imageContainerClass = "w-1/2 flex flex-col items-center justify-center",
        descriptionContainerClass = "w-1/2 flex flex-col gap-2 justify-center",
        descriptionClass="font-normal text-gray-700 dark:text-gray-400",
    } = props;
    return (
        <>
            <div
                className={`w-full flex justify-between
                    ${imageToRight ? "flex-row-reverse" : "flex-row"}
                    gap-4 md:gap-6 p-4 bg-white rounded-lg dark:bg-gray-800 dark:border-gray-700`}
            >
                <div className={imageContainerClass}>
                    <Image
                        className="w-full rounded-md"
                        src={image}
                        alt="product image"
                    />
                </div>
                <div className={descriptionContainerClass}>
                    <h5 className="text-2xl font-bold text-gray-900 dark:text-white">
                        {title}
                    </h5>
                    <p className={descriptionClass}>
                        {description}
                    </p>
                    {isButtonReadMore && (
                        <button class="relative w-fit flex justify-center border px-2 py-1 rounded gap-2 items-center cursor-pointer text-sm md:text-md lg:text-lg text-blue-500 group overflow-hidden">
                            <p>Hello</p>
                            <i className="pi pi-arrow-right"></i>
                            <span class="absolute left-0 bottom-0 mb-0 flex h-1 w-0 translate-x-0 transform bg-blue-400 opacity-90 transition-all duration-300 ease-out group-hover:w-full"></span>
                        </button>
                    )}
                </div>
            </div>
        </>
    );
}
