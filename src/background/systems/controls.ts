// import { OrbitControls } from 'https://cdn.skypack.dev/three@0.132.2/examples/jsm/controls/OrbitControls.js';
import type { PerspectiveCamera } from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

export interface TickingOrbitControls extends OrbitControls {
  tick: (delta: number) => void
}

function createControls(camera: PerspectiveCamera, canvas: HTMLCanvasElement): TickingOrbitControls {
  const controls = new OrbitControls(camera, canvas) as TickingOrbitControls;

  controls.enableDamping = true;

  // forward controls.update to our custom .tick method
  controls.tick = (_delta: number) => controls.update();

  return controls;
}

export { createControls };
