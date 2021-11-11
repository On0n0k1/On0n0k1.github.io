import React, { useState, useEffect, useRef } from 'react';

import './checkbox.css';
import {getCSS, setCSS} from '../../../other_functions/cssFunctions.js';

const indexCubeControlled = getCSS("--z-index-cube-controlled");
const indexBackgroundVisible = getCSS("--z-index-background-visible");

function cubeControlled(){
  // let cubeControlled = getCSS("--z-index-cube-controlled");
  setCSS("--z-index-background-canvas-cube", indexCubeControlled);
}

function cubeBackground(){
  // let cubeVisible = getCSS("--z-index-background-visible");
  setCSS("--z-index-background-canvas-cube", indexBackgroundVisible);
}


export default function CubeCheckbox(props) {
    const [isChecked, setIsChecked] = useState(false);

    useEffect(()=>{
      isChecked && cubeControlled();
      !isChecked && cubeBackground();
    },[isChecked])

    const handleOnChange = () => {
      setIsChecked(!isChecked);
    };

  
    return (
      <label className="checkbox-container">Control cube
        <input
            type="checkbox"
            id={props.id}
            checked={isChecked}
            onChange={handleOnChange}
          />
        <span id="cube-control" className="checkbox-checkmark"></span>
      </label>
    );
  }

