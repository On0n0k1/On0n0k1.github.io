// This file has the functions goLeft and GoRight
// Used by Menu's children
// Sometimes we need the transition to go to the right, sometimes the left.
// These functions update the css values according to the expected result.

import { getCSS, setCSS } from "../../other_functions/cssFunctions";


// Set css to make menu enters from the right, and leave to the left.
export function goLeft(){
    let left = getCSS('--menu-go-left');
    let right = getCSS('--menu-go-right');

    setCSS('--menu-entering', right);
    setCSS('--menu-leaving', left);
}

// Set css to make menu enter from the left, and leave to the right.
export function goRight(){
    let left = getCSS('--menu-go-left');
    let right = getCSS('--menu-go-right');

    setCSS('--menu-entering', left);
    setCSS('--menu-leaving', right);
}

export default { goLeft, goRight}