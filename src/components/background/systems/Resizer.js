// const setSize = (container, camera, renderer) => {
const setSize = (camera, renderer) => {
  // camera.aspect = container.clientWidth / container.clientHeight;
  // camera.updateProjectionMatrix();

  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();


  renderer.setSize( window.innerWidth, window.innerHeight );
  // renderer.setSize(container.clientWidth, container.clientHeight);
  renderer.setPixelRatio(window.devicePixelRatio);
};

class Resizer {
  // constructor(container, camera, renderer) {
constructor(camera, renderer) {
    // set initial size
    // setSize(container, camera, renderer);
    setSize(camera, renderer);

    window.addEventListener('resize', () => {
      // set the size again if a resize occurs
      // setSize(container, camera, renderer);
      setSize(camera, renderer);
      // perform any custom actions
      this.onResize();
    });
  }

  onResize() {}
}

export { Resizer };
