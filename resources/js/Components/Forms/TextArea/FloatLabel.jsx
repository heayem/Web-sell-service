import React from "react";
import { InputTextarea } from "primereact/inputtextarea";
import { FloatLabel } from "primereact/floatlabel";

export default function TextAreaFloatLabel({
    onChange,
    value,
    label,
    htmlFor,
    rows,
    cols,
}) {
    return (
        <div className=" flex justify-center">
            <FloatLabel className="w-full">
                <InputTextarea
                    className="w-full"
                    id={htmlFor}
                    value={value}
                    onChange={onChange}
                    rows={rows || 5}
                    cols={cols || 3}
                />
                <label htmlFor={htmlFor}>{label}</label>
            </FloatLabel>
        </div>
    );
}
