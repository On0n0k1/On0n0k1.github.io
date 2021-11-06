import React, { useState, useEffect, useRef } from 'react';

import './textInterface.css';

// function TextInterface() {

// }

export default function TextInterface(props) {
    const [isChecked, setIsChecked] = useState(false);
  
    const handleOnChange = () => {
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
