import {
    BoxGeometry,
    MathUtils,
    Mesh,
    MeshStandardMaterial,
    TextureLoader,
    type Object3DEventMap,
} from 'three';

function createMaterial() {
    // create a texture loader.
    const textureLoader = new TextureLoader();

    // load a texture
    const texture = textureLoader.load(
        '/textures/uv-test-bw.png',
    );

    // create a "standard" material using
    // the texture we just loaded as a color map
    const material = new MeshStandardMaterial({
        map: texture,
    });

    return material;
}

// export interface TickableMesh extends Mesh<BoxGeometry, MeshStandardMaterial, Object3DEventMap> {
//     tick: (delta: number) => void;
// }

export class Cube {
    mesh: Mesh<BoxGeometry, MeshStandardMaterial, Object3DEventMap>
    radiansPerSecond: number

    constructor() {
        const geometry = new BoxGeometry(2, 2, 2);
        const material = createMaterial();
        const cube = new Mesh(geometry, material);

        cube.rotation.set(-0.5, -0.1, 0.8);

        this.radiansPerSecond = MathUtils.degToRad(30);

        // cube.tick = (delta) => {
        //     // increase the cube's rotation each frame
        //     cube.rotation.z += delta * radiansPerSecond;
        //     cube.rotation.x += delta * radiansPerSecond;
        //     cube.rotation.y += delta * radiansPerSecond;
        // };

        this.mesh = cube
    }

    tick(delta: number) {
        this.mesh.rotation.z += delta * this.radiansPerSecond;
        this.mesh.rotation.x += delta * this.radiansPerSecond;
        this.mesh.rotation.y += delta * this.radiansPerSecond;
    }
}

// function createCube(): TickableMesh {
//     const geometry = new BoxGeometry(2, 2, 2);
//     const material = createMaterial();
//     const cube = new Mesh(geometry, material) as TickableMesh;

//     cube.rotation.set(-0.5, -0.1, 0.8);

//     const radiansPerSecond = MathUtils.degToRad(30);

//     cube.tick = (delta) => {
//         // increase the cube's rotation each frame
//         cube.rotation.z += delta * radiansPerSecond;
//         cube.rotation.x += delta * radiansPerSecond;
//         cube.rotation.y += delta * radiansPerSecond;
//     };

//     return cube;
// }

// export { createCube };
