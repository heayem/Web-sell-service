import React from "react";
import { InputText } from "primereact/inputtext";
import { FloatLabel } from "primereact/floatlabel";

export default function InputFloatLabel({ onChange, value, label, htmlFor }) {
    return (
        <div className="flex items-center justify-center">
            <FloatLabel className="w-full">
                <InputText
                    className="w-full"
                    id={htmlFor}
                    value={value}
                    onChange={onChange}
                />
                <label htmlFor={htmlFor}>{label}</label>
            </FloatLabel>
        </div>
    );
}
