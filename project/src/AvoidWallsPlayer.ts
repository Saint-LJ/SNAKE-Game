import Player from './Player';
import SnakeController from './SnakeController';

class AvoidWallsPlayer extends Player {
    constructor(sc: SnakeController) {
        super(sc);
    }

    makeTurn(): void {
        const position = this.sc.snakePosition;
        const direction = this.sc.snakeDirection;
        const worldWidth = this.sc.worldWidth;
        const worldHeight = this.sc.worldHeight;

        if (direction === 'left' && position.x === 0) {
            this.sc.turnSnakeRight();
        } else if (direction === 'right' && position.x === worldWidth - 1) {
            this.sc.turnSnakeLeft();
        } else if (direction === 'up' && position.y === 0) {
            this.sc.turnSnakeRight();
        } else if (direction === 'down' && position.y === worldHeight - 1) {
            this.sc.turnSnakeLeft();
        }
    }
}

export default AvoidWallsPlayer;
