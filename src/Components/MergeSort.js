import Sort from './Sort';

class MergeSort extends Sort {
    constructor(array) {
        super(array);
        this.auxarray = [];
        this.steps = [];
        this.curr_step = 0;
        this.sorted = false;
        this.compute_steps();
    }

    
}

export default MergeSort;