// import { Color, Scene } from 'https://cdn.skypack.dev/three@0.132.2';
import { 
  Color, 
  Scene,
  GridHelper,
} from 'three';

import { getBackgroundColor } from '../../systems/cssFunctions';

function createScene() {
  const scene = new Scene();

  const size = 10;
  const divisions = 10;
  // const gridHelper = new GridHelper( size, divisions );

  scene.background = new Color(getBackgroundColor());
  // scene.add( gridHelper );

  return scene;
}

export { createScene };


// const size = 10;
// const divisions = 10;

// const gridHelper = new THREE.GridHelper( size, divisions );
// scene.add( gridHelper );