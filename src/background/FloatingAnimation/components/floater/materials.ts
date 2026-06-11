import {
  LoadingManager,
  MeshStandardMaterial,
  TextureLoader,
} from 'three';

function getFileNames() {
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

export default function createMaterials(): Promise<MeshStandardMaterial[]> {
  return new Promise((resolve) => {
    const manager = new LoadingManager();
    const textureLoader = new TextureLoader(manager);
    textureLoader.setPath('./textures/');
    const materials = getFileNames().map(
      (name) => {
        // console.log(name);
        // return name;
        const texture = textureLoader.load(name);
        console.log("Loading texture ", name);
        const material = new MeshStandardMaterial({
          color: 'skyblue',
          map: texture,
        });
        return material;
      }
    );
    manager.onLoad = () => resolve(materials);
  })
}
