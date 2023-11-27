import React from "react";

const FormField = ({
  htmlFor,
  type,
  value,
  maxLength,
  inputName,
  onChange,
  placeholder, className
}) => {
  return (
    <div>
      <label htmlFor={htmlFor}>
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          maxLength={maxLength}
          name={inputName} required
          className={className}
        />
      </label>
    </div>
  );
};

export default FormField;
