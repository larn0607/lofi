import React from 'react'


const Button = ({ className, onClick, children }) => {
  return (
    <button
      onClick={onClick}
      className={`btn${className ? ` ${className}` : ''}`}
    >
      {children}
    </button>
  )
}

export default Button