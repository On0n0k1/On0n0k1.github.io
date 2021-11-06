import React, { useState, useEffect, useRef } from 'react';

import './FPSCheckbox.css';
import {getCSS, setCSS} from '../../../other_functions/cssFunctions.js';



// --z-index-background-interface: -1;
// --z-index-background-visible: -2;
// --z-index-background-invisible: -3;

// --z-index-background-canvas-cube: var(--z-index-background-invisible);
// --z-index-background-canvas-birds: var(--z-index-background-invisible);
// --z-index-background-canvas-floating: var(--z-index-background-invisible);

// --z-index-background-scene-text-interface: var(--z-index-background-invisible);

// --z-index-background-div-cube: var(--z-index-background-canvas-cube);
// --z-index-background-div-birds: var(--z-index-background-canvas-birds);
// --z-index-background-div-floating: var(--z-index-background-canvas-floating);

// --z-index-front-content: 1;

// --z-index-menu-items: 99;

function canvasVisible(){
  let visible = getCSS("--z-index-background-interface");
  setCSS("--z-index-background-scene-text-interface", visible);
}

function canvasInvisible(){
  let invisible = getCSS("--z-index-background-invisible");
  setCSS("--z-index-background-scene-text-interface", invisible);
}

export default function FPSCheckbox(props) {
    const [isChecked, setIsChecked] = useState(false);

    const handleOnChange = () => {
      !isChecked && canvasVisible();
      isChecked && canvasInvisible();
      setIsChecked(!isChecked);
    };

    // <input
    //         type="checkbox"
    //         id="text-interface-checkbox"
    //         name="text-interface-checkbox"
    //         value="interface"
    //         checked={isChecked}
    //         onChange={handleOnChange}
    //       />


  //   <input
  //   type="checkbox"
  //   id={props.id}
  //   className="text-interface-checkbox"
  //   name={props.name}
  //   value={props.value}
  //   checked={isChecked}
  //   onChange={handleOnChange}
  // />

    // useEffect(props)
  
    return (
      <label className="text-interface-container">Show FPS
        <input
            type="checkbox"
            id={props.id}
            className="text-interface-checkbox"
            checked={isChecked}
            onChange={handleOnChange}
          />
        <span className="text-interface-checkmark"></span>
      </label>
    );
  }