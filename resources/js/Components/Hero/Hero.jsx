import React from "react";

export default function Hero(props) {
    const { image, title, description, isButton = false, url = '#', buttonLabel } = props;

    return (
        <div className="w-full relative">
            <img
                src={image}
                alt="Hero background"
                className="w-full h-screen object-cover"
            />
            <div className="absolute inset-0 flex flex-col items-start justify-center pl-8 md:pl-16 text-left">
                <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
                    {title}
                </h1>
                <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
                    {description}
                </p>
                {}
                {isButton && (
                    <a
                        href={url}
                        className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium bg-orange-400 text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
                    >
                        {buttonLabel}
                    </a>
                )}
            </div>
        </div>
    );
}
