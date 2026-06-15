import { createCamera } from './components/camera.ts';
import { createLights } from './components/lights.ts';
import { createScene } from './components/scene.ts';

import { createRenderer } from '../systems/renderer.ts';
import { Resizer } from '../systems/Resizer.js';
import { Loop } from '../systems/Loop.js';

// Load css z-index default values from the document.
// Used for changing canvas visibility.
const visible_layer = getCSS('--z-index-background-visible');
const invisible_layer = getCSS('--z-index-background-invisible');


import { getCSS, setCSS } from "../../other_functions/cssFunctions";
import type { MeshStandardMaterial, Object3DEventMap, OrthographicCamera, Scene, WebGLRenderer } from 'three';
import createGeometry, { Box } from './components/floater/geometry.ts';

interface Disposable {
  dispose: () => void
}

class FloatingAnimation {
  camera: OrthographicCamera;
  renderer: WebGLRenderer | null;
  scene: Scene<Object3DEventMap>;
  loop: Loop;
  disposables: Disposable[];
  floaters: Box[];
  floatersSize: number;
  floatersMax: number;
  resizer: Resizer;

  constructor(materials: MeshStandardMaterial[]) {
    console.log("Creating Floating camera");
    this.camera = createCamera();
    console.log("Creating floating renderer");
    this.renderer = createRenderer('#bg-floating');
    console.log("Creating floating scene");
    this.scene = createScene();
    console.log("Creating Floating loop");
    this.loop = new Loop(this.camera, this.scene, this.renderer);

    // will run dispose for all of the list when destructing

    // console.log("Creating Floating materials");
    // const materials = await createMaterials();

    console.log("Creating Floating Lights");
    const { ambientLight, mainLight } = createLights();
    this.disposables = [ambientLight, mainLight];
    materials.map((material) => {
      this.disposables.push(material);
    });

    this.floaters = [];
    this.floatersSize = 0;
    this.floatersMax = 50;
    console.log("Creating floaters");
    for (let i = 0; i < this.floatersMax; i++) {
      const geometry = createGeometry();
      this.disposables.push(geometry);
      console.log("Creating floater ", i);
      let floater = new Box(geometry, materials[i % materials.length], i * 5);
      // let floater = createFloater(geometry, materials[i % materials.length], i * 5);
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

    console.log("Adding Lights to Floating");
    this.scene.add(ambientLight, mainLight);

    // Need to change this for a for instruction limited by floatersSize
    // this.floaters.map((floater) => {
    //   this.loop.updatables.push(floater);
    //   this.scene.add(floater);
    // });

    console.log("Creating resizer for floating");
    this.resizer = new Resizer(this.camera, this.renderer);
  }

  getMaxLength() {
    return this.floatersMax;
  }

  getLength() {
    return this.floatersSize;
  }

  setLength(size: number) {
    console.log("Floating Set Length called for ", size);
    // console.log(`Calling setLength: ${size}`);
    let floatersSize = this.floatersSize;

    if (floatersSize < size) {
      // console.log("Less");
      let startIndex = floatersSize;
      let endIndex = size;
      console.log("Inserting ", endIndex - startIndex, " floaters");
      for (let i = startIndex; i < endIndex; i++) {
        // this.loop.updatables.push(
        //   this.floaters[i],
        // );
        console.log("Inserting floater ", i);
        this.loop.insert_updatable(this.floaters[i]);
        this.scene.add(
          this.floaters[i].mesh,
        );
        this.floatersSize += 1;
      }
    } else {
      if (floatersSize > size) {
        // console.log("Higher");
        let startIndex = floatersSize - 1;
        let endIndex = size;
        console.log("Removing ", endIndex - startIndex, " floaters");
        for (let i = startIndex; i >= endIndex; i--) {
          // let removedElement: Box | Cube | Bird | PerspectiveCamera = this.loop.updatables.pop();
          // if (removedElement) {
          //   // this.scene.remove(removedElement.mesh);
          //   this.floatersSize -= 1;
          // }
          console.log("Removing index ", i);
          let deleted = this.loop.delete_from_scene();
          if (deleted) {
            this.floatersSize -= 1;
          }
        }
      }
    }
    // this.floatersSize = size;
    // console.log(`floaterSize: ${this.floatersSize}`);
  }

  render() {
    // draw a single frame
    if (this.renderer) {
      console.log("Rendering Float");
      this.renderer.render(this.scene, this.camera);
    }
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
    for (let i = (this.disposables.length) - 1; i >= 0; i--) {
      this.disposables[i].dispose();
    }


  }
}

export { FloatingAnimation };
