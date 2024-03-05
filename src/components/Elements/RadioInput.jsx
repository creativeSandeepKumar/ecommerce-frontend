import React, { useEffect, useId, useState } from "react";

const RadioInput = ({ type = "radio", name, label, options = [], value, className = "", validationErrorsName = false, handleChange, ...props }) => {

 const [selectedValue, setSelectedValue] = useState(value);
  const id = useId();

  useEffect(() => {
    setSelectedValue(value)
    
  }, [value])
  
  
  return (
    <div key={id}>
      {label && (
        <label className={`block w-full ${className}`} htmlFor={id}>
          {label}
        </label>
      )}
      {options.map((item) => (
        <label htmlFor={item} key={item} className="pr-3" >
          <input
            type={type}
            name={name}
            value={item}
            checked={ selectedValue === item} // Check if the value matches the item
            onChange={handleChange}
            {...props}
          />
          {item}
        </label>
      ))}
      {validationErrorsName && (
        <p className='text-red-800 text-xs'>{validationErrorsName}</p>
      )}
    </div>
  )
}

export default RadioInput;
