// import { PerspectiveCamera } from 'https://cdn.skypack.dev/three@0.132.2';
import { 
  PerspectiveCamera,
  OrthographicCamera
} from 'three';

function createCamera() {
  // const camera = new PerspectiveCamera(35, 1, 0.1, 100);
  // const camera = new OrthographicCamera(
  //   4,  // left
  //   -4, // right
  //   4,  // top
  //   -4, // bottom
  //   0.01,  // near
  //   120  // far
  // );
  const camera = new OrthographicCamera(
    4,  // left
    -4, // right
    4,  // top
    -4, // bottom
    0.01,  // near
    2000  // far
  );

  // camera always looks in it's negative z axis
  // This changes the position, but doesn't change it's direction
  // If we were to change the direction, we would have to 
  // change it's z axis with camera.translateZ( - distance );
  // camera.position.set(0, 0, 60);
  camera.position.set(0, 0, 1000);

  return camera;
}

export { createCamera };
