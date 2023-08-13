import React from 'react'

const CustomButton = ({title,handleClick}) => {
  return (
    <button 
        disabled={false}
        className='custom-btn'
        onClick={handleClick}
    >
        <span className={'flex-1'}>
            {title}
        </span>
    </button>
  )
}

export default CustomButton