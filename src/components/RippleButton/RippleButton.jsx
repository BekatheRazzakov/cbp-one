import React, { useState } from "react";
import "./rippleButton.css";

const RippleButton = ({ children }) => {
  const [ripples, setRipples] = useState([]);
  
  const createRipple = (event) => {
    const button = event.currentTarget;
    const rect = button.getBoundingClientRect();
    
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;
    
    const newRipple = {
      id: new Date().getTime(),
      style: {
        width: `${size}px`,
        height: `${size}px`,
        top: `${y}px`,
        left: `${x}px`,
      },
    };
    
    setRipples((prevRipples) => [
      ...prevRipples,
      newRipple
    ]);
    
    setTimeout(() => {
      setRipples((prevRipples) =>
        prevRipples.filter((ripple) => ripple.id !== newRipple.id)
      );
    }, 1200);
  };
  
  return (
    <button
      className='ripple-button'
      onMouseDown={createRipple}
    >
      {children}
      {ripples.map((ripple) => (
        <span
          key={ripple.id}
          className='ripple'
          style={ripple.style}
        />
      ))}
    </button>
  );
};

export default RippleButton;
