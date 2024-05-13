import CollisionHandler from './CollisionHandler';
import Actor from './Actor';
import Snake from "./Snake";

class SnakeSnakeCollisionHandler implements CollisionHandler {
    applyAction(collider: Actor, collided: Actor): void {
        if (collider instanceof Snake && collided instanceof Snake) {
            collider.die();
        }
    }
}
  