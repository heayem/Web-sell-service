import { Image } from "primereact/image";
import React from "react";
import { ButtonReadMore } from "../Button/Button";

function ProductCardImageLeftHasReadMore({ image, title, description }) {
    return (
        <div className="w-full flex justify-between max-sm:flex-col md:flex-row gap-4 md:gap-6 py-8 my-8 bg-[#EEEEEE] rounded-lg">
            <div className=" md:w-1/2  flex flex-row items-center justify-center">
                <Image
                    className="w-full rounded-md"
                    src={image}
                    alt="product image"
                />
            </div>
            <div className="md:w-1/2 flex flex-col gap-2 md:gap-4 justify-center">
                <h5 className="text-3xl font-bold text-gray-900">{title}</h5>
                <p className=" text-gray-700 text-2xl whitespace-pre-wrap">
                    {description}
                </p>
                {<ButtonReadMore />}
            </div>
        </div>
    );
}

function ProductCardImageRightHasReadMore({ image, title, description }) {
    return (
        <div className="w-full flex justify-between max-sm:flex-col-reverse md:flex-row gap-4 md:gap-6 py-8 my-8 bg-[#EEEEEE] rounded-lg">
            <div className="md:w-1/2 flex flex-col gap-2 md:gap-4 justify-center">
                <h5 className="text-3xl font-bold text-gray-900">{title}</h5>
                <p className=" text-gray-700 text-2xl whitespace-pre-wrap">
                    {description}
                </p>
                {<ButtonReadMore />}
            </div>
            <div className=" md:w-1/2  flex flex-row items-center justify-center">
                <Image
                    className="w-full rounded-md"
                    src={image}
                    alt="product image"
                />
            </div>
        </div>
    );
}

function ProductCardImageLeft({ image, title, description }) {
    return (
        <div className="w-full flex justify-between max-sm:flex-col md:flex-row gap-4 md:gap-6 py-8 my-8 rounded-lg">
            <div className=" md:w-1/2  flex flex-row items-center justify-center">
                <Image
                    className="w-full rounded-md"
                    src={image}
                    alt="product image"
                />
            </div>
            <div className="md:w-1/2 flex flex-col gap-2 md:gap-4 justify-center">
                <h5 className="text-3xl font-bold text-gray-900">{title}</h5>
                <p className=" text-gray-700 text-2xl whitespace-pre-wrap">
                    {description}
                </p>
            </div>
        </div>
    );
}

function ProductCardImageRight({ image, title, description }) {
    return (
        <div className="w-full flex justify-between max-sm:flex-col-reverse md:flex-row gap-4 md:gap-6 py-8 my-8  rounded-lg">
            <div className="md:w-1/2 flex flex-col gap-2 md:gap-4 justify-center">
                <h5 className="text-3xl font-bold text-gray-900">{title}</h5>
                <p className=" text-gray-700 text-2xl whitespace-pre-wrap">
                    {description}
                </p>
            </div>
            <div className=" md:w-1/2  flex flex-row items-center justify-center">
                <Image
                    className="w-full rounded-md"
                    src={image}
                    alt="product image"
                />
            </div>
        </div>
    );
}

export {
    ProductCardImageLeftHasReadMore,
    ProductCardImageRightHasReadMore,
    ProductCardImageLeft,
    ProductCardImageRight,
};
