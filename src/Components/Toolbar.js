import React, {Component} from 'react'
import BubbleSort from './BubbleSort';
import MergeSort from './MergeSort';
import './Toolbar.css';

class Toolbar extends Component {
    constructor(props) {
        super(props);
        this.generateArray = this.generateArray.bind(this);
        this.sort = this.sort.bind(this)
        this.state = {
            array: [],
            currentIndex: [],
            length: 40,
            speed: 50,
            sorting: false,
            sortAlgo: 0,
            timer: null,
        }
    }

    componentDidMount() {
        this.generateArray();
    }

    generateArray() {
        this.setState({
            array: Array.from({length: this.state.length}, () => 10+ Math.floor(Math.random() * 1000)),
            currentIndex: [],
        }, () => {
            this.props.updateArray(this.state.array, this.state.currentIndex);
        })
    }
    
    sort() {
        let array = this.state.array;
        var sortAlgo;
        if (this.state.sortAlgo === 0) {
            sortAlgo = new BubbleSort(array);
        } else if (this.state.sortAlgo === 1) {
            sortAlgo = new MergeSort(array);
        }
        let [i, j] = sortAlgo.reset();
        let done = false;
        var timer = setInterval(() => {
            [array, i, j, done] = sortAlgo.step();  
            this.setState({
                array: array,
                currentIndex: [i, j],
                sorting: true,
                timer: timer,
            }, () => {
                this.props.updateArray(this.state.array, this.state.currentIndex);
            });
            
            if (done) {
                this.setState({
                    currentIndex: [],
                    sorting: false,
                    timer: null,
                }, () => {
                    this.props.updateArray(this.state.array, this.state.currentIndex);
                });
                clearInterval(timer);
            }
        }, this.state.speed*1.5);
    }

    stop() {
        clearInterval(this.state.timer);
        this.setState({
            sorting: false,
            timer: null,
            currentIndex: [],
        }, () => {
            this.props.updateArray(this.state.array, this.state.currentIndex);
        });
    }

    render() {
        const ALGOS = ["Bubble Sort"];
        return (
            <div className={"toolbar"}>
                
                <div className={"controlPanel alignLeft"}>
                    <span className={"ProjectTitle alignLeft"}>
                        VisualSort
                    </span>
                    
                    <span className={"algoButtonContainer"}>
                        <div>
                            {ALGOS.map((algo, index) => {
                                return <button disabled={this.state.sorting}
                                    key={index}
                                    className={ this.state.sortAlgo === index ? "selectedAlgoButton" : "algoButton"}
                                    onClick={ () => {
                                        this.setState({sortAlgo: index})
                                    }}
                                >{algo}</button>
                            })}
                        </div>
                    </span>

                    <span>
                        <button disabled={this.state.sorting} className="generateArrayButton" onClick={this.generateArray}>Generate Array</button>
                    </span>

                    <span className="controlLabel">Array Length:</span>
                    <span>
                        <input 
                            type="range" 
                            min="10" 
                            max="100" 
                            value={this.state.length}
                            disabled={this.state.sorting}
                            className="arrayLenghtSelector controlSelector" 
                            onChange={(e) => {
                                this.setState({
                                    length: e.target.value,
                                });
                            }}
                        />
                    </span>

                    <span className="controlLabel">Speed:</span>
                    <span>
                        <input 
                            type="range" 
                            min="10" 
                            max="100" 
                            disabled={this.state.sorting}
                            value={110-this.state.speed}
                            className="speedSelector controlSelector" 
                            onChange={(e) => {
                                this.setState({
                                    speed: 110 - e.target.value,
                                });
                            }}
                        />
                    </span>

                    <span>
                        <button 
                            className="sortButton"
                            onClick={() => {
                                if (this.state.sorting) {
                                    this.stop();
                                } else {
                                    this.sort();
                                }
                            }}
                        >
                            {this.state.sorting ? "Stop" : "Sort"}
                        </button> 
                    </span>

                </div>
            </div>
        )
    }
}

export default Toolbar;