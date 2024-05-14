import IActor from "./IActor";

interface ICollidable extends IActor {
    didCollide(other: IActor): boolean;
}

export default ICollidable;