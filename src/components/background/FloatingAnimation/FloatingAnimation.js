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
    this.scene = createScene();
    this.loop = new Loop(camera, this.scene, renderer);

    // will run dispose for all of the list when destructing

    const geometry = createGeometry();
    const materials = createMaterials();

    const { ambientLight, mainLight } = createLights();
    this.disposables = [geometry, ambientLight, mainLight];
    materials.map((material) => {
      this.disposables.push(material);
    });

    this.floaters = [];
    this.floatersSize = 0;
    this.floatersMax = 50;
    for (let i = 0; i < this.floatersMax; i++){
      let floater = createFloater(geometry, materials[i % materials.length], i * 5);
      this.floaters.push(floater);
    }

    // for (let i = 0; i < 4 ; i++) {
    //   for (let textureId=0; textureId<materialsLength; textureId++){
    //     // floaters.push(createFloater(textureId, (i*6 + textureId)*5));
    //     let floater = createFloater(geometry, materials[textureId], (i*materialsLength + textureId)*5);
    //     floaters.push(floater);
    //     // this.disposables.push(floater);
    //   }
    // }

    this.scene.add(ambientLight, mainLight);

    // Need to change this for a for instruction limited by floatersSize
    // this.floaters.map((floater) => {
    //   this.loop.updatables.push(floater);
    //   this.scene.add(floater);
    // });
    
    const resizer = new Resizer(camera, renderer);
  }

  getMaxLength(){
    return this.floatersMax;
  }

  getLength(){
    return this.floatersSize;
  }

  setLength(size){
    // console.log(`Calling setLength: ${size}`);
    let floatersSize = this.floatersSize;
    
    if (floatersSize < size){
      // console.log("Less");
      let startIndex = floatersSize;
      let endIndex = size;
      for(let i=startIndex; i<endIndex; i++){
        this.loop.updatables.push(
          this.floaters[i],
        );
        this.scene.add(
          this.floaters[i],
        );
        this.floatersSize+=1;
      }
    } else {
      if (floatersSize > size){
        // console.log("Higher");
        let startIndex = floatersSize-1;
        let endIndex = size;
        for(let i=startIndex; i>=endIndex; i--){
          let removedElement = this.loop.updatables.pop();
          this.scene.remove(removedElement);
          this.floatersSize-=1;
        }
      }
    }
    // this.floatersSize = size;
    // console.log(`floaterSize: ${this.floatersSize}`);
  }

  render() {
    // draw a single frame
    renderer.render(scene, camera);
  }

  start() {
    setCSS('--z-index-background-canvas-floating', visible_layer);

    this.loop.start();
  }

  stop() {
    setCSS('--z-index-background-canvas-floating', invisible_layer);

    this.loop.stop();
    // clear loaded objects from memory when switching animations
    // They will automatically reload if recalled.
    // In other words, when start() is called, these will reload.
    
    // Apparently floater mesh doesn't need to be disposed
    // for( let i=(this.floaters.length)-1 ; i>=0 ; i--){
    //   this.floaters[i].dispose();
    // }

    // from last to first
    for( let i=(this.disposables.length)-1 ; i>=0 ; i--){
      this.disposables[i].dispose();
    }

        
  }
}

export { FloatingAnimation };
