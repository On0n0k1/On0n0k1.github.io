import React, { useState, useEffect, useRef } from 'react';

import './birdFocus.css';
import {getCSS, setCSS} from '../../../other_functions/cssFunctions.js';

// const indexCubeControlled = getCSS("--z-index-cube-controlled");
// const indexBackgroundVisible = getCSS("--z-index-background-visible");

// function cubeControlled(){
//   // let cubeControlled = getCSS("--z-index-cube-controlled");
//   setCSS("--z-index-background-canvas-cube", indexCubeControlled);
// }

// function cubeBackground(){
//   // let cubeVisible = getCSS("--z-index-background-visible");
//   setCSS("--z-index-background-canvas-cube", indexBackgroundVisible);
// }


export default function BirdFocus(props) {
    let value = props.getFocus();

    const focusStork = props.focusStork;
    const focusParrot = props.focusParrot;
    const focusFlamingo = props.focusFlamingo;

    const [currentFocus, setFocus] = useState(value);

    // focusStork={ backgroundActions.focusStork }
    // focusParrot={ backgroundActions.focusParrot }
    // focusFlamingo={ backgroundActions.focusFlamingo }

    // useEffect(()=>{
    // //   isChecked && cubeControlled();
    // //   !isChecked && cubeBackground();
    //     console.log(currentFocus);
    // },[currentFocus])

    // const handleOnChange = () => {
    //   setIsChecked(!isChecked);
    // };

    // "bird-focus-invisible" just takes the two farthest sides of the row
    // Which means that the three in between will share the same distance with the border
  
    return (
        <div className="bird-focus">
            <div className="bird-focus-child" id="bird-focus-invisible"></div>

            <div className="bird-focus-child" id="bird-focus-child-stork">
                <input 
                    type="radio" 
                    id="bird-focus-radial-stork" 
                    name="bird-focus-radial" 
                    checked={ currentFocus==1 }
                    onChange= { () => { 
                        setFocus(1); 
                        focusStork();
                    } }
                />
                <label htmlFor="bird-focus-radial-stork">Stork</label>
                <div className="radio-demo">
                    <div className="inside"></div>
                </div>
            </div>

            <div className="bird-focus-child" id="bird-focus-child-parrot">
                <input 
                    type="radio" 
                    id="bird-focus-radial-parrot" 
                    name="bird-focus-radial" 
                    checked={ currentFocus==2 }
                    onChange= { () => { 
                        setFocus(2); 
                        focusParrot();
                    } }
                />
                <label htmlFor="bird-focus-radial-parrot">Parrot</label>
                <div className="radio-demo">
                    <div className="inside"></div>
                </div>
            </div>

             <div className="bird-focus-child" id="bird-focus-child-flamingo">
                <input 
                    type="radio" 
                    id="bird-focus-radial-flamingo" 
                    name="bird-focus-radial" 
                    checked={ currentFocus==3 }
                    onChange= { () => { 
                        setFocus(3); 
                        focusFlamingo();
                    } }
                />
                <label htmlFor="bird-focus-radial-flamingo">Flamingo</label>
                <div className="radio-demo">
                    <div className="inside"></div>
                </div>
             </div>

            <div className="bird-focus-child" id="bird-focus-invisible"></div>
        </div>
    );
  }
