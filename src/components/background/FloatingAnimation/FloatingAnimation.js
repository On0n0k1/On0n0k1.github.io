// import { loadBirds } from './components/birds/birds.js';

import { createFloater } from './components/floater';
import { createCamera } from './components/camera.js';
import { createLights } from './components/lights.js';
import { createScene } from './components/scene.js';

import { createRenderer } from '../systems/renderer.js';
import { Resizer } from '../systems/Resizer.js';
import { Loop } from '../systems/Loop.js';

let camera;
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

class FloatingAnimation {
  constructor() {
    camera = createCamera();
    renderer = createRenderer('#bg-floating');
    scene = createScene();
    loop = new Loop(camera, scene, renderer);
;
    const { ambientLight, mainLight } = createLights();



    // const floaters = [
    //   createFloater(0),
    //   createFloater(1),
    //   createFloater(2),
    //   createFloater(3),
    //   createFloater(4),
    //   createFloater(5),
    //   createFloater(6),
    //   createFloater(7),
    // ];

    const floaters = [];
    for (let i = 0; i < 1 ; i++) {
      for (let textureId=0; textureId<7; textureId++){
        floaters.push(createFloater(textureId, (i*6 + textureId)*5));
      }
      
    }

    scene.add(ambientLight, mainLight);
    // loop.updatables.push(floater);
    floaters.map((floater) => {
      loop.updatables.push(floater);
      scene.add(floater);
    });
    // scene.add(ambientLight, mainLight, floater);

    const resizer = new Resizer(camera, renderer);
  }

  render() {
    // draw a single frame
    renderer.render(scene, camera);
  }

  start() {
    let visible_layer = getCSS('--z-index-background-visible');
    setCSS('--z-index-background-canvas-floating', visible_layer);

    loop.start();
  }

  stop() {
    let invisible_layer = getCSS('--z-index-background-invisible');
    setCSS('--z-index-background-canvas-floating', invisible_layer);

    loop.stop();
  }
}

export { FloatingAnimation };
