import React, { useState, useEffect } from "react";
import { Icon } from "@iconify/react";
import { Dialog } from "primereact/dialog";
import { IconField } from "primereact/iconfield";
import { InputIcon } from "primereact/inputicon";
import { InputText } from "primereact/inputtext";
import { root } from "postcss";

export default function SearchFrontend() {
    const [visible, setVisible] = useState(false);
    const [position, setPosition] = useState("center");

    const show = (dialogPosition) => {
        setPosition(dialogPosition);
        setVisible(true);
    };

    // Close the dialog on Escape key press
    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === "Escape") {
                setVisible(false);
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, []);

    return (
        <>
            <Icon
                icon="mingcute:search-line"
                width="1.5em"
                height="1.5em"
                className="cursor-pointer text-white w-8"
                onClick={() => show("top")}
            />

            <Dialog
                visible={visible}
                position={position}
                closable={false}
                style={{ width: "50vw" }}
                breakpoints={{ "960px": "75vw", "641px": "100vw" }}
                modal
                onHide={() => setVisible(false)}
                draggable={false}
                resizable={false}
                ariaCloseLabel="Close search dialog"
                content={({ hide }) => (
                    <div className="flex flex-col bg-white rounded">
                        {/* Header */}
                        <div className="px-6 py-4 ">
                            <IconField iconPosition="right" className="w-full">
                                <InputIcon className="pi pi-search"></InputIcon>
                                <InputText
                                    placeholder="Search docs..."
                                    className="w-full"
                                />
                            </IconField>
                        </div>

                        {/* Body */}

                        {/* items search will show here */}

                        {/* Footer */}
                        <div className="flex flex-row justify-end border-t px-6 py-4 gap-4">
                            <span>
                                <span className="bg-gray-100 p-1 rounded">
                                    Esc
                                </span>
                                <span> to close</span>
                            </span>
                        </div>
                    </div>
                )}
            ></Dialog>
        </>
    );
}
