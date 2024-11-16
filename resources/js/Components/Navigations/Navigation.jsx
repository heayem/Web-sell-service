import React from "react";
import Menu from "./Menu";
import { menu_items } from "@/Constants/Variable";
import { ButtonLanguage } from "@/Components/Button/Button";
import SearchFrontend from "@/Components/Search/searchFrontend";
export default function Navigation() {
    return (
        <div className="w-screen flex flex-row justify-between items-center  bg-primary">
            {/* Logo */}
            <div className="w-32">Logo</div>
            <div className="w-full flex flex-row justify-center items-center gap-4 md:gap-6 p-2 md:p-4">
                {menu_items().map((item, index) => (
                    <Menu key={index} {...item} />
                ))}
            </div>
            <div className="w-44 flex flex-row justify-center items-center">
                <SearchFrontend />
                <ButtonLanguage />
            </div>
        </div>
    );
}
