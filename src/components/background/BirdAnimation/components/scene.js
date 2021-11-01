// import { Color, Scene } from 'https://cdn.skypack.dev/three@0.132.2';
import { Color, Scene } from 'three';

import { getBackgroundColor } from '../../systems/cssFunctions';

function createScene() {
  const scene = new Scene();

  scene.background = new Color(getBackgroundColor());

  return scene;
}

export { createScene };
