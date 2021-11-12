import React, { useState, useEffect, useRef } from 'react';

import './floating.css';
// import {getCSS, setCSS} from '../../../other_functions/cssFunctions.js';

// const canvasVisible = getCSS("--z-index-background-interface");
// const canvasInvisible = getCSS("--z-index-background-invisible");

// function setCanvasVisible(){
//   setCSS("--z-index-background-scene-text-interface", canvasVisible);
// }

// function setCanvasInvisible(){
//   setCSS("--z-index-background-scene-text-interface", canvasInvisible);
// }

// The current state of fps is stored as css
// We check the current css value to know if it's enabled
function getState(){
  //   let state = parseInt(getCSS("--z-index-background-scene-text-interface"), 10);
  //   let visible = parseInt(canvasVisible, 10);
    
  //   return (state === visible);
  return 30;
}

export default function FloatingSlider(props) {
  const [value, setValue] = useState(getState());

  useEffect(()=>{
    console.log(value);
  }, [value]);

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
        max="100" 
        value={`${value}`}
        onInput={handleOnChange}
        step="1" 
      />
      
    </div>
  );
}
