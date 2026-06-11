// This file has the functions goLeft and GoRight
// Used by Menu's children
// Sometimes we need the transition to go to the right, sometimes the left.
// These functions update the css values according to the expected result.

import { getCSS, setCSS } from "../../other_functions/cssFunctions";

// These values never change.
// let left = getCSS('--menu-go-left');
// let right = getCSS('--menu-go-right');

// Set css to make menu enters from the right, and leave to the left.
// export function goLeft(){
//     setCSS('--menu-entering', right);
//     setCSS('--menu-leaving', left);
// }

// Set css to make menu enter from the left, and leave to the right.
// export function goRight(){
//     setCSS('--menu-entering', left);
//     setCSS('--menu-leaving', right);
// }

// export default { goLeft, goRight }

export class CSSUpdates {
    left: string
    right: string
    constructor() {
        this.left = getCSS('--menu-go-left');
        this.right = getCSS('--menu-go-right');
    }

    goLeft() {
        setCSS('--menu-entering', this.right);
        setCSS('--menu-leaving', this.left);
    }

    goRight() {
        setCSS('--menu-entering', this.left);
        setCSS('--menu-leaving', this.right);
    }
}