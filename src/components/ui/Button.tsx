import React, { ButtonHTMLAttributes } from 'react'

// props interface extending from html button attributes 
interface props extends ButtonHTMLAttributes<HTMLButtonElement> {
  full?: boolean;
}

const Button: React.FC<props> = ({ children, full, className, ...props }) => {
  return (
    <button {...props} className={`${className ?? ""} ${full ? "w-full" : "btn-wide"} py-2 btn btn-info btn-xs sm:btn-sm md:btn-md lg:btn-lg`}>
      {children}
    </button>
  )
}

export default Button
