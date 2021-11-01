import {
  BoxBufferGeometry,
  CylinderGeometry,
  MathUtils,
  Mesh,
  MeshStandardMaterial,
  TextureLoader,
} from 'three';

function getRandom(min, max){
  let value = Math.random();
  value = ((max - min) * value) + min;
  return value;
}

function getMaterial(textureId) {

  function getFileName(textureId){
      if(textureId<1){
        return 'dockerlogo.png';
      }
      if(textureId===1){
        return 'pythonlogo.png';
      }
      if(textureId===2){
        return 'webassemblylogo.png';
      } 
      if(textureId===3){
        return 'webpacklogo.png';
      }
      if(textureId===4){
        return 'rustlogo.png';
      }
      if(textureId===5){
        return 'reactlogo.png';
      }

      return 'webstack.png';
    }


  // create a texture loader.
  const textureLoader = new TextureLoader();
  textureLoader.setPath('./assets/textures/');

  // load a texture
  const texture = textureLoader.load(getFileName(textureId));

  // create a "standard" material using
  // the texture we just loaded as a color map
  const material = new MeshStandardMaterial({
    color: 'skyblue',
    map: texture,
  });

  return material;
}


function createFloater(textureId, zPosition) {

  // const geometry = new CylinderGeometry( 0.1, 0.1, 1, 32);
  const geometry = new BoxBufferGeometry(0.8, 0.8, 0.8);

  const material = getMaterial(textureId);

  const cylinder = new Mesh(geometry, material);
  // const radiansPerSecond = MathUtils.degToRad(30);

  cylinder.position.z = zPosition;

  function resetPosition() {
    // cylinder.position.x = -5;
    cylinder.position.x = getRandom(-9, 3);
    cylinder.position.y = 5;
    // cylinder.position.y = getRandom(-5, 4);
    // cylinder.position.z = 0;

    // cylinder.rotation.x = MathUtils.degToRad(15);
    cylinder.rotation.x = MathUtils.degToRad(getRandom(0, 90));
    // cylinder.rotation.y = MathUtils.degToRad(25);
    cylinder.rotation.y = MathUtils.degToRad(getRandom(0, 90));
    // cylinder.rotation.z = MathUtils.degToRad(5);
    cylinder.rotation.z = MathUtils.degToRad(getRandom(0, 90));


    cylinder.customValues = {
      speedX: getRandom(0.7, 1.2),
      speedY: getRandom(0.7, 1.2),
      rotationX: MathUtils.degToRad(getRandom(-60, 60)),
      rotationY: MathUtils.degToRad(getRandom(-60, 60)),
      rotationZ: MathUtils.degToRad(getRandom(-60, 60)),
    };
  }

  function updatePosition(delta) {
    cylinder.position.x += delta * cylinder.customValues.speedX;
    cylinder.position.y -= delta * cylinder.customValues.speedY;
    // cylinder.position.z = 0;

    // cylinder.rotation.z += radiansPerSecond * delta;
    cylinder.rotation.x += delta * cylinder.customValues.rotationX;
    cylinder.rotation.y += delta * cylinder.customValues.rotationY;
    cylinder.rotation.z += delta * cylinder.customValues.rotationZ;

    if ((cylinder.position.y < -5) || (cylinder.position.x > 6)) {
      resetPosition();
    }
  }
  resetPosition();
  cylinder.position.y = getRandom(-5, 4);

  cylinder.tick = (delta) => {
    updatePosition(delta);
  }

  return cylinder;
}

export { createFloater };
  