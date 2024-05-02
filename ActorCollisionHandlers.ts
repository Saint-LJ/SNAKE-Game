import { CollisionHandler, Actor } from './Interfaces';

class ActorCollisionHandlers {
    private pairs: Map<string, CollisionHandler> = new Map();
  
    private toKey(colliderType: string, collidedType: string): string {
        return `${colliderType},${collidedType}`;
    }
  
    addCollisionAction(colliderType: string, collidedType: string, actionApplicator: CollisionHandler): void {
        this.pairs.set(this.toKey(colliderType, collidedType), actionApplicator);
    }
  
    hasCollisionAction(colliderType: string, collidedType: string): boolean {
        return this.pairs.has(this.toKey(colliderType, collidedType));
    }
  
    applyCollisionAction(collider: Actor, collided: Actor): void {
        const key = this.toKey(collider.type, collided.type);
        if (this.hasCollisionAction(collider.type, collided.type)) {
            const handler = this.pairs.get(key)!;
            handler.applyAction(collider, collided);
        }
    }
    
}

export default ActorCollisionHandlers;
  