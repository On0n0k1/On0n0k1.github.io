// This file has the functions goLeft and GoRight
// Used by Menu's children
// Sometimes we need the transition to go to the right, sometimes the left.
// These functions update the css values according to the expected result.

import { getCSS, setCSS } from "../../other_functions/cssFunctions";

let left = getCSS('--content-projects-go-left');
let right = getCSS('--content-projects-go-right');

// Set css to make menu enters from the right, and leave to the left.
export function goLeft(){

    setCSS('--content-projects-entering', right);
    setCSS('--content-projects-leaving', left);
}

// Set css to make menu enter from the left, and leave to the right.
export function goRight(){
    // let left = getCSS('--content-projects-go-left');
    // let right = getCSS('--content-projects-go-right');

    setCSS('--content-projects-entering', left);
    setCSS('--content-projects-leaving', right);
}

export default { goLeft, goRight}