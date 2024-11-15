import { Link } from "@inertiajs/react";
import React from "react";

export default function Menu(props) {
    const { href, name, ...rest } = props;
    return (
        <Link
            href={href}
            rest
            className="text-white py-1 px-2 md:py-1.5 md:px-2.5"
        >
            <p> {name}</p>
        </Link>
    );
}
