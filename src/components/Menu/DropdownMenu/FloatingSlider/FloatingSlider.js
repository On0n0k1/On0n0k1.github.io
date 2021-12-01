import React, { useState, useEffect } from 'react';

import './floating.css';


// Used by configs, which is used by DropdownMenu.
// Renders a slider that controls how many cubes to render.
export default function FloatingSlider(props) {
  // Closure that sets how many cubes are rendered.
  let setFloatingLength = props.setFloatingLength;
  // Closure that gets the number of rendered cubes.
  let getFloatingMaxLength = props.getFloatingMaxLength;

  // State for the slider.
  const [value, setValue] = useState(props.getFloatingLength());

  // When state changes, set the number of cubes.
  useEffect( () => {
    setFloatingLength(value);
  }, [value]);

  // Closure for changing state. Used in input event.
  const handleOnChange = (e) => {
    setValue(parseInt(e.target.value, 10));
  };


  return (
    
    <div className="floating-slider">
      <label className="floating-slider" htmlFor="floating-slider">{value} Cubes: </label>
      <input 
        type="range" 
        id="floating-slider" 
        name="floating-slider" 
        min="0" 
        max={ `${getFloatingMaxLength()}` }
        value={`${value}`}
        onInput={handleOnChange}
        step="1" 
      />
      
    </div>
  );
}
