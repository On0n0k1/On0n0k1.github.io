import React, { useState } from 'react';

// css for the radial inputs.
import './birdFocus.css';


// This component is used by configs, which is used by DropdownMenu.
// Renders 3 inputs of type radio.
// Selecting each input will change which of the birds the camera is currently focusing on.
export default function BirdFocus(props) {
    // Function that returns which bird is being focused right now.
    // (1 = stork) (2 = parrot) (3 = flamingo)
    let value = props.getFocus();

    // Functions for changing focus.
    const focusStork = props.focusStork;
    const focusParrot = props.focusParrot;
    const focusFlamingo = props.focusFlamingo;

    // Set state to the currently focused bird.
    const [currentFocus, setFocus] = useState(value);

    // "bird-focus-invisible" className just takes the two farthest sides of the row.
    // Which means that the three in between will share the same distance with the border.
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
