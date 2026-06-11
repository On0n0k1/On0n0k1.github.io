// import { GLTFLoader } from 'https://cdn.skypack.dev/three@0.132.2/examples/jsm/loaders/GLTFLoader.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import type { GLTF } from 'three/examples/jsm/loaders/GLTFLoader.js';

// import { setupModel, type TickableObject3D } from './setupModel.ts';
import { AnimationMixer, type AnimationAction, type AnimationClip, type AnimationMixerEventMap, type Object3D, type Object3DEventMap } from 'three';

export class Bird {
  mesh: Object3D<Object3DEventMap>
  clip: AnimationClip
  mixer: AnimationMixer<AnimationMixerEventMap>
  action: AnimationAction

  constructor(data: GLTF) {
    this.mesh = data.scene.children[0];
    this.clip = data.animations[0];

    this.mixer = new AnimationMixer(this.mesh);
    this.action = this.mixer.clipAction(this.clip);
    this.action.play();

    // model.tick = (delta: number) => this.mixer.update(delta);
  }
  tick(delta: number) {
    this.mixer.update(delta);
  }
}


async function loadBirds() {
  const loader = new GLTFLoader();

  // const [parrotData, flamingoData, storkData] = await Promise.all([
  //   loader.loadAsync('../../assets/models/Parrot.glb'),
  //   loader.loadAsync('../../assets/models/Flamingo.glb'),
  //   loader.loadAsync('../../assets/models/Stork.glb'),
  // ]);
  console.log("Loading Birds");
  const [parrotData, flamingoData, storkData]: GLTF[] = await Promise.all([
    loader.loadAsync('./models/Parrot.glb'),
    loader.loadAsync('./models/Flamingo.glb'),
    loader.loadAsync('./models/Stork.glb'),
  ]);

  // console.log('Squaaawk!', parrotData);
  console.log("Loading Birds: Parrot");
  const parrot: Bird = new Bird(parrotData);
  parrot.mesh.position.set(0, 0, 2.5);

  console.log("Loading Birds: Flamingo");
  const flamingo: Bird = new Bird(flamingoData);
  flamingo.mesh.position.set(7.5, 0, -10);

  console.log("Loading Birds: Stork");
  const stork: Bird = new Bird(storkData);
  stork.mesh.position.set(0, -2.5, -10);

  return {
    parrot,
    flamingo,
    stork,
  };
}

export { loadBirds };
