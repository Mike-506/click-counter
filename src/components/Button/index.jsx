import React from 'react';

const Button = ({ text, isClick, handleClick }) => {
  return(
    <button
      className={ isClick ? 'click-button' : 'reset-button' }
      onClick={handleClick}
      >
      {text}
    </button>
  )  
}

export default Button;