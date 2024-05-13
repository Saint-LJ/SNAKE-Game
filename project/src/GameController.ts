import WorldModel from './WorldModel';
import Player from './Player';

class GameController {
    private world: WorldModel;
    private player1!: Player;
    private player2!: Player;
    private lastTime: number = 0;

    constructor(world: WorldModel) {
        this.world = world;
    }

    setPlayer1(player: Player): void {
        this.player1 = player;
    }

    setPlayer2(player: Player): void {
        this.player2 = player;
    }

    run(): void {
        const updateFrame = (time: number) => {
            this.player1.makeTurn();
            this.player2.makeTurn();

            const deltaTime = time - this.lastTime;
            if (deltaTime > 250) {
                this.world.update(1);
                this.lastTime = time;
            }

            requestAnimationFrame(updateFrame);
        };

        requestAnimationFrame(updateFrame);
    }
}

export default GameController;
