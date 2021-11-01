import { getCSS, setCSS } from "../../other_functions/cssFunctions";

function getBackgroundColor(){
  let backgroundColor = getCSS('--background-scene-color')
  backgroundColor=parseInt(backgroundColor.replace("#","0x"), 16 );
  return backgroundColor;
}

export { getBackgroundColor };