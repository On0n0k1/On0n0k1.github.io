import {
  BoxGeometry,
  MathUtils,
  Mesh,
  MeshStandardMaterial,
  // Scene,
  type Object3DEventMap,
} from 'three';
// import type { Tickable } from '../../../systems/Loop';
// import { getRandom } from './tick';

export function getRandom(min: number, max: number) {
  let value = Math.random();
  value = ((max - min) * value) + min;
  return value;
}



export default function createGeometry() {
  return new BoxGeometry(0.8, 0.8, 0.8);
}

export class Box {
  mesh: Mesh<BoxGeometry, MeshStandardMaterial, Object3DEventMap>
  speedX: number
  speedY: number
  speedRotationX: number
  speedRotationY: number
  speedRotationZ: number
  tick: (delta: number) => void
  dispose: () => void

  constructor(geometry: BoxGeometry, material: MeshStandardMaterial, zPosition: number) {
    this.mesh = new Mesh(geometry, material);
    // Reset Position
    this.mesh.position.x = getRandom(-9, 3);
    this.mesh.position.y = 5;

    this.mesh.rotation.x = MathUtils.degToRad(getRandom(0, 90));
    this.mesh.rotation.y = MathUtils.degToRad(getRandom(0, 90));
    this.mesh.rotation.z = MathUtils.degToRad(getRandom(0, 90));

    this.speedX = getRandom(0.7, 1.2);
    this.speedY = getRandom(0.7, 1.2);
    this.speedRotationX = MathUtils.degToRad(getRandom(-60, 60));
    this.speedRotationY = MathUtils.degToRad(getRandom(-60, 60));
    this.speedRotationZ = MathUtils.degToRad(getRandom(-60, 60));

    // Setting unique starting position
    this.mesh.position.z = zPosition;
    this.mesh.position.y = getRandom(-5, 4);

    this.tick = (delta) => {
      // console.log("Updating position with delta ", delta);
      this.updatePosition(delta)
    }
    this.dispose = () => {
      this.mesh.geometry.dispose() // releases BoxGeometry from GPU
      this.mesh.material.dispose() // releases MeshStandardMaterial from GPU
    }
  }

  resetPosition() {
    this.mesh.position.x = getRandom(-9, 3);
    this.mesh.position.y = 5;

    this.mesh.rotation.x = MathUtils.degToRad(getRandom(0, 90));
    this.mesh.rotation.y = MathUtils.degToRad(getRandom(0, 90));
    this.mesh.rotation.z = MathUtils.degToRad(getRandom(0, 90));

    this.speedX = getRandom(0.7, 1.2);
    this.speedY = getRandom(0.7, 1.2);
    this.speedRotationX = MathUtils.degToRad(getRandom(-60, 60));
    this.speedRotationY = MathUtils.degToRad(getRandom(-60, 60));
    this.speedRotationZ = MathUtils.degToRad(getRandom(-60, 60));
  }

  updatePosition(delta: number) {
    // console.log("Updating Mesh ", this.mesh.uuid);
    this.mesh.position.x += delta * this.speedX;
    this.mesh.position.y -= delta * this.speedY;

    // update rotation based in time passed (delta) and current speed (customValues)
    this.mesh.rotation.x += delta * this.speedRotationX;
    this.mesh.rotation.y += delta * this.speedRotationY;
    this.mesh.rotation.z += delta * this.speedRotationZ;
    // cylinder.rotation.x += delta * cylinder.customValues.rotationX;
    // cylinder.rotation.y += delta * cylinder.customValues.rotationY;
    // cylinder.rotation.z += delta * cylinder.customValues.rotationZ;

    // Once it reaches the bottom of the screen, reset cube position.
    // Make it seems like a new object was created.
    if ((this.mesh.position.y < -5) || (this.mesh.position.x > 6)) {
      this.resetPosition();
    }
  }

}