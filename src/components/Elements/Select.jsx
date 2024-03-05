
import React, {useId} from 'react'

const Select = ({
    options,
    idoptions,
    name = "",
    value = "",
    label,
    handleChange,
    defaultText,
    userIcon,
    ReactIcon,
    className,
    validationErrorsName,
    ...props
}) => {
    const YearShow = ["experience", "age"]
    const id = useId();

  return (
    <div className="relative">
        {label && <label htmlFor={id} className={`block w-full ${className}`}>{label}</label>}
        <div className='relative'>
        <select
        name={name}
        value={value}
        onChange={handleChange}
        {...props}
        id={id}
        className={`border-2 border-gray-300 block w-full rounded-md p-1 ${ReactIcon && "px-8"} ${className}`}
        >
          {defaultText && (
             <option value="" disabled>
             {defaultText}
           </option>
          )}
          
            {options?.map((option, index) => (
                <option key={option} value={idoptions ? idoptions[index] : option}>
                    {option == "0.5" ? "0-6 months" : option} {YearShow.includes(name) && option != "0.5" && option !== "0" ? "year" : ""}
                </option>
            ))}
        </select>
        {validationErrorsName && (
      <p className='text-red-800 text-xs'>{validationErrorsName}</p>
    )}
        {userIcon && (
        <span className="absolute top-8 left-3">
          <i className={userIcon}></i>
        </span>
        )}
        {ReactIcon && (
        <span className="absolute top-2 left-2 text-xl">
         <ReactIcon/>
        </span>
        )}
        </div>
    </div>
  )
}

export default Select;