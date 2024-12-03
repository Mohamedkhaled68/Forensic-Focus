import React, { ChangeEventHandler } from "react";

export interface FormGroupProps {
    label: string;
    onChange: ChangeEventHandler<HTMLInputElement>;
    value: string;
    placeholder?: string;
    inputStyle?: string;
    id: string;
    type: string;
    containerStyle?: string;
    labelStyle?: string;
}

const FormGroup: React.FC<FormGroupProps> = ({
    label,
    onChange,
    value,
    placeholder = "",
    inputStyle = "",
    id,
    type,
    containerStyle = "",
    labelStyle = "",
}) => {
    return (
        <div className={`flex flex-col gap-[16px] mb-[24px] ${containerStyle}`}>
            <label
                className={`text-body-18-m text-blue-900 ${labelStyle}`}
                htmlFor={id}
            >
                {label}
            </label>
            <input
                onChange={onChange}
                value={value}
                className={`p-[16px] rounded-[10px] border-[1px] border-blue-500 outline-none placeholder:text-body-14-r placeholder:text-neutral-1-400 ${inputStyle}`}
                placeholder={placeholder}
                type={type}
                name={id}
                id={id}
            />
        </div>
    );
};

export default FormGroup;
