import React from "react";

// Heading component
function Heading({ iconLeft, iconRight, title, position, ...rest }) {
    return (
        <div {...rest} className={`w-fit flex justify-start items-center`}>
            {iconLeft}
            <h2 className="font-bold uppercase text-center text-2xl text-blue-800">
                {title}
            </h2>
            {iconRight}
        </div>
    );
}

// Subheading component
function Subheading({ iconLeft, iconRight, subheading, position, ...rest }) {
    return (
        <div {...rest} className={`flex items-center`}>
            {iconLeft}
            <h3>{subheading}</h3>
            {iconRight}
        </div>
    );
}
export { Heading, Subheading };
