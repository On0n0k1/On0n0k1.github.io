import { BirdAnimation } from './BirdAnimation/BirdAnimation.js';
import { CubeAnimation } from './CubeAnimation/CubeAnimation.js';
import type { MeshStandardMaterial } from 'three';
import { FloatingAnimation } from './FloatingAnimation/FloatingAnimation.js';

import { FrameCounter } from './FrameCounter/FrameCounter.js';

class Background {
    private birdAnimation: BirdAnimation;
    private cubeAnimation: CubeAnimation;
    private floatingAnimation: FloatingAnimation;
    private currentAnimation: number;

    frameCounter: FrameCounter;

    constructor(floatingMaterials: MeshStandardMaterial[]) {
        this.birdAnimation = new BirdAnimation();
        this.cubeAnimation = new CubeAnimation();
        this.floatingAnimation = new FloatingAnimation(floatingMaterials);
        this.floatingAnimation.setLength(12);

        // this.textInterface = new TextInterface();
        // this.textInterface.init();

        // currentAnimation
        // 0: cube
        // 1: birds
        this.currentAnimation = 0;
        // countFrame()
        // drawCanvas();

        this.frameCounter = new FrameCounter();
    }

    async init() {
        // BirdAnimation has to load heavy models
        // This function does it asynchronously
        await this.birdAnimation.init();
        this.frameCounter.start();
    }

    getAnimationClassNames() {
        return ['settings-floating', 'settings-cube', 'settings-birds'];
    }

    getCurrentAnimation() {
        return this.currentAnimation;
    }

    stop() {
        this.birdAnimation.stop();
        this.cubeAnimation.stop();
        this.floatingAnimation.stop();
    }

    startCubeAnimation() {
        this.stop();
        this.currentAnimation = 1;
        this.cubeAnimation.start();
    }

    startBirdAnimation() {
        this.stop();
        this.currentAnimation = 2;
        this.birdAnimation.start();
    }

    startFloatingAnimation() {
        this.stop();
        this.currentAnimation = 0;
        this.floatingAnimation.start();
    }

    setFloatingLength(
        size: number
    ) {
        console.log("SetFloatingLength ", size);
        return this.floatingAnimation.setLength(size);
    }

    getFloatingLength() {
        return this.floatingAnimation.getLength();
    }

    getFloatingMaxLength() {
        return this.floatingAnimation.getMaxLength();
    }

    focusStork() {
        this.birdAnimation.focusStork();
    }

    focusParrot() {
        this.birdAnimation.focusParrot();
    }

    focusFlamingo() {
        this.birdAnimation.focusFlamingo();
    }

    getFocus() {
        return this.birdAnimation.getFocus();
    }

}

export default Background;
