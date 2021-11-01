// import { loadBirds } from './components/birds/birds.js';
import { createCube } from './components/cube.js';
import { createCamera } from './components/camera.js';
import { createLights } from './components/lights.js';
import { createScene } from './components/scene.js';

import { createControls } from '../systems/controls.js';
import { createRenderer } from '../systems/renderer.js';
import { Resizer } from '../systems/Resizer.js';
import { Loop } from '../systems/Loop.js';

let camera;
let controls;
let renderer;
let scene;
let loop;


// function getCSS(var_name){
//      return getComputedStyle(document.documentElement)
//         .getPropertyValue(var_name);
// }

// function setCSS(var_name, var_value){
//     document.documentElement.style
//         .setProperty(var_name, var_value);
// }

import { getCSS, setCSS } from "../../other_functions/cssFunctions";

class CubeAnimation {
  // constructor(container) {
  constructor() {
    camera = createCamera();
    renderer = createRenderer('#bg-cube');
    scene = createScene();
    loop = new Loop(camera, scene, renderer);
    // container.append(renderer.domElement);

    controls = createControls(camera, renderer.domElement);

    const cube = createCube();
    const { ambientLight, mainLight } = createLights();

    // loop.updatables.push(controls);
    loop.updatables.push(controls, cube);
    scene.add(ambientLight, mainLight, cube);

    // const resizer = new Resizer(container, camera, renderer);
    const resizer = new Resizer(camera, renderer);
  }

  // async init() {
  //   const { parrot, flamingo, stork } = await loadBirds();

  //   // move the target to the center of the front bird
  //   controls.target.copy(parrot.position);

  //   loop.updatables.push(parrot, flamingo, stork);
  //   scene.add(parrot, flamingo, stork);
  // }

  render() {
    // draw a single frame
    renderer.render(scene, camera);
  }

  start() {

    // --z-index-background-canvas-cube: var(--z-index-background-invisible);
    // --z-index-background-canvas-birds: var(--z-index-background-invisible);
    // --z-index-background-visible: -2;

    let visible_layer = getCSS('--z-index-background-visible');
    setCSS('--z-index-background-canvas-cube', visible_layer);

    loop.start();
  }

  stop() {
    let invisible_layer = getCSS('--z-index-background-invisible');
    setCSS('--z-index-background-canvas-cube', invisible_layer);

    loop.stop();
  }
}

export { CubeAnimation };
