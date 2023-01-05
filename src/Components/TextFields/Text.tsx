import { useState } from "react";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { TextField } from "../../Interfaces";
import "./text.css";

const Text = ({ label, type, placeholder, className, onChange }: TextField) => {
  const [isObscured, setIsObscured] = useState<Boolean>(false);
  const [inputType, setInputType] = useState<string>(type);

  const showPassword = () => {
    setIsObscured(!isObscured);
    if (isObscured) setInputType("password");
    else setInputType("text");
  };

  return (
    <label>
      <div className="label">{label}</div>
      <input
        name={label.toLowerCase()}
        type={inputType}
        placeholder={placeholder}
        className={className}
        onChange={onChange}
      />
      {type === "password" && (
        <span className="eye" onClick={showPassword}>
          {isObscured ? <AiFillEyeInvisible /> : <AiFillEye />}
        </span>
      )}
    </label>
  );
};

export default Text;
