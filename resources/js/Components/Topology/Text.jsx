import React from "react";

function Text({ iconLeft, iconRight, text, ...rest }) {
    return (
        <div {...rest} className="flex items-center">
            {iconLeft}
            <p>{text}</p>
            {iconRight}
        </div>
    );
}
export { Text };
