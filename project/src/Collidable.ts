import Actor from "./Actor";

interface Collidable extends Actor {
    didCollide(other: Actor): boolean;
}

export default Collidable;