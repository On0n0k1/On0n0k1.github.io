import {
  Mesh,
} from 'three';

import { getRandom, resetPosition, updatePosition } from './tick.js';


function createFloater(geometry, material, zPosition) {
  let cylinder = new Mesh(geometry, material);

  resetPosition(cylinder);
  cylinder.position.z = zPosition;
  cylinder.position.y = getRandom(-5, 4);

  cylinder.tick = (delta) => {
    updatePosition(delta, cylinder);
  }

  return cylinder;
}

export { createFloater };
  