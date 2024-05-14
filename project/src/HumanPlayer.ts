import IInputHandler from './IInputHandler';
import Player from './Player';
import SnakeController from './SnakeController';

class HumanPlayer extends Player {
    constructor(sc: SnakeController, private inputHandler: IInputHandler) {
        super(sc);
    }

    makeTurn(): void {
        if (this.inputHandler.madeLeftMove()) {
            this.sc.turnSnakeLeft();
            this.inputHandler.resetLeftMove();
        } else if (this.inputHandler.madeRightMove()) {
            this.sc.turnSnakeRight();
            this.inputHandler.resetRightMove();
        }
    }
}

export default HumanPlayer;
