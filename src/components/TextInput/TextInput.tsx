import React, { ChangeEvent } from "react";

export type TextInputProps = {
  label?: string;
  type?: "number" | "password" | "text";
  value?: "string";
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
};
const TextInput = ({
  label,
  onChange,
  type = "text",
  value,
}: TextInputProps) => {
  return (
    <label className="TextInput block">
      {label && <span className="sr-only">{label}</span>}
      <input
        className="px-4 py-2 border border-gray-500 rounded-md w-full"
        onChange={onChange}
        placeholder={label}
        type={type}
        value={value}
      />
    </label>
  );
};

export default TextInput;
