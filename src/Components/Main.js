import React, {Component} from 'react';
import Toolbar from './Toolbar';
import BubbleSort from './BubbleSort';

class Main extends Component {
    constructor(props) {
        super(props);
        this.generateArray = this.generateArray.bind(this);
        this.sort = this.sort.bind(this);
        this.setArrayLength = this.setArrayLength.bind(this);
        this.setSpeed = this.setSpeed.bind(this)
        this.state = {
            sortAlgo : "BubbleSort",
            array: [],
            speed: 20,
            length: 40,
            currentIndex: [],
        }
    }

    componentDidMount() {
        this.generateArray();
    }

    generateArray() {
        this.setState({
            array: Array.from({length: this.state.length}, () => 10+ Math.floor(Math.random() * 1000)),
            currentIndex: [],
        })
    }

    setArrayLength(length) {
        this.setState({
            length: length,
        });
    }

    setSpeed(speed) {
        this.setState({
            speed: speed,
        });
    }

    updateArray(array, currentIndex) {
        this.setState({
            array: array,
            currentIndex: currentIndex,
        });
    }

    sort() {
        let array = this.state.array;
        let sortAlgo = new BubbleSort(array);
        let [i, j] = sortAlgo.reset();
        let done = false;
        var timer = setInterval(() => {
            [array, i, j, done] = sortAlgo.step();
            this.setState({
                array: array,
                currentIndex: [i, j],
            });
            if (done) {
                this.setState({
                    currentIndex: [],
                });
                clearInterval(timer);
            }
        }, this.state.speed);
    }

    render() {
        const array = this.state.array,
            current = this.state.currentIndex;
        return (
            <div>
                <Toolbar 
                    arrayLength={this.state.length}
                    speed={this.state.speed}
                    generateArray={this.generateArray}
                    sort={this.sort}
                    setArrayLength={this.setArrayLength}
                    setSpeed={this.setSpeed}>
                </Toolbar>
                <div id="arrayBarContainer">
                    { array.length ? array.map((number, index) => {
                        const bgColor = current.includes(index) ? "rgb(245, 44, 17)" : 
                                        "rgb(63, 218, 202)";
                        const width = `${window.screen.width*0.40/this.state.array.length}px`;
                        return <div
                            className="arrayBar"
                            key={index} 
                            style={{width: width, height: `${number/1500*window.screen.height}px`, backgroundColor: bgColor, margin: '2px'}}>
                        </div>
                    }) : null
                    }
                </div>
            </div>
        )
    }
}

export default Main;