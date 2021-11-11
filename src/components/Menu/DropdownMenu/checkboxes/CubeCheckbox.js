import React, { useState, useEffect, useRef } from 'react';

import './checkbox.css';
import {getCSS, setCSS} from '../../../other_functions/cssFunctions.js';

// /* background 3d canvas */
// --z-index-background-invisible: -3;
// --z-index-background-visible: -2;
// --z-index-background-interface: 1;

// --z-index-front-content-invisible: -1;
// --z-index-front-content-visible: 2;



// /* When cube has controls enabled */
// --z-index-cube-controlled: 3;

// --z-index-menu-items: 99;

// --z-index-front-content: var(--z-index-front-content-visible);
// --z-index-background-canvas-cube: var(--z-index-background-invisible);
// --z-index-background-canvas-birds: var(--z-index-background-invisible);
// --z-index-background-canvas-floating: var(--z-index-background-invisible);

// --z-index-background-scene-text-interface: var(--z-index-background-invisible);

// --z-index-background-div-cube: var(--z-index-background-canvas-cube);
// --z-index-background-div-birds: var(--z-index-background-canvas-birds);
// --z-index-background-div-floating: var(--z-index-background-canvas-floating);

function cubeControlled(){
  // let frontControlled = getCSS("--z-index-background-invisible");
  // setCSS("--z-index-front-content", frontControlled);
  let cubeControlled = getCSS("--z-index-cube-controlled");
  setCSS("--z-index-background-canvas-cube", cubeControlled);
}

function cubeBackground(){
  // let frontVisible = getCSS("--z-index-front-content-visible");
  // setCSS("--z-index-front-content", frontVisible);
  let cubeVisible = getCSS("--z-index-background-visible");
  setCSS("--z-index-background-canvas-cube", cubeVisible);
}

// The current state of fps is stored as css
// We check the current css value to know if it's enabled
// function getState(){
//   let state = parseInt(getCSS("--z-index-front-content"), 10);
//   let visible = parseInt(getCSS("--z-index-background-invisible"), 10);
//   console.log(state);
//   console.log(visible);
//   console.log((state === visible));
  
//   return (state === visible);
//   // return false;
// }

let transitioning = false;

export default function CubeCheckbox(props) {
    const [isChecked, setIsChecked] = useState(false);
    // getState();

    useEffect(()=>{
      isChecked && cubeControlled();
      !isChecked && cubeBackground();
    },[isChecked])

    // useEffect(()=>{
    //   // let cubeVisible = getCSS("--z-index-background-visible");
    //   // setCSS("--z-index-background-canvas-cube", cubeVisible);

      
    //   // let thisElement = document.querySelector(`#${props.id}`);
    //   // thisElement.addEventListener('transitionstart', function() {
    //   //   // console.log("Transition ran");
    //   //   transitioning = true;
    //   // })


    //   // Runs before unmounting. Making sure that cube will not be on top of everything.
    //   return ()=>{
    //     let frontVisible = getCSS("--z-index-front-content-visible");
    //     setCSS("--z-index-front-content", frontVisible);
    //     // let cubeInvisible = getCSS("--z-index-background-invisible");
    //     // setCSS("--z-index-background-canvas-cube", cubeInvisible);
    //     // cubeBackground();
    //   };
    // },[]);

    const handleOnChange = () => {
      // !isChecked && cubeControlled();
      // isChecked && cubeBackground();
      setIsChecked(!isChecked);
    };


    // useEffect(props)
  
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

