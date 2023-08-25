import React from "react";
import "./input.scss";

export default function InputBox(props) {
  const {
    type,
    label,
    value,
    placeholder,
    className,
    img,
    demo,
    name,
    onChange,
    errorMsg,
  } = props;
  //console.log("demo",demo)
  //const isClient = typeof window !== 'undefined';
  return (
    <div className="form-box">
      <label htmlFor={label}>{label}</label>
      <input
        type={type}
        value={value}
        placeholder={placeholder}
        className={className}
        name={name}
        onChange={onChange}
      />

      {!demo ? (
        <span className="input-icon">
          <img src={img} alt="St Logo" />
        </span>
      ) : null}
      {errorMsg && <p className="error-message">{errorMsg}</p>}
    </div>
  );
}
