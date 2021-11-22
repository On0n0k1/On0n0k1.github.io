export default class PositionManager{
  constructor(
      endTime,
      targetPosition,
    ){

    this.startingPosition = targetPosition;
    this.currentPosition = targetPosition;

    this.reset(
        endTime,
        targetPosition,
    );
  }

  reset(
      endTime, 
      targetPosition,
    ){

    this.endTime = endTime; // 2.0
    this.currentTime = this.endTime + 0.1;

    this.startingPosition = this.currentPosition;
    this.targetPosition = targetPosition; // [-1.5, 1.5, 6.5];

    let [targetX, targetY, targetZ] = targetPosition;
    let [x, y, z] = this.currentPosition;
    
    // vector from start to finish
    let [travelX, travelY, travelZ] = [
      targetX - x,
      targetY - y,
      targetZ - z,
    ];

    // length of the vector
    let length = Math.sqrt(travelX * travelX + travelY * travelY + travelZ * travelZ);
    console.log(`length: ${length}`);

    if(length === 0.0){
      // Avoiding division by 0
      this.unitVector = [0, 0, 0];
      this.targetPosition = [x, y, z];
      this.currentTime = this.endTime + 0.1;
      this.totalDistance = 0.0;
    } else {
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

  updatePosition(delta){

    // Get time, get minimum and maximum value.
    // Return the proportional value acquired from the equation.
    // for velocity => y' = y = -6x² +6x²
    // we have position => y = -2x³ + 3x²
    // We just use the position equation and get the velocity effect.
    function calcValue(
      currentTime,
      endTime,
      startingValue,
      endValue,
    ){
      // y = -2x³ + 3x²
      // y = x²(-2x + 3)
      let xTime = currentTime / endTime;

      let proportion = (xTime * xTime) * (-2 * xTime + 3.0);
      let result = startingValue + (endValue - startingValue) * proportion;
      return result;
    }

    // Multiply proportion (from calcValue) into the vector
    // then sum starting position.
    function calcVector(
      unitVector,
      proportion,
      startVector,
    ){
      let [unitX, unitY, unitZ] = unitVector;
      let [startX, startY, startZ] = startVector;

      let result = [
        startX + unitX * proportion,
        startY + unitY * proportion,
        startZ + unitZ * proportion,
      ];

      return result;
    }
    
    // Uses endDistance to calculate how far
    // it has to travel since last frame.
    let currentTime = this.currentTime;
    let endTime = this.endTime;

    let newPosition = this.currentPosition;

    if (currentTime < endTime){
      this.currentTime = currentTime + delta;
      let totalDistance = this.totalDistance;
      let proportion = calcValue(
        this.currentTime, 
        endTime, 
        0.0,
        totalDistance,
      );
      
      let [finalX, finalY, finalZ] = calcVector(
        this.unitVector,
        proportion,
        this.startingPosition,
      );

      newPosition = [finalX, finalY, finalZ];
      this.currentPosition = newPosition;
    } else {
      // After movement ends. This will run once.
      // Snaps current position to target position.

      let [x, y, z] = this.startingPosition;
      let [targetX, targetY, targetZ] = this.targetPosition;

      if ((x!=targetX) || (y!=targetY) || (z!=targetZ)){
        newPosition = [targetX, targetY, targetZ];
        this.currentPosition = newPosition;
      }
    }
    return newPosition;
  }
}
