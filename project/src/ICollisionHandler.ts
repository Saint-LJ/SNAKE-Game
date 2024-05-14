import IActor from "./IActor";

interface ICollisionHandler {
    applyAction(collider: IActor, collided: IActor): void;
}

export default ICollisionHandler;