// import { Color, Scene } from 'https://cdn.skypack.dev/three@0.132.2';

import { getBackgroundColor } from '../../systems/cssFunctions';
import { Color, Scene } from 'three';

// function getBackgroundColor(){
//   let backgroundColor = getCSS('--background-scene-color')
//   backgroundColor=parseInt(backgroundColor.replace("#","0x"), 16 );
//   return backgroundColor;
// }

function createScene() {
  const scene = new Scene();

  scene.background = new Color(getBackgroundColor());

  return scene;
}

export { createScene };
