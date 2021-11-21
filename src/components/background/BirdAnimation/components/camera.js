// import { PerspectiveCamera } from 'https://cdn.skypack.dev/three@0.132.2';
import { PerspectiveCamera, Vector3 } from 'three';

// function createCamera() {
//   const camera = new PerspectiveCamera(35, 1, 0.1, 100);

//   camera.position.set(-1.5, 1.5, 6.5);

//   return camera;
// }

// export { createCamera };

// Try these functions in desmos.com/calculator
// Velocity function. Starts low, reach highest halfway, then drops to 0.
// y' = -6x² +6x²

// Distance function for the above function. 
// That's what we use when updating frames.
// y = -2x³ + 3x²


export default class BirdFocusCamera{
  constructor(){
    this.camera = new PerspectiveCamera(35, 1, 0.1, 100);

    // Constant value, tells how long
    // each movement take, in seconds.
    this.endTime = 2.0;

    // Where camera currently is.
    this.currentPosition = [-1.5, 1.5, 6.5];
    // Where camera started moving.
    this.startingPosition = this.currentPosition;

    // How far it travelled since the last frame
    // this.currentDistance = 0.0;
    
    
    // Where camera has to be.
    // The position will be slightly off after the last frame of the animation.
    // This value makes sure that it will snap to place when time surpasses this.endTime.
    this.targetPosition = [-1.5, 1.5, 6.5];

    // Vector of length 1 pointing towards the next target
    this.unitVector = [0, 0, 0];
    // Total distance to travel from start to end of the movement
    this.totalDistance = 0.0;

    // Current time of the function.
    // Used to calculate distance to travel between each frame.
    this.currentTime = this.endTime + 0.1;


    let [x, y, z] = this.currentPosition;


    // this.camera.position.set(-1.5, 1.5, 6.5);
    this.camera.position.set(x, y, z);
    this.lookVector = new Vector3(0, 0, 2.5);
    this.look();

    // return camera;
  }

  getCamera(){
    return this.camera;
  }

  look(){
    this.camera.lookAt(this.lookVector);
  }

  // parrot.position.set(0, 0, 2.5);
  // flamingo.position.set(7.5, 0, -10);
  // stork.position.set(0, -2.5, -10);

  focusStork(){
    console.log("Focus Stork enabled.");
    let value = [-1.5, 1.0, -6.0];
    this.moveTo(value);
    // this.camera.lookAt(0, -2.5, -10);
    this.lookVector = new Vector3(0, -2.5, -10);
  }

  focusParrot(){
    console.log("Focus Parrot enabled.");
    let value = [-1.5, 1.5, 6.5];
    this.moveTo(value);
    // this.camera.lookAt(0, 0, 2.5);
    this.lookVector = new Vector3(0, 0, 2.5);
  }

  focusFlamingo(){
    console.log("Focus Flamingo enabled");
    let value = [6.0, 1.5, -6.0];
    this.moveTo(value);
    // this.camera.lookAt(7.5, 0, -10);
    this.lookVector = new Vector3(7.5, 0, -10);
  }



  // This is what the user interface calls for updating camera.
  moveTo(position){
    let [targetX, targetY, targetZ] = position;
    let [x, y, z] = this.currentPosition;
    this.startingPosition = this.currentPosition;
    
    // vector from start to finish
    let [travelX, travelY, travelZ] = [
      targetX - x,
      targetY - y,
      targetZ - z,
    ];


    



    // length of the vector
    let length = Math.sqrt(travelX * travelX + travelY * travelY + travelZ * travelZ);
    console.log(`length: ${length}`);

    // unit vector (length 1)

    if(length === 0.0){
      // Avoiding division by 0
      this.unitVector = [0, 0, 0];
      this.targetPosition = [x, y, z];
      this.currentTime = this.endTime + 0.1;
      this.totalDistance = 0.0;
    } else {
      // this.unitVector = [
      //   travelX/length,
      //   travelY/length,
      //   travelZ/length,
      // ];
      this.unitVector = [
        travelX/length,
        travelY/length,
        travelZ/length,
      ];

      this.totalDistance = length;
      this.targetPosition = [targetX, targetY, targetZ];
      this.currentTime = 0.0;
    }
    

  }

  tick(delta){
    // Updates current local position.
    // function setPosition(position){
    //   // implementing like this so an error explicitly happens 
    //   // if argument is incorrect.
    //   let [x, y, z] = position;
    //   this.camera.position.set(x, y, z);
    //   this.currentPosition = [x, y, z];
    // }

    // distance travelled from start to this point
    function endDistance(currentTime, endTime, totalDistance){
      // y = -2x³ + 3x²
      // y = x²(-2x + 3)
      // let value = this.currentTime;

      // 0 < x < 1 => so we use the proportion of time
      let xTime = currentTime / endTime;

      let distance = (xTime * xTime) * (-2 * xTime + 3.0);
      // distance is a proportion (0 to 1.0) of totalDistance
      distance *= totalDistance;
      console.log(`Frame distance: ${distance}`);
      return distance;
    }

    
    // Uses endDistance to calculate how far
    // it has to travel since last frame.
    let currentTime = this.currentTime;
    let endTime = this.endTime;
    // let [x, y, z] = this.currentPosition;
    let [x, y, z] = this.startingPosition;

    if (currentTime < endTime){
      console.log("yes");
      // let currentDistance = this.currentDistance;

      // These two lines must stick together in this order.
      
      let totalDistance = this.totalDistance;
      this.currentTime = currentTime + delta;
      // let finalDistance = endDistance(this.currentTime, endTime, totalDistance);
      let travelDistance = endDistance(this.currentTime, endTime, totalDistance);
      

      // let travelDistance = finalDistance - currentDistance;
      // this.currentDistance = finalDistance;

      // let [distanceX, distanceY, distanceZ] = this.unitVector;
      let [unitX, unitY, unitZ] = this.unitVector;
      let finalX = unitX * travelDistance + x;
      let finalY = unitY * travelDistance + y;
      let finalZ = unitZ * travelDistance + z;

      // let finalPosition = [x + distanceX, y + distanceY, z + distanceZ];
      // setPosition(finalPosition);
      this.camera.position.set(finalX, finalY, finalZ);
      // this.camera.lookAt(this.lookVector);
      this.currentPosition = [finalX, finalY, finalZ];
    } else {
      console.log("no");
      let [targetX, targetY, targetZ] = this.targetPosition;
      if ((x!=targetX) || (y!=targetY) || (z!=targetZ)){
        this.camera.position.set(targetX, targetY, targetZ);
        // this.camera.lookAt(this.lookVector);
        this.currentPosition = [targetX, targetY, targetZ];
      }
    }

    // Make camera looks towards current focus bird
    this.look();
    
  }
}
