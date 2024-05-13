interface Actor {
    update(): void;
    readonly type: string;
}

interface Collidable extends Actor {
    didCollide(other: Actor): boolean;
}

interface CollisionHandler {
    applyAction(collider: Actor, collided: Actor): void;
}

export { Actor, Collidable, CollisionHandler };