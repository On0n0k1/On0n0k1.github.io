import { PerspectiveCamera } from 'three';
import PositionManager from './PositionManager.js';


export default class BirdFocusCamera{
  constructor(){
    this.camera = new PerspectiveCamera(35, 1, 0.1, 100);

    // Constant value, tells how long
    // each movement take, in seconds.
    this.endTime = 2.0;

    this.cameraPositionManager = new PositionManager(
      this.endTime,
      [-1.5, 1.5, 6.5],
    );

    this.cameraFocusManager = new PositionManager(
      this.endTime,
      [0, 0, 2.5],
    );

    this.updatePosition(0.0);
  }

  updatePosition(delta){
    let [x, y, z] = this.cameraPositionManager.updatePosition(delta);

    this.camera.position.set(x, y, z);
    let [x1, y1, z1] = this.cameraFocusManager.updatePosition(delta);
    this.camera.lookAt(x1, y1, z1);
  }

  getCamera(){
    return this.camera;
  }

  // parrot.position.set(0, 0, 2.5);
  // flamingo.position.set(7.5, 0, -10);
  // stork.position.set(0, -2.5, -10);

  focusStork(){
    console.log("Focus Stork enabled.");
    let value = [-2.5, -0.5, -2.0];
    let lookVector = [0, -2.5, -10];
    this.moveTo(value, lookVector);
  }

  focusParrot(){
    console.log("Focus Parrot enabled.");
    let value = [-1.5, 1.5, 6.5];
    let lookVector = [0, 0, 2.5];
    this.moveTo(value, lookVector);
  }

  focusFlamingo(){
    console.log("Focus Flamingo enabled");
    // let value = [6.0, 1.5, -6.0];
    // let lookVector = [7.5, 0, -10];
    let value = [6.0, 1.5, -2.5];
    let lookVector = [7.5, 0, -10];
    this.moveTo(value, lookVector);
  }

  // This is what the user interface calls for updating camera.
  moveTo(cameraPosition, cameraFocus){
    this.cameraPositionManager.reset(
      this.endTime,
      cameraPosition,
    );

    this.cameraFocusManager.reset(
      this.endTime,
      cameraFocus,
    );
  }

  tick(delta){
    this.updatePosition(delta); 
  }
}
