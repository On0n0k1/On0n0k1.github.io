// This module is intended to make code more readable..

export function getCSS(var_name){
    return getComputedStyle(document.documentElement)
       .getPropertyValue(var_name);
}

export function setCSS(var_name, var_value){
   document.documentElement.style
       .setProperty(var_name, var_value);
}

export default {getCSS, setCSS};