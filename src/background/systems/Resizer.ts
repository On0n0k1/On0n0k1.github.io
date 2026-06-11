import { PerspectiveCamera, type OrthographicCamera, type WebGLRenderer } from "three";

// const setSize = (container, camera, renderer) => {
const setSize = (camera: PerspectiveCamera | OrthographicCamera, renderer: WebGLRenderer) => {
  // camera.aspect = container.clientWidth / container.clientHeight;
  // camera.updateProjectionMatrix();

  if (camera instanceof PerspectiveCamera) {
    camera.aspect = window.innerWidth / window.innerHeight;
  }
  camera.updateProjectionMatrix();


  renderer.setSize(window.innerWidth, window.innerHeight);
  // renderer.setSize(container.clientWidth, container.clientHeight);
  renderer.setPixelRatio(window.devicePixelRatio);
};

class Resizer {
  // constructor(container, camera, renderer) {
  constructor(camera: PerspectiveCamera | OrthographicCamera, renderer: WebGLRenderer | null) {
    // set initial size
    // setSize(container, camera, renderer);
    if (renderer) {
      setSize(camera, renderer);

      window.addEventListener('resize', () => {
        // set the size again if a resize occurs
        // setSize(container, camera, renderer);
        setSize(camera, renderer);
        // perform any custom actions
        this.onResize();
      });
    }
  }

  onResize() { }
}

export { Resizer };
