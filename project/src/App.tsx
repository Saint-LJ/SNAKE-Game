import { useEffect } from 'react';
import WorldModel from './WorldModel';
import CanvasWorldView from './CanvasWorldView';
import Snake from './Snake';
import Point from './Point';
import SnakeController from './SnakeController';
import GameController from './GameController';
import HumanPlayer from './HumanPlayer';
import AvoidWallsPlayer from './AvoidWallsPlayer';
import LRKeyInputHandler from './LRKeyInputHandler';
import Food from './Food';

function App() {
    useEffect(() => {
        const worldDimensions = 25;
        const middleOfWorld = (worldDimensions / 2);
        const snakeStartPos = new Point(middleOfWorld, middleOfWorld);
        const world = new WorldModel(new Snake(snakeStartPos, 2), 
            worldDimensions, worldDimensions);
        const canvasWorldView = new CanvasWorldView(worldDimensions);
        world.addView(canvasWorldView);

        /**
         * @note this is just test code, to see if the food shows on screen
         */
        const food = new Food(2, 2);
        world.addFood(food);

        const snakeController = new SnakeController(world, world.currentSnake);
        const inputHandler = new LRKeyInputHandler();

        const humanPlayer = new HumanPlayer(snakeController, inputHandler);
        const avoidWallsPlayer = new AvoidWallsPlayer(snakeController);

        const gameController = new GameController(world);
        gameController.setPlayer1(humanPlayer);
        gameController.setPlayer2(avoidWallsPlayer);
        gameController.run();
    }, []);

    return <div>LJ's Snake Game</div>;
};

export default App;
