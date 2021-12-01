import React, { useState, useEffect, useRef } from 'react';

import {getCSS, setCSS} from '../../../other_functions/cssFunctions.js';

import './checkbox.css';

// Get the css z-index for when fps canvas should be visible.
const canvasVisible = getCSS("--z-index-background-interface");
// Get the css z-index for when fps canvas should be hidden.
const canvasInvisible = getCSS("--z-index-background-invisible");

// Sets fps canvas as visible.
// Just change the z-index of fps canvas.
function setCanvasVisible(){
  setCSS("--z-index-background-scene-text-interface", canvasVisible);
}

// Sets fps canvas invisible (below all the other canvas).
// FPS canvas just calculate and draw once every 15 frames.
// So it's runtime costs is irrelevant. It never pauses.
function setCanvasInvisible(){
  setCSS("--z-index-background-scene-text-interface", canvasInvisible);
} 

// Returns the current state of fps canvas (true or false).
// The current state of fps is stored as css
// We check the current css value to know if it's enabled
function getState(){
  let state = parseInt(getCSS("--z-index-background-scene-text-interface"), 10);
  let visible = parseInt(canvasVisible, 10);
  
  return (state === visible);
}

// Renders a checkbox that controls when fps is enabled or not.
export default function FPSCheckbox(props) {
  const [isChecked, setIsChecked] = useState(getState());

  useEffect(()=>{
    // The instruction after && is only executed when the condition behind is true.
    isChecked && setCanvasVisible();
    !isChecked && setCanvasInvisible();
  }, [isChecked]);

  const handleOnChange = () => {
    // Inverts the state of the checkbox.
    setIsChecked(!isChecked);
  };


  return (
    <label className="checkbox-container">Show FPS
      <input
          type="checkbox"
          id={props.id}
          checked={isChecked}
          onChange={handleOnChange}
        />
      <span className="checkbox-checkmark"></span>
    </label>
  );
}
