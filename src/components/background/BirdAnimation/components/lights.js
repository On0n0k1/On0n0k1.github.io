// import { DirectionalLight, HemisphereLight } from 'https://cdn.skypack.dev/three@0.132.2';
import { DirectionalLight, HemisphereLight } from 'three';

function createLights() {
  const ambientLight = new HemisphereLight(
    'white',
    'darkslategrey',
    5,
  );

  const mainLight = new DirectionalLight('white', 4);
  mainLight.position.set(10, 10, 10);

  return { ambientLight, mainLight };
}

export { createLights };
