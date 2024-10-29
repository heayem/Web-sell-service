export default function HeroSection(props) {
    const {
        title,
        description,
        isButton = false,
        url = '#',
        buttonLabel,
    } = props;
    return (
        <>
            <section className="h-screen">

                <div className={`w-full bg-center h-full bg-[url('/images/placeholder.png')] flex justify-center items-center`}>
                    <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
                        <div className="mr-auto place-self-center lg:col-span-7">
                            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
                                {title}
                            </h1>
                            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
                                {description}
                            </p>
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
                </div>
            </section>
        </>
    );
}
