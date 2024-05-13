import SnakeController from "./SnakeController";

abstract class Player {
    protected sc: SnakeController;

    constructor(sc: SnakeController) {
        this.sc = sc;
    }

    abstract makeTurn(): void;
}

export default Player;
