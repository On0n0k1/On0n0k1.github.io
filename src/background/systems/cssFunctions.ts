import { getCSS, } from "../../other_functions/cssFunctions";

function getBackgroundColor(): number {
  const raw = getCSS('--background-scene-color')
  const backgroundColor = parseInt(raw.replace("#", "0x"), 16);
  return backgroundColor;
}

export { getBackgroundColor };