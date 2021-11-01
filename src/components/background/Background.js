import { BirdAnimation } from './BirdAnimation/BirdAnimation.js';
import { CubeAnimation } from './CubeAnimation/CubeAnimation.js';
import { FloatingAnimation } from './FloatingAnimation/FloatingAnimation.js';

// import main from "./main";



class Background {
    constructor() {
        this.birdAnimation = new BirdAnimation();
        this.cubeAnimation = new CubeAnimation();
        this.floatingAnimation = new FloatingAnimation();

        // currentAnimation
        // 0: cube
        // 1: birds
        this.currentAnimation = 0;

    }

    async init(){
        // BirdAnimation has to load heavy models
        // This function does it asynchronously
        await this.birdAnimation.init();
    }

    getAnimationClassNames(){
        return ['settings-floating', 'settings-cube', 'settings-birds'];
    }

    getCurrentAnimation(){
        return this.currentAnimation;
    }

    stop(){
        this.birdAnimation.stop();
        this.cubeAnimation.stop();
        this.floatingAnimation.stop();
    }

    startCubeAnimation(){
        this.stop();
        // this.birdAnimation.stop();
        this.currentAnimation = 1;
        this.cubeAnimation.start();
    }

    startBirdAnimation(){
        this.stop();
        // this.cubeAnimation.stop();
        
        this.currentAnimation = 2;
        this.birdAnimation.start();
    }

    startFloatingAnimation(){
        this.stop();

        this.currentAnimation = 0;
        this.floatingAnimation.start();
    }
}

export default Background;
