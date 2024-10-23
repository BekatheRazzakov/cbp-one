import React, { useState } from "react";
import "./rippleButton.css";

const RippleButton = ({
  style,
  children
}) => {
  const [ripples, setRipples] = useState([]);
  
  const createRipple = (event) => {
    const button = event.currentTarget;
    const rect = button.getBoundingClientRect();
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;
    
    if (event.type === "mousedown" && /android|iPhone|iPad|iPod|windows phone/i.test(userAgent)) return;
    
    const isTouchEvent = event.type === "touchstart";
    const clientX = isTouchEvent ? event.touches[0].clientX : event.clientX;
    const clientY = isTouchEvent ? event.touches[0].clientY : event.clientY;
    
    const size = Math.max(rect.width, rect.height);
    const x = clientX - rect.left - size / 2;
    const y = clientY - rect.top - size / 2;
    
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
      style={style}
      onMouseDown={createRipple}
      onTouchStart={createRipple}
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
