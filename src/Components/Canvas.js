import React, {Component} from 'react';
import Toolbar from './Toolbar';
import './Canvas.css';

class Canvas extends Component {
    constructor(props) {
        super(props);
        this.updateArray = this.updateArray.bind(this);
        this.state = {
            array: [],
            currentIndex: [],
        }
    }

    updateArray(array, currentIndex) {
        this.setState({
            array: array,
            currentIndex: currentIndex,
        });
    }

    render() {
        const array = this.state.array,
            current = this.state.currentIndex;
        return (
            <div>
                <Toolbar 
                    updateArray={this.updateArray}>
                </Toolbar>
                <div id="arrayBarContainer">
                    { array.length ? array.map((number, index) => {
                        const width = `${window.screen.width*0.40/this.state.array.length}px`;
                        return <div
                            key={index} 
                            className = {current.includes(index) ? "currentArrayBar arrayBar" : "arrayBar"}
                            style={{width: width, height: `${number/1500*window.screen.height}px`}}>
                        </div>
                    }) : null
                    }
                </div>
            </div>
        )
    }
}

export default Canvas;