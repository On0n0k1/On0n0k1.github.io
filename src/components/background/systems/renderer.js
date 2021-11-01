// import { WebGLRenderer } from 'https://cdn.skypack.dev/three@0.132.2';
import { WebGLRenderer } from 'three';

function createRenderer(canvas_id) {
  // const renderer = new WebGLRenderer({
  //   antialias: true 
  // });
  // canvas: document.querySelector('#bg')

  // const renderer = new WebGLRenderer({
  //   antialias: true,
  //   canvas: document.querySelector('#bg')
  // });
  const renderer = new WebGLRenderer({
    antialias: true,
    canvas: document.querySelector(canvas_id)
  });

  renderer.physicallyCorrectLights = true;

  return renderer;
}

export { createRenderer };
