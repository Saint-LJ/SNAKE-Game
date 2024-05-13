/**
 * @note main
 */
import React, { useEffect } from 'react';

import WorldModel from './WorldModel';
import CanvasWorldView from './CanvasWorldView';
import Snake from './Snake';
import Point from './Point';
import SnakeController from './SnakeController';
import GameController from './GameController';
import HumanPlayer from './HumanPlayer';
import AvoidWallsPlayer from './AvoidWallsPlayer';
import LRKeyInputHandler from './LRKeyInputHandler';

function App() {
    useEffect(() => {
        const world = new WorldModel(new Snake(new Point(2, 2), 5), 10, 10);
        const canvasWorldView = new CanvasWorldView(10);
        world.addView(canvasWorldView);

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
