import Actor from "./Actor";

interface CollisionHandler {
    applyAction(collider: Actor, collided: Actor): void;
}

export default CollisionHandler;