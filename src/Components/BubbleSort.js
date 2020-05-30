import Sort from './Sort';

class BubbleSort extends Sort {
    constructor(array) {
        super(array);
        this.i = 0;
        this.j = 0;
    }

    reset() {
        this.sorted = false;
        this.i = 0;
        this.j = -1;
        return [-1, -1];
    }

    step() {
        let done = false;
        if (this.i === this.n) {
            done = true;
        } else if (this.j === this.n-this.i-1 && this.sorted) {
            done = true;
        } else if (this.j === this.n-this.i-1) {
            this.j = 0;
            this.i++;
            this.sorted = true;
        } 
        if (this.array[this.j] > this.array[this.j+1]) {
            let temp = this.array[this.j];
            this.array[this.j] = this.array[this.j+1];
            this.array[this.j+1] = temp;
            this.sorted = false;
            this.j++;
        } else {
            this.j++;
        }
        return [this.array, this.j, this.j+1, done];
    }
}

export default BubbleSort;
