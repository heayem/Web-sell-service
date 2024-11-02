import React from "react";

export default function Hero(props) {
    const { image, title, description, isButton = false, url = '#', buttonLabel } = props;

    return (
        <div className="w-full md:h-screen relative">
            <img
                src={image}
                alt="Hero background"
                className="w-full md:h-screen object-cover"
            />
            <div className="absolute inset-0 flex flex-col items-start justify-center max-sm:p-4 max-md:p-8 max-lg:p-16 xl:p-20 text-left bg-black bg-opacity-35">
                <h1 className="max-w-2xl mb-4 text-2xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-white">
                    {title}
                </h1>
                <p className="max-w-2xl mb-6 font-light text-white lg:mb-8 max-sm:text-sm max-md:text-4xl lg:text-3xl">
                    {description}
                </p>
                {isButton && (
                    <a
                        href={url}
                        className=" inline-flex items-center justify-center px-5 py-3 text-base font-medium bg-orange-400 text-center text-white rounded-lg hover:bg-orange-500 focus:ring-4 focus:ring-orange-300"
                    >
                        {buttonLabel}
                    </a>
                )}
            </div>
        </div>
    );
}
