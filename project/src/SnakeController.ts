import Snake from './Snake';
import WorldModel from './WorldModel';
import Point from './Point';

class SnakeController {
    private snakeWorld: WorldModel;
    private slitherer: Snake;

    constructor(snakeWorld: WorldModel, slitherer: Snake) {
        this.snakeWorld = snakeWorld;
        this.slitherer = slitherer;
    }

    turnSnakeLeft(): void {
        this.slitherer.turnLeft();
    }

    turnSnakeRight(): void {
        this.slitherer.turnRight();
    }

    get snakePosition(): Point {
        return this.slitherer.currentPosition;
    }

    get snakeDirection(): 'left' | 'right' | 'up' | 'down' {
        return this.slitherer.currentDirection;
    }

    get worldWidth(): number {
        return this.snakeWorld.width;
    }

    get worldHeight(): number {
        return this.snakeWorld.height;
    }
}

export default SnakeController;
