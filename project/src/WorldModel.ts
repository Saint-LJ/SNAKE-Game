import { Actor, Collidable } from './Interfaces';
import ActorCollisionHandlers from './ActorCollisionHandlers';
import Snake from './Snake';
import IWorldView from './IWorldView';

class WorldModel {
    private snake: Snake;
    private _width: number;
    private _height: number;
    private worldView: IWorldView | null = null;

    private _allSnakes: Snake[] = [];
    private _allViews: IWorldView[] = [];

    private actors: Actor[] = [];
    private collisionHandlers: ActorCollisionHandlers;

    constructor(snake: Snake, width: number = 100, height: number = 100) {
        this.snake = snake;
        this._width = width;
        this._height = height;

        this.collisionHandlers = new ActorCollisionHandlers();
    }

    set view(view: IWorldView) {
        this.worldView = view;
    }

    update(steps: number): void {
        this.actors.forEach(actor => actor.update());

        this._allSnakes.forEach(snake => snake.move(steps));
        this._allViews.forEach(view => view.display(this));

        const collidedSnakes: Snake[] = [];
        this._allSnakes.forEach((snakeA, idxA) => {
            this._allSnakes.forEach((snakeB, idxB) => {
                if (idxA !== idxB && snakeA.didCollide(snakeB) && !collidedSnakes.includes(snakeA)) {
                    collidedSnakes.push(snakeA);
                }
                if (snakeA.didCollide(snakeA) && !collidedSnakes.includes(snakeA)) {
                    collidedSnakes.push(snakeA);
                }
            });
        });
        collidedSnakes.forEach(collidedSnake => {
            const index = this.allSnakes.indexOf(collidedSnake);
            if (index > -1) {
                this.allSnakes.splice(index, 1);
            }
        });


        this.snake.move(steps);
        if (this.worldView !== null) {
            this.worldView.display(this);
        }
    }


    addSnake(snake: Snake): void {
        this.allSnakes.push(snake);
    }

    addView(view: IWorldView): void {
        this._allViews.push(view);
    }

    get allSnakes(): Snake[] {
        return this._allSnakes;
    }


    get currentSnake(): Snake {
        return this.snake;
    }

    get width(): number {
        return this._width;
    }

    get height(): number {
        return this._height;
    }
}

export default WorldModel;
