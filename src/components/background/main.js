import { BirdAnimation } from './BirdAnimation/BirdAnimation.js';

async function main() {
  // Get a reference to the container element
  // const container = document.querySelector('#background-scene-container-id');

  // create a new world
  // const world = new World(container);
  const birdAnimation = new BirdAnimation();

  // complete async tasks
  await birdAnimation.init();

  // start the animation loop
  // This just set this object's loop function to setAnimationFrame using renderer's setAnimationLoop
  birdAnimation.start();
}

// main().catch((err) => {
//   console.error(err);
// });

export default main;
