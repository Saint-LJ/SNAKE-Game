import IWorldView from './IWorldView';
import WorldModel from './WorldModel';

class CanvasWorldView implements IWorldView {
    private scalingFactor: number;
    private worldCanvas: HTMLCanvasElement;
    private context: CanvasRenderingContext2D;

    constructor(scalingFactor: number) {
        this.scalingFactor = scalingFactor;
        this.worldCanvas = document.createElement("canvas");
        this.context = this.worldCanvas.getContext("2d")!;
        document.body.appendChild(this.worldCanvas);
    }

    private clearCanvas(): void {
        this.context.clearRect(0, 0, this.worldCanvas.width, this.worldCanvas.height);
    }

    private displaySnakes(worldModel: WorldModel, color: string): void {
        this.context.fillStyle = color;

        const snakePosition = worldModel.currentSnake.currentPosition;
        this.context.fillRect(
            snakePosition.x * this.scalingFactor, 
            snakePosition.y * this.scalingFactor, 
            this.scalingFactor, 
            this.scalingFactor
        );

        worldModel.allSnakes.forEach(snake => {
            snake.currentParts.forEach(part => {
                this.context.fillRect(
                    part.x * this.scalingFactor, 
                    part.y * this.scalingFactor, 
                    this.scalingFactor, 
                    this.scalingFactor
                );
            });
        });
    }

    private displayFoods(worldModel: WorldModel, color: string): void {
        const foods = worldModel.allFoods();

        if (!foods) {
            return;
        }

        for (let i = 0; i < foods.length; i++) {
            this.context.fillStyle = color;
            this.context.beginPath();
            this.context.arc(
                foods[i].position.x * this.scalingFactor,
                foods[i].position.y * this.scalingFactor,
                0.5 * this.scalingFactor,
                0, 
                Math.PI * 2
            );
            this.context.fill();
            console.log('\n[Food ' + i + ' ]\n' + foods[i].position.x + ' ' + foods[i].position.y);
        }
    }

    display(worldModel: WorldModel): void {
        this.worldCanvas.width = worldModel.width * this.scalingFactor;
        this.worldCanvas.height = worldModel.height * this.scalingFactor;

        this.clearCanvas(); // this fixes the redraws, thank god
        this.displayFoods(worldModel, 'red');
        this.displaySnakes(worldModel, 'green');
    }
}

export default CanvasWorldView;
