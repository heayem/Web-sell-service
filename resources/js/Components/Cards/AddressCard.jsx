import React from "react";

export default function AddressCard({ cssWrapper, iconDes }) {
    return (
        <div
            className={`${cssWrapper} w-full flex flex-col max-sm:items-center`}
        >
            {iconDes.map((item, index) => (
                <div key={index} className="w-full flex flex-col">
                    <div className="w-full flex flex-row max-sm:flex-col items-center gap-4">
                        <span className="text-gray-600 ">{item.icon}</span>
                        <p className="w-4/5 max-sm:text-center">
                            {item.description}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
}
