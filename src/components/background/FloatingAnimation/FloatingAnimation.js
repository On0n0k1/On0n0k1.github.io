import { createFloater } from './components/floater/floater.js';
import createMaterials from './components/floater/materials.js';
import createGeometry from './components/floater/geometry.js';
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


// Load css z-index default values from the document.
// Used for changing canvas visibility.
const visible_layer = getCSS('--z-index-background-visible');
const invisible_layer = getCSS('--z-index-background-invisible');


import { getCSS, setCSS } from "../../other_functions/cssFunctions";

class FloatingAnimation {
  constructor() {
    camera = createCamera();
    renderer = createRenderer('#bg-floating');
    scene = createScene();
    loop = new Loop(camera, scene, renderer);

    // will run dispose for all of the list when destructing

    const geometry = createGeometry();
    const materials = createMaterials();
    const materialsLength = materials.length;

    const { ambientLight, mainLight } = createLights();
    this.disposables = [geometry, ambientLight, mainLight];
    materials.map((material) => {
      this.disposables.push(material);
    });

    const floaters = [];
    for (let i = 0; i < 4 ; i++) {
      for (let textureId=0; textureId<materialsLength; textureId++){
        // floaters.push(createFloater(textureId, (i*6 + textureId)*5));
        let floater = createFloater(geometry, materials[textureId], (i*materialsLength + textureId)*5);
        floaters.push(floater);
        // this.disposables.push(floater);
      }
    }

    scene.add(ambientLight, mainLight);
    floaters.map((floater) => {
      loop.updatables.push(floater);
      scene.add(floater);
    });
    
    const resizer = new Resizer(camera, renderer);
  }

  render() {
    // draw a single frame
    renderer.render(scene, camera);
  }

  start() {
    // let visible_layer = getCSS('--z-index-background-visible');
    setCSS('--z-index-background-canvas-floating', visible_layer);

    loop.start();
  }

  stop() {
    // let invisible_layer = getCSS('--z-index-background-invisible');
    setCSS('--z-index-background-canvas-floating', invisible_layer);

    loop.stop();
    this.disposables.map((disposable) => {
      disposable.dispose();
    });
  }
}

export { FloatingAnimation };
