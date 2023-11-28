import React from "react";

export  default function TextArea ({className,  onChange, placeholder, id,error, name, value, defaultValue, label }) {
    return (
        <div className="field__wrap">
            <label className="field__label">
                {label}
            </label>
            <textarea
            cols="50"
            rows="5" 
                value={value} 
                onChange={onChange}
                id={id}
                placeholder={placeholder}
                name={name}
                defaultValue={defaultValue}
                className={className}
    
            />
            {error && <p className="field__error">{error}</p>}
        </div>
    );
  };