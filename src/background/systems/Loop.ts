// import { Clock } from 'https://cdn.skypack.dev/three@0.132.2';
import { OrthographicCamera, PerspectiveCamera, Scene, Timer, WebGLRenderer, type Object3DEventMap } from 'three';
import { Box } from '../FloatingAnimation/components/floater/geometry';
import { OrbitControls } from 'three/examples/jsm/Addons.js';
import { Bird } from '../BirdAnimation/components/birds/birds';
import { Cube } from '../CubeAnimation/components/cube';
import BirdFocusCamera from '../BirdAnimation/components/BirdFocusCamera/BirdFocusCamera';
// import type { Box } from '../FloatingAnimation/components/floater/geometry';

// const clock = new Clock();

export interface Tickable {
  tick: (delta: number) => void
}

class Loop {
  timer: Timer
  private updatables: (Box | OrbitControls | Bird | Cube | BirdFocusCamera)[]
  camera: PerspectiveCamera | OrthographicCamera
  scene: Scene<Object3DEventMap>
  renderer: WebGLRenderer | null
  constructor(camera: PerspectiveCamera | OrthographicCamera, scene: Scene<Object3DEventMap>, renderer: WebGLRenderer | null) {
    this.camera = camera;
    this.scene = scene;
    this.renderer = renderer;
    this.updatables = [];
    this.timer = new Timer();
  }

  start() {
    if (this.renderer) {
      this.renderer.setAnimationLoop(() => {
        // tell every animated object to tick forward one frame
        this.tick();

        // render a frame
        if (this.renderer) {
          this.renderer.render(this.scene, this.camera);
        }
      });
    }
  }

  stop() {
    if (this.renderer) {
      this.renderer.setAnimationLoop(null);
    }
  }

  tick() {
    // only call the getDelta function once per frame!
    this.timer.update();
    // const delta = clock.getDelta();
    const delta = this.timer.getDelta();

    // console.log(
    //   `The last frame rendered in ${delta * 1000} milliseconds`,
    // );

    if (this.renderer) {
      for (const object of this.updatables) {
  
        if (object instanceof Box) {
          object.tick(delta)
        } else if (object instanceof Bird) {
          object.tick(delta)
        } else if (object instanceof Cube) {
          object.tick(delta);
        } else if (object instanceof BirdFocusCamera) {
          object.tick(delta);
        }
        // if (typeof object.tick === 'function') {
        // } 
      }
    }
  }

  insert_updatable(item: Box | OrbitControls | Bird | Cube | BirdFocusCamera) {
    this.updatables.push(item)
  }

  delete_from_scene(): boolean {
    let object = this.updatables.pop();
    if (object instanceof Box) {
      this.scene.remove(object.mesh);
    } else if (object instanceof Bird) {
      this.scene.remove(object.mesh);
    } else if (object instanceof Cube) {
      this.scene.remove(object.mesh);
    } else if (object instanceof BirdFocusCamera) {
      this.scene.remove(object.camera);
    } else {
      return false;
    }
    return true;
  }

}

export { Loop };
