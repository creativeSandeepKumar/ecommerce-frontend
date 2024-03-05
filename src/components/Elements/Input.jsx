import React, { useId } from "react";

const Input = ({
  label,
  type = "text",
  className = "",
  value,
  handleChange = false,
  placeholder = "",
  validationErrorsName = false,
  inputIcon,
  ExtraIcon,
  name,
  ReactIcon,
  togglePassword = false,
  ...props
}) => {
  const id = useId();

  return (
    <div className="relative">
      {label && (
        <label className={`${type !== "checkbox" ? "block w-full" : "pr-8"} ${className}`} htmlFor={id}>
          {label}
        </label>
      )}
      <div className="relative">
      <input
      name={name}
        type={type}
        className={`${type !== "checkbox" ? `w-full block` : ""} border-2 border-gray-300 rounded-md p-1 ${ReactIcon && 'px-8'} ${className}`} 
        value={value}
        onChange={handleChange}
        id={id}
        placeholder={placeholder}
        {...props}
      />
             {validationErrorsName && (
      <p className='text-red-800 text-xs'>{validationErrorsName}</p>
    )}
    {inputIcon && (
     <span className="absolute top-8 left-3">
        <i className={inputIcon}></i> 
    </span>
    )}
    {ReactIcon && (
      <span className="absolute top-2 left-2 text-xl">
      <ReactIcon/>
      </span>
    )}
    {ExtraIcon && (
     <span
          className="absolute top-2 right-3 text-2xl"
          onClick={togglePassword}
        >
            <ExtraIcon/>
        </span>)
}
</div>
    </div>
  );
};

export default Input;
