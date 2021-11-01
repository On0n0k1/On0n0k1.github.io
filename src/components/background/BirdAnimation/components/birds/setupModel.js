// import { AnimationMixer } from 'https://cdn.skypack.dev/three@0.132.2';
import { AnimationMixer } from 'three';

function setupModel(data) {
  const model = data.scene.children[0];
  const clip = data.animations[0];

  const mixer = new AnimationMixer(model);
  const action = mixer.clipAction(clip);
  action.play();

  model.tick = (delta) => mixer.update(delta);

  return model;
}

export { setupModel };
