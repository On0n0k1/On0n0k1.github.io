import { loadBirds } from './components/birds/birds.js';
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

const visible_layer = getCSS('--z-index-background-visible');
const invisible_layer = getCSS('--z-index-background-invisible');

class BirdAnimation {
  // constructor(container) {
constructor() {
    camera = createCamera();
    renderer = createRenderer('#bg-birds');
    scene = createScene();
    loop = new Loop(camera, scene, renderer);
    // container.append(renderer.domElement);
    controls = createControls(camera, renderer.domElement);

    const { ambientLight, mainLight } = createLights();

    loop.updatables.push(controls);
    scene.add(ambientLight, mainLight);

    // const resizer = new Resizer(container, camera, renderer);
    const resizer = new Resizer(camera, renderer);

    this.birdFocus = 2;
  }

  async init() {
    const { parrot, flamingo, stork } = await loadBirds();

    // move the target to the center of the front bird
    controls.target.copy(parrot.position);

    loop.updatables.push(parrot, flamingo, stork);
    scene.add(parrot, flamingo, stork);
  }

  render() {
    renderer.render(scene, camera);
  }

  start() {
    setCSS('--z-index-background-canvas-birds', visible_layer);

    loop.start();
  }

  stop() {
    setCSS('--z-index-background-canvas-birds', invisible_layer);

    loop.stop();
  }

  focusStork(){
    this.birdFocus = 1;
    console.log("Focus Stork enabled.");
  }

  focusParrot(){
    this.birdFocus = 2;
    console.log("Focus Parrot enabled.");
  }

  focusFlamingo(){
    this.birdFocus = 3;
    console.log("Focus Flamingo enabled")
  }

  getFocus() {
    let value = this.birdFocus;
    return value;
  }
}


export { BirdAnimation };
