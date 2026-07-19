import type { Dispatch, SetStateAction } from "react";

interface InputTextProps {
    placeholder: string;
    value: string;
    setValue: Dispatch<SetStateAction<string>>;
}

export const InputText = ({ placeholder, value, setValue }: InputTextProps) => {
    return (
        <input
            type="text"
            placeholder={placeholder}
            className="bg-white border border-slate-300 outline-slate-400 px-4 py-2 rounded-md font-extralight text-slate-600"
            value={value}
            onChange={({ target }) => setValue(target.value)}
        />
    );
};
