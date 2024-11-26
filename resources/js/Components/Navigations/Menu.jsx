import { Link, usePage } from "@inertiajs/react";
import React from "react";

export default function Menu(props) {
    const { href, name, ...rest } = props;
    const { url } = usePage();

    const baseUrl = url.split("?")[0];
    const baseHref = href.split("?")[0];
    const isActive = baseUrl === baseHref;

    return (
        <Link
            href={href}
            rest
            className={`w-fit py-1 px-2 md:py-1.5 md:px-2.5 group relative 
                ${isActive ? "text-blue-500" : "text-white"}`}
        >
            <p> {name}</p>
            <span className="absolute left-0 bottom-0 mb-0 flex h-1 w-0 translate-x-0 transform bg-blue-400 opacity-90 transition-all duration-300 ease-out group-hover:w-full"></span>
        </Link>
    );
}
