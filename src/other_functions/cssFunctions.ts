// This module is intended to make code more readable..


// Get a css :root variable from current css.
export function getCSS(var_name: string) {
    return getComputedStyle(document.documentElement)
        .getPropertyValue(var_name);
}


// Set the css :root variable to the given value.
export function setCSS(var_name: string, var_value: string) {
    document.documentElement.style
        .setProperty(var_name, var_value);
}

export default { getCSS, setCSS };