import { Image } from "primereact/image";
import React from "react";
import { ButtonReadMore } from "../Button/Button";
import { Head } from "@inertiajs/react";
import { Heading } from "../Typography/Heading";

function ProductCardImageLeftHasReadMore({
    image,
    title,
    description,
    heading,
}) {
    return (
        <>
            <div className="w-full mx-auto   relative">
                {heading && (
                    <div className="w-full flex justify-center text-center p-4 md:p-8">
                        <Heading title={heading} />
                    </div>
                )}
                <div className="w-full flex justify-between max-sm:flex-col md:flex-row gap-4 md:gap-6 px-8 p-4 bg-[#EEEEEE] rounded-lg">
                    <div className=" md:w-1/2  flex flex-row items-center justify-center">
                        <Image
                            className="w-full rounded-md"
                            src={image}
                            alt="product image"
                        />
                    </div>
                    <div className="md:w-1/2 flex flex-col gap-2 md:gap-4 justify-center">
                        <h5 className="text-3xl text-start font-bold text-gray-900">
                            {title}
                        </h5>
                        <p className=" text-gray-700 text-2xl whitespace-pre-wrap text-start">
                            {description}
                        </p>
                        {<ButtonReadMore />}
                    </div>
                </div>
            </div>
        </>
    );
}

function ProductCardImageRightHasReadMore({
    image,
    title,
    description,
    heading,
}) {
    return (
        <>
            <div className="w-full mx-auto text-center relative">
                {heading && (
                    <div class="p-4 md:p-8">
                        <h2
                            className={
                                "font-bold uppercase text-2xl text-blue-800"
                            }
                        >
                            {heading}
                        </h2>
                    </div>
                )}
                <div className="w-full flex justify-between max-sm:flex-col md:flex-row gap-4 md:gap-6 px-8 p-4 bg-[#EEEEEE] rounded-lg">
                    <div className="md:w-1/2 flex flex-col gap-2 md:gap-4 justify-center">
                        <h5 className="text-3xl text-start font-bold text-gray-900">
                            {title}
                        </h5>
                        <p className=" text-gray-700 text-2xl whitespace-pre-wrap text-start">
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
            </div>
        </>
    );
}

function ProductCardImageLeft({ image, title, description, heading }) {
    return (
        <>
            <div className="w-full mx-auto text-center py-8 my-8 relative">
                <h2 className={"font-bold uppercase text-2xl text-blue-800"}>
                    {heading}
                </h2>

                <div className="w-full flex justify-between max-sm:flex-col md:flex-row gap-4 md:gap-6 rounded-lg">
                    <div className=" md:w-1/2  flex flex-row items-center justify-center">
                        <Image
                            className="w-full rounded-md"
                            src={image}
                            alt="product image"
                        />
                    </div>
                    <div className="md:w-1/2 flex flex-col gap-2 md:gap-4 justify-center ">
                        <h5 className="text-3xl text-start font-bold text-gray-900">
                            {title}
                        </h5>
                        <p className=" text-gray-700 text-2xl whitespace-pre-wrap text-start">
                            {description}
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}

function ProductCardImageRight({ image, title, description, heading }) {
    return (
        <>
            <div className="w-full mx-auto text-center py-8 my-8 relative">
                <h2 className={"font-bold uppercase text-2xl text-blue-800"}>
                    {heading}
                </h2>

                <div className="w-full flex justify-between max-sm:flex-col-reverse md:flex-row gap-4 md:gap-6 rounded-lg">
                    <div className="md:w-1/2 flex flex-col gap-2 md:gap-4 justify-center">
                        <h5 className="text-3xl text-start font-bold text-gray-900">
                            {title}
                        </h5>
                        <p className=" text-gray-700 text-2xl whitespace-pre-wrap text-start">
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
            </div>
        </>
    );
}

export {
    ProductCardImageLeftHasReadMore,
    ProductCardImageRightHasReadMore,
    ProductCardImageLeft,
    ProductCardImageRight,
};
