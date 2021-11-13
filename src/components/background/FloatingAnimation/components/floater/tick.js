import {
  MathUtils,
} from 'three';


// Generate a random floating value between min and max
export function getRandom(min, max){
  let value = Math.random();
  value = ((max - min) * value) + min;
  return value;
}

export function resetPosition(cylinder) {
  // Set a random position to start in the x axis
  cylinder.position.x = getRandom(-9, 3);
  // Start at the top of the screen
  cylinder.position.y = 5;
  // z position is constant, but different for each box/cube.
  // It's purpose is to avoid overlap between boxes.
  // The reason why cubes doesn't look smaller when they are farther 
  // is because the camera is orthographic. This camera type has no depth perception.


  // Set random starting rotations for each of the axes, 
  cylinder.rotation.x = MathUtils.degToRad(getRandom(0, 90));
  cylinder.rotation.y = MathUtils.degToRad(getRandom(0, 90));
  cylinder.rotation.z = MathUtils.degToRad(getRandom(0, 90));

  // Set random rotation and linear speeds for each of the axes
  // these will only change in the next reset.
  // z axis speed is always 0. Explained above.
  cylinder.customValues = {
    speedX: getRandom(0.7, 1.2),
    speedY: getRandom(0.7, 1.2),
    rotationX: MathUtils.degToRad(getRandom(-60, 60)),
    rotationY: MathUtils.degToRad(getRandom(-60, 60)),
    rotationZ: MathUtils.degToRad(getRandom(-60, 60)),
  };
}

export function updatePosition(delta, cylinder) {
  // update position based in time passed (delta) and current speed (customValues)
  cylinder.position.x += delta * cylinder.customValues.speedX;
  cylinder.position.y -= delta * cylinder.customValues.speedY;

  // update rotation based in time passed (delta) and current speed (customValues)
  cylinder.rotation.x += delta * cylinder.customValues.rotationX;
  cylinder.rotation.y += delta * cylinder.customValues.rotationY;
  cylinder.rotation.z += delta * cylinder.customValues.rotationZ;

  // Once it reaches the bottom of the screen, reset cube position.
  // Make it seems like a new object was created.
  if ((cylinder.position.y < -5) || (cylinder.position.x > 6)) {
      resetPosition(cylinder);
  }
}

export default { getRandom, resetPosition, updatePosition };
