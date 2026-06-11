import type { Object3DEventMap, Scene } from "three"

export interface Updatable {
    tick: (delta: number) => void
    remove_from_scene: (scene: Scene<Object3DEventMap>) => void
}