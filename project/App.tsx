/**
 * @note sh commands I used to install react 
 * `npm install @types/react @types/react-dom --save-dev`
 * …idk if it's even the proper way
 */
import React, { useEffect } from 'react';

import WorldModel from './src/WorldModel';
import Snake from './src/Snake';
import Point from './src/Point';
import SnakeController from './src/SnakeController';
import GameController from './src/GameController';
import HumanPlayer from './src/HumanPlayer';
import AvoidWallsPlayer from './src/AvoidWallsPlayer';
import LRKeyInputHandler from './src/LRKeyInputHandler';

const App: React.FC = () => {
    useEffect(() => {
        const world = new WorldModel(new Snake(new Point(2, 2), 5), 100, 100);
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
