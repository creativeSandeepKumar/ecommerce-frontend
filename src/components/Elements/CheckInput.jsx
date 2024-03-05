import React, { useEffect, useId, useState } from "react";

const CheckInput = ({
  type = "checkbox",
  name,
  label,
  options = [],
  value,
  className = "",
  validationErrorsName = false,
  handleChange,
  ...props
}) => {
  const [selectedValue, setSelectedValue] = useState(value);
  const id = useId();

  useEffect(() => {
    setSelectedValue(value);
  }, [value]);

  return (
    <div key={id}>
      {label && (
        <label className={`block w-full ${className}`} htmlFor={id}>
          {label}
        </label>
      )}
      <div className="flex justify-start gap-1 md:gap-2 flex-wrap">
        {options.map((item, index) => (
          <label key={item} htmlFor={item} className="pr-3">
            <input
              type={type}
              name={name}
              value={item}
              checked={value.includes(item)} // Check if the value matches the item
              onChange={handleChange}
            />
            {item}
          </label>
        ))}
      </div>
      {validationErrorsName && (
        <p className="text-red-800 text-xs">{validationErrorsName}</p>
      )}
    </div>
  );
};

export default CheckInput;
