class ArrayIterator<T> {
    private arr: T[];
    private index: number = 0;

    constructor(arr: T[]) {
        this.arr = arr;
    }
  
    next(): { value: T | undefined; done: boolean } {
        if (this.index < this.arr.length) {
            return { value: this.arr[this.index++], done: false };
        } else {
            return { value: undefined, done: true };
        }
    }
}
  