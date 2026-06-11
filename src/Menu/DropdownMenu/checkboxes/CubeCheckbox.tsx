import { useState, useEffect } from 'react';

import { getCSS, setCSS } from '../../../other_functions/cssFunctions.js';

import './checkbox.css';



// Sets the cube as controlled.
// Changes the z-index so it is above the content. That way drag events work.
function cubeControlled(indexCubeControlled: string) {
  setCSS("--z-index-background-canvas-cube", indexCubeControlled);
}

// Sets the cube back to the normal visible state.
// It's z-index will be below the page's content. So drag events will not work.
function cubeBackground(indexBackgroundVisible: string) {
  setCSS("--z-index-background-canvas-cube", indexBackgroundVisible);
}

interface CubeCheckboxProps {
  id?: string
}

// Used by configs, which is used by DropdownMenu.
// Renders a checkbox that controls when cube is controllable or not.
export default function CubeCheckbox(props: CubeCheckboxProps) {
  const [isChecked, setIsChecked] = useState(false);
  // Get the css z-index for when cube should be controlled.
  const indexCubeControlled = getCSS("--z-index-cube-controlled");
  // Get the css z-index for when cube should be just visible.
  const indexBackgroundVisible = getCSS("--z-index-background-visible");

  useEffect(() => {
    // The function after && is only executed when the previous condition is true.
    isChecked && cubeControlled(indexCubeControlled);
    !isChecked && cubeBackground(indexBackgroundVisible);
  }, [isChecked])

  const handleOnChange = () => {
    // Inverts the state of the checkbox.
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

