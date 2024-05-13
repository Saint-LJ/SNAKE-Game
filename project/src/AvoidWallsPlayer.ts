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

        /**
         * @note
         * Changed `position.x === 0` and `position.y === 0`
         * Bc it conflicts with certain `scalingFactor` numbers
         * i.e. `scalingFactor = 25` makes the `position.x = 0.5`
         * this also coincides with the `position.x == worldWidth - 1`, etc
         */
        if (direction === 'left' && position.x < 1) {
            this.sc.turnSnakeRight();
        } else if (direction === 'right' && position.x > (worldWidth - 2)) {
            this.sc.turnSnakeRight();
        } else if (direction === 'up' && position.y < 1) {
            this.sc.turnSnakeRight();
        } else if (direction === 'down' && position.y > (worldHeight - 2)) {
            this.sc.turnSnakeRight();
        }
        console.log(
            "\n[Snake]" + 
            "\nX:" + position.x + 
            "\nY: " + position.y + 
            "\nDir: " + direction
        );
    }
}

export default AvoidWallsPlayer;
