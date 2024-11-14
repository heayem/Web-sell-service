function ButtonReadMore({ icon, ...rest }) {
    return (
        <button
            {...rest}
            className="relative w-fit flex justify-center border px-2 py-1 rounded gap-2 items-center cursor-pointer text-sm md:text-md lg:text-lg text-blue-500 group overflow-hidden"
        >
            <span>Read more</span>
            {icon || <i className="pi pi-arrow-right"></i>}
            <span className="absolute left-0 bottom-0 mb-0 flex h-1 w-0 translate-x-0 transform bg-blue-400 opacity-90 transition-all duration-300 ease-out group-hover:w-full"></span>
        </button>
    );
}

export { ButtonReadMore };
