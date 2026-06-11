// import { loadBirds } from './components/birds/birds.js';
import { Cube } from './components/cube.ts';
import { createCamera } from './components/camera.ts';
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
import type { Object3DEventMap, PerspectiveCamera, Scene, WebGLRenderer } from 'three';
import type { OrbitControls } from 'three/examples/jsm/Addons.js';

class CubeAnimation {
  camera: PerspectiveCamera;
  controls: OrbitControls | null;
  renderer: WebGLRenderer | null;
  scene: Scene<Object3DEventMap>;
  loop: Loop;
  resizer: Resizer | null

  // constructor(container) {
  constructor() {
    this.camera = createCamera();
    this.renderer = createRenderer('#bg-cube');
    this.scene = createScene();
    this.loop = new Loop(this.camera, this.scene, this.renderer);
    // container.append(renderer.domElement);

    if (this.renderer) {
      this.controls = createControls(this.camera, this.renderer.domElement);

      // const cube = createCube();
      const cube = new Cube();
      const { ambientLight, mainLight } = createLights();

      // loop.updatables.push(controls);
      // this.loop.updatables.push(this.controls, cube);
      this.loop.insert_updatable(this.controls);
      this.loop.insert_updatable(cube);
      this.scene.add(ambientLight, mainLight, cube.mesh);

      // const resizer = new Resizer(container, camera, renderer);
      this.resizer = new Resizer(this.camera, this.renderer);
    } else {
      this.controls = null;
      this.resizer = null;
    }
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
    if (this.renderer) {
      console.log("Rendering Cube");
      this.renderer.render(this.scene, this.camera);
    }
  }

  start() {

    // --z-index-background-canvas-cube: var(--z-index-background-invisible);
    // --z-index-background-canvas-birds: var(--z-index-background-invisible);
    // --z-index-background-visible: -2;

    let visible_layer = getCSS('--z-index-background-visible');
    setCSS('--z-index-background-canvas-cube', visible_layer);

    this.loop.start();
  }

  stop() {
    let invisible_layer = getCSS('--z-index-background-invisible');
    setCSS('--z-index-background-canvas-cube', invisible_layer);

    this.loop.stop();
  }
}

export { CubeAnimation };
