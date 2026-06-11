import { loadBirds } from './components/birds/birds.ts';
// import { createCamera } from './components/camera.js';
import BirdFocusCamera from './components/BirdFocusCamera/BirdFocusCamera.ts';
import { createLights } from './components/lights.ts';
import { createScene } from './components/scene.ts';

import { createControls } from '../systems/controls.js';
import { createRenderer } from '../systems/renderer.js';
import { Resizer } from '../systems/Resizer.js';
import { Loop } from '../systems/Loop.js';

// let camera;
// let controls;
// let renderer;
// let scene;
// let loop;



// function getCSS(var_name){
//      return getComputedStyle(document.documentElement)
//         .getPropertyValue(var_name);
// }

// function setCSS(var_name, var_value){
//     document.documentElement.style
//         .setProperty(var_name, var_value);
// }

import { getCSS, setCSS } from "../../other_functions/cssFunctions";
import { PerspectiveCamera, Scene, WebGLRenderer, type Object3DEventMap } from 'three';
import type { OrbitControls } from 'three/examples/jsm/Addons.js';

const visible_layer = getCSS('--z-index-background-visible');
const invisible_layer = getCSS('--z-index-background-invisible');

class BirdAnimation {
  camera: PerspectiveCamera;
  controls: OrbitControls | null;
  renderer: WebGLRenderer | null;
  scene: Scene<Object3DEventMap>;
  loop: Loop;
  birdFocusCamera: BirdFocusCamera
  resizer: Resizer | null
  birdFocus: number


  // constructor(container) {
  constructor() {
    console.log("Building BirdAnimation");
    this.birdFocusCamera = new BirdFocusCamera();
    // camera = createCamera();
    this.camera = this.birdFocusCamera.getCamera();
    console.log("Creating Renderer");
    this.renderer = createRenderer('#bg-birds');
    console.log("Creating scene");
    this.scene = createScene();
    console.log("Creating Loop");
    this.loop = new Loop(this.camera, this.scene, this.renderer);
    // container.append(renderer.domElement);
    if (this.renderer) {
      console.log("Creating controls and inserting updatables");
      this.controls = createControls(this.camera, this.renderer.domElement);
      this.loop.insert_updatable(this.controls);
      this.loop.insert_updatable(this.birdFocusCamera);
      // this.loop.updatables.push(this.controls, this.birdFocusCamera);
      console.log("Creating Lights");
      const { ambientLight, mainLight } = createLights();

      // loop.updatables.push(controls);
      this.scene.add(ambientLight, mainLight);

      // const resizer = new Resizer(container, camera, renderer);
      this.resizer = new Resizer(this.camera, this.renderer);
    } else {
      this.resizer = null;
      this.controls = null;
    }
    this.birdFocus = 2;
  }

  async init() {
    const { parrot, flamingo, stork } = await loadBirds();

    // move the target to the center of the front bird
    console.log("Setting controls");
    if (this.controls) {
      this.controls.target.copy(parrot.mesh.position);
      this.loop.insert_updatable(parrot)
      this.loop.insert_updatable(flamingo)
      this.loop.insert_updatable(stork)
      // this.loop.updatables.push(parrot, flamingo, stork);
      console.log("Adding controls to scene");
      this.scene.add(parrot.mesh, flamingo.mesh, stork.mesh);
    }
  }

  render() {
    if (this.renderer) {
      console.log("Rendering Bird");
      this.renderer.render(this.scene, this.camera);
    }
  }

  start() {
    setCSS('--z-index-background-canvas-birds', visible_layer);

    this.loop.start();
  }

  stop() {
    setCSS('--z-index-background-canvas-birds', invisible_layer);

    this.loop.stop();
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

  focusStork() {
    this.birdFocus = 1;
    // console.log("Focus Stork enabled.");
    // let value = [-1.5, 1.0, -6.0];
    // this.birdFocusCamera.moveTo(value);
    this.birdFocusCamera.focusStork();


  }

  focusParrot() {
    this.birdFocus = 2;
    // console.log("Focus Parrot enabled.");
    // let value = [-1.5, 1.5, 6.5];
    // this.birdFocusCamera.moveTo(value);
    this.birdFocusCamera.focusParrot();
  }

  focusFlamingo() {
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
