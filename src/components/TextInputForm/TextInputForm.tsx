import React, { ChangeEvent, FormEvent, SyntheticEvent, useState } from "react";
import Button from "../Button/Button";
import TextInput from "../TextInput/TextInput";

type TextInputFormProps = {
  onSubmit?: (text: string) => void;
};

const TextInputForm = ({ onSubmit }: TextInputFormProps) => {
  const [value, setValue] = useState("");
  const [visible, setVisible] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value || "";
    setValue(value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit?.(value);
  };

  const handleToggle = (e: SyntheticEvent) => {
    e.preventDefault();
    setVisible((v) => !v);
  };

  return (
    <form className="flex" onSubmit={handleSubmit}>
      <div className="flex-1 mr-2">
        <TextInput
          label="Enter a word or phrase"
          onChange={handleChange}
          type={visible ? "text" : "password"}
        />
      </div>
      <div className="flex-initial">
        <Button text="<0>" onClick={(e) => handleToggle(e)} type="button" />
      </div>
      <div className="flex-initial">
        <Button text="OK" type="submit" />
      </div>
    </form>
  );
};

export default TextInputForm;
