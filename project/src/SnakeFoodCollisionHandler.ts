import CollisionHandler from './ICollisionHandler';
import IActor from './IActor';
import Snake from "./Snake";
import Food from './Food';

class SnakeFoodCollisionHandler implements CollisionHandler {
    applyAction(collider: IActor, collided: IActor): void {
        if (collider instanceof Snake && collided instanceof Food) {
            collided.eat();
            collider.grow();
        }
    }
}
