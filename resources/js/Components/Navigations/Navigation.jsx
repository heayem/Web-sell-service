import React from "react";
import Menu from "./Menu";
import { menu_items } from "@/Constants/Variable";
import { ButtonLanguage } from "@/Components/Button/Button";
import SearchFrontend from "@/Components/Search/searchFrontend";
import { Icon } from "@iconify/react";
import { Image } from "primereact/image";

export default function Navigation() {
    const [visible, setVisible] = React.useState(false);

    return (
        <>
            <div className="w-screen bg-primary p-2">
                {/* Mobile Menu Toggle Button */}
                <button
                    onClick={() => setVisible(!visible)}
                    className="md:hidden bg-primary p-1 border rounded"
                >
                    <Icon
                        icon={
                            visible
                                ? "iconamoon:sign-times-light"
                                : "pepicons-print:menu"
                        }
                        className={visible ? "text-red-500" : "text-white"}
                        width="2em"
                        height="2em"
                    />
                </button>

                {/* Mobile Menu */}
                <div
                    className={`${
                        visible
                            ? "w-4/5 shadow-md absolute top-14 left-2"
                            : "hidden"
                    } md:hidden flex flex-col bg-primary`}
                >
                    <div className="w-32">
                        <Image
                            src="/images/logo.png"
                            alt="logo"
                            width="100%"
                            height="100%"
                        />
                    </div>

                    <div className="w-full flex flex-col gap-4 p-4">
                        {menu_items().map((item, index) => (
                            <Menu key={index} {...item} />
                        ))}
                    </div>

                    <div className="flex flex-row items-center max-sm:p-4">
                        <SearchFrontend />
                        <ButtonLanguage />
                    </div>
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex w-full flex-row justify-between items-center bg-primary">
                    <div className="w-32">
                        <Image
                            src="/images/logo.png"
                            alt="logo"
                            width="100%"
                            height="100%"
                        />
                    </div>

                    <div className="w-full flex flex-row justify-center items-center gap-6 p-4">
                        {menu_items().map((item, index) => (
                            <Menu key={index} {...item} />
                        ))}
                    </div>

                    <div className="w-44 flex flex-row justify-center items-center">
                        <SearchFrontend />
                        <ButtonLanguage />
                    </div>
                </div>
            </div>
        </>
    );
}
