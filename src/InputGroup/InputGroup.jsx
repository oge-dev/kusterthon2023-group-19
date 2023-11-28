import React from "react";
import "./InputGroup.css"


export default function InputGroup({
  type,
  onChange,
  placeholder,
  id,
  name,
  value,
  label,
  autoComplete,
  defaultValue,
  error,
  className,
  autoFocus,
}) {
  return (
    <div className="field__wrap">
      <label htmlFor="email">{label}</label>
      <input
        type={type}
        name={name}
        id={id}
        placeholder={placeholder}
        value={value}
        defaultValue={defaultValue}
        onChange={onChange}
        className={className}
      />
      {error && <span className="field__error">{error}</span>}
    </div>
  );
}
