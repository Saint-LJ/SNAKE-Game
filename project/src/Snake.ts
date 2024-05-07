import { Collidable } from './Interfaces';
import Point from './Point';

class Snake implements Collidable {
    private position: Point;
    private direction: 'left' | 'right' | 'up' | 'down';

    public currentParts: Point[];
    private isCurrentlyActive: boolean = true;

    constructor(startPosition: Point, size: number) {
        this.isCurrentlyActive = true;
        this.currentParts = [startPosition];
        for (let i = 1; i < size; i++) {
            this.currentParts.push(new Point(startPosition.x - i, startPosition.y));
        }
    }

    update(): void {
        this.move(1);
    }
    
    die(): void {
        this.isCurrentlyActive = false;
    }

    get isActive(): boolean {
        return this.isCurrentlyActive;
    }

    get type(): string {
        return 'snake';
    }

    didCollide(s: Snake): boolean {
        return s.currentParts.some(part => this.currentPosition.equals(part)) || this.currentParts.slice(1).some(part => this.currentPosition.equals(part));
    }

    grow(): void {
        // Fix
    }

    /**
     * @deprecated Use `turnLeft` or `turnRight` instead!
     */
    turn(): void {
        // Deprecated :(
    }

    turnLeft(): void {
        if (this.direction === 'up') this.direction = 'left';
        else if (this.direction === 'down') this.direction = 'right';
        else if (this.direction === 'left') this.direction = 'down';
        else if (this.direction === 'right') this.direction = 'up';
    }

    turnRight(): void {
        if (this.direction === 'up') this.direction = 'right';
        else if (this.direction === 'down') this.direction = 'left';
        else if (this.direction === 'left') this.direction = 'up';
        else if (this.direction === 'right') this.direction = 'down';
    }

    move(steps: number): void {
        for (let i = 0; i < steps; i++) {
            if (this.direction === 'up') {
                this.position = new Point(this.position.x, this.position.y + 1);
            } else if (this.direction === 'down') {
                this.position = new Point(this.position.x, this.position.y - 1);
            } else if (this.direction === 'left') {
                this.position = new Point(this.position.x - 1, this.position.y);
            } else if (this.direction === 'right') {
                this.position = new Point(this.position.x + 1, this.position.y);
            }
        }
    }

    get currentPosition(): Point {
        return this.position;
    }

    get currentDirection(): 'left' | 'right' | 'up' | 'down' {
        return this.direction;
    }
}

export default Snake;
