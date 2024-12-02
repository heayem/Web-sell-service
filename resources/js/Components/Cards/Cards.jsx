import React from "react";
import "primeicons/primeicons.css";
// Card Component
const Cards = ({ icon, title, desc, hoverColor }) => {
    return (
        <div
            className={`bg-white border border-gray-100 rounded-md shadow-md p-8 flex flex-col items-start transition-all duration-300 ${hoverColor}`}
        >
            <div className="flex items-center justify-between w-full mb-4">
                {icon}
                <h2 className="text-xl md:text-2xl font-bold">{title}</h2>
            </div>
            <p className="text-base md:text-lg">{desc}</p>
        </div>
    );
};

export { Cards };
