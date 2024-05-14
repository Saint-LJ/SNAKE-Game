import ICollisionHandler from './ICollisionHandler';
import IActor from './IActor';
import Snake from "./Snake";

class SnakeSnakeCollisionHandler implements ICollisionHandler {
    applyAction(collider: IActor, collided: IActor): void {
        if (collider instanceof Snake && collided instanceof Snake) {
            collider.die();
        }
    }
}
  