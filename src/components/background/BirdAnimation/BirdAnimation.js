import { loadBirds } from './components/birds/birds.js';
// import { createCamera } from './components/camera.js';
import BirdFocusCamera from './components/BirdFocusCamera/BirdFocusCamera.js';
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
    this.birdFocusCamera = new BirdFocusCamera();
    // camera = createCamera();
    camera = this.birdFocusCamera.getCamera();
    renderer = createRenderer('#bg-birds');
    scene = createScene();
    loop = new Loop(camera, scene, renderer);
    // container.append(renderer.domElement);
    controls = createControls(camera, renderer.domElement);

    const { ambientLight, mainLight } = createLights();

    // loop.updatables.push(controls);
    loop.updatables.push(controls, this.birdFocusCamera);
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


  // this.currentPosition = [-1.5, 1.5, 6.5];
  // parrot.position.set(0, 0, 2.5);
  // flamingo.position.set(7.5, 0, -10);
  // stork.position.set(0, -2.5, -10);

  // Birds positions (starts at parrot)
  // stork: [0, -2.5, -10]
  // parrot: [0, 0, 2.5]
  // flamingo: [7.5, 0, -10]
  // camera starts in position [-1.5, 1.5, 6.5]
  // so camera distance vector to parrot is [ -1.5 - 0, 1.5 -0, 6.5 - 2.5] = [-1.5, 1.5, 4.0]
  // for stork camera will then be [0 - 1.5, -2.5 + 1.5, -10 + 4.0] = [-1.5, -1.0, -6.0]
  // for flamingo camera will then be [7.5 - 1.5, 0 + 1.5, -10 + 4.0] = [6.0, 1.5, -6.0]
  //
  // for ease of read, again:
  // stork: [-1.5, 1.0, -6.0]
  // parrot: [-1.5, 1.5, 6.5]
  // flamingo: [6.0, 1.5, -6.0]

  focusStork(){
    this.birdFocus = 1;
    // console.log("Focus Stork enabled.");
    // let value = [-1.5, 1.0, -6.0];
    // this.birdFocusCamera.moveTo(value);
    this.birdFocusCamera.focusStork();


  }

  focusParrot(){
    this.birdFocus = 2;
    // console.log("Focus Parrot enabled.");
    // let value = [-1.5, 1.5, 6.5];
    // this.birdFocusCamera.moveTo(value);
    this.birdFocusCamera.focusParrot();
  }

  focusFlamingo(){
    this.birdFocus = 3;
    // console.log("Focus Flamingo enabled");
    // let value = [6.0, 1.5, -6.0];
    // this.birdFocusCamera.moveTo(value);
    this.birdFocusCamera.focusFlamingo();
  }

  getFocus() {
    let value = this.birdFocus;
    return value;
  }
}


export { BirdAnimation };
