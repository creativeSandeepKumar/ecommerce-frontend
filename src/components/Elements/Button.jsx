import React from 'react'
import { useNavigate } from 'react-router-dom'

const Button = ({classnames, text, navigateurl}) => {
        const navigate = useNavigate();

        const handleNavigate = () => {
            if(navigateurl) {
                navigate(navigateurl)
            }
        }

  return (
    <button onClick={handleNavigate} className={`${classnames} btn-color btnHover text-white px-4 py-1 rounded-md`} >{text}</button>
  )
}

export default Button