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

    display(worldModel: WorldModel): void {
        this.worldCanvas.width = worldModel.width * this.scalingFactor;
        this.worldCanvas.height = worldModel.height * this.scalingFactor;

        const snakePosition = worldModel.currentSnake.currentPosition;
        
        this.context.fillStyle = 'green';

        this.context.fillRect(snakePosition.x * this.scalingFactor, snakePosition.y * this.scalingFactor, 
            this.scalingFactor, this.scalingFactor);
    
    
        worldModel.allSnakes.forEach(snake => {
            snake.currentParts.forEach(part => {
                this.context.fillRect(part.x * this.scalingFactor, part.y * this.scalingFactor, 
                    this.scalingFactor, this.scalingFactor);
            });
        });
    }
}

export default CanvasWorldView;
