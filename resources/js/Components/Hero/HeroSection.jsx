import React from "react";

function HeroWithContent(props) {
    const { image, title, description, url = "#", buttonLabel } = props;

    return (
        <div className="container h-[80vh] md:h-[85vh] lg:h-[88vh] flex  flex-col md:flex-row relative">
            <div className="flex-1 flex flex-col justify-center text-left md:text-left">
                <h1 className="max-w-2xl mb-4 text-2xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
                    {title}
                </h1>
                <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 max-sm:text-sm max-md:text-4xl lg:text-3xl">
                    {description}
                </p>
                <a
                    href={url}
                    className="relative w-fit flex justify-center border px-5 py-3 mr-3 rounded-lg font-medium gap-2 items-center text-sm md:text-md lg:text-lg bg-primary text-center text-white hover:bg-blue-500 focus:ring-4 focus:ring-blue-300 dark:focus:ring-orange-900 group overflow-hidden"
                >
                    {buttonLabel}
                </a>
            </div>
            <div className="flex-1 flex items-center justify-center">
                <img
                    src={image}
                    alt="Hero background"
                    className="w-full md:w-3/4 h-auto rounded-md object-cover"
                />
            </div>
        </div>
    );
}

function HeroWithDescription(props) {
    const { image, description } = props;

    return (
        <div className="w-full h-[80vh] md:h-[85vh] lg:h-[88vh] flex flex-col md:flex-row relative">
            <div className="flex-1 flex flex-col justify-center p-8 md:p-16 text-left md:text-left">
                <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 max-sm:text-sm max-md:text-4xl lg:text-3xl">
                    {description}
                </p>
            </div>
            <div className="flex-1 flex items-center justify-center">
                <img
                    src={image}
                    alt="Hero background"
                    className="w-full md:w-3/4 h-auto rounded-md object-cover"
                />
            </div>
        </div>
    );
}

function HeroWithoutContent(props) {
    const { image, ...rest } = props;

    return (
        <div className="w-full h-[50vh] md:h-[85vh] lg:h-[88vh] relative">
            <img
                className=" object-cover"
                src={image}
                {...rest}
                alt="Hero background"
            />
        </div>
    );
}

export { HeroWithContent, HeroWithDescription, HeroWithoutContent };
