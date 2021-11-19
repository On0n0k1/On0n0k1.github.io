import {
  MeshStandardMaterial,
  TextureLoader,
} from 'three';


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

function getFileNames(){
  return [
    'dockerlogo.png',
    'pythonlogo.png',
    'webassemblylogo.png',
    'webpacklogo.png',
    'rustlogo.png',
    'reactlogo.png',
    'webstack.png',
  ];
}

export default function createMaterials(){
  const textureLoader = new TextureLoader();
  textureLoader.setPath('./assets/textures/');
  let materials = getFileNames().map(
    (name)=>{
      // console.log(name);
      // return name;
      const texture = textureLoader.load(name);
      const material = new MeshStandardMaterial({
        color: 'skyblue',
        map: texture,
      });
      return material;
    }
  );

  return materials;
}

function getMaterial(textureId) {
  // create a texture loader.
  const textureLoader = new TextureLoader();
  textureLoader.setPath('./assets/textures/');

  // load a texture
  const texture = textureLoader.load(getFileName(textureId));
  // console.log(createMaterials());
  createMaterials();

  // create a "standard" material using
  // the texture we just loaded as a color map
  const material = new MeshStandardMaterial({
    color: 'skyblue',
    map: texture,
  });

  return material;
}
