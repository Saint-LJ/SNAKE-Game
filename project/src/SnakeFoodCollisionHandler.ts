import { CollisionHandler, Actor } from './Interfaces';
import Snake from "./Snake";
import Food from './Food';

class SnakeFoodCollisionHandler implements CollisionHandler {
    applyAction(collider: Actor, collided: Actor): void {
        if (collider instanceof Snake && collided instanceof Food) {
            collided.eat();
            collider.grow();
        }
    }
}
