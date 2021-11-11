import React, { useState, useEffect, useRef } from 'react';

import './checkbox.css';
import {getCSS, setCSS} from '../../../other_functions/cssFunctions.js';

const canvasVisible = getCSS("--z-index-background-interface");
const canvasInvisible = getCSS("--z-index-background-invisible");

function setCanvasVisible(){
  setCSS("--z-index-background-scene-text-interface", canvasVisible);
}

function setCanvasInvisible(){
  setCSS("--z-index-background-scene-text-interface", canvasInvisible);
}

// The current state of fps is stored as css
// We check the current css value to know if it's enabled
function getState(){
  let state = parseInt(getCSS("--z-index-background-scene-text-interface"), 10);
  let visible = parseInt(canvasVisible, 10);
  
  return (state === visible);
}

export default function FPSCheckbox(props) {
  const [isChecked, setIsChecked] = useState(getState());

  useEffect(()=>{
    isChecked && setCanvasVisible();
    !isChecked && setCanvasInvisible();
  }, [isChecked]);

  const handleOnChange = () => {
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
