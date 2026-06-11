// import { WebGLRenderer } from 'https://cdn.skypack.dev/three@0.132.2';
import { WebGLRenderer } from 'three';

function createRenderer(canvas_id: string) {
  // const renderer = new WebGLRenderer({
  //   antialias: true 
  // });
  // canvas: document.querySelector('#bg')

  // const renderer = new WebGLRenderer({
  //   antialias: true,
  //   canvas: document.querySelector('#bg')
  // });

  let canvas: HTMLCanvasElement | null = document.querySelector<HTMLCanvasElement>(canvas_id);
  if (canvas) {
    const renderer: WebGLRenderer = new WebGLRenderer({
      antialias: true,
      canvas,
    });

    // deprecated. Enabled by default
    // renderer.physicallyCorrectLights = true;

    return renderer;
  }
  return null;


}

export { createRenderer };
