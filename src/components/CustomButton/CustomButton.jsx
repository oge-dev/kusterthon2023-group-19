import React from 'react'

const CustomButton = ({children}) => {
  return (
    <div className='custom-btn'>
      <button>{children}</button>
    </div>
  )
}

export default CustomButton;