import React, {Component} from 'react'

class Toolbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            length: this.props.arrayLength,
            speed: this.props.speed,
            sorting: false,
        }
    }

    render() {
        return (
            <div className={"toolbar"}>
                <div className={"ProjectTitle"}>
                    VisualSort
                </div>
                <div className={"ControlPanel"}>
                    <button disabled={this.state.sorting} className="ControlButton" onClick={this.props.generateArray}>Generate Array</button>
                    <button disabled={this.state.sorting} className="ControlButton">Bubble Sort</button>
                    <button disabled={this.state.sorting} className="ControlButton">Quick Sort</button>
                    <button disabled={this.state.sorting} className="ControlButton">Merge Sort</button>
                    <button 
                        className="PlayButton"
                        onClick={() => {
                            this.setState({
                                sorting: true,
                            });
                            this.props.sort();
                        }}
                    >Sort</button> 
                    Array Length:
                    <input 
                        type="range" 
                        min="10" 
                        max="100" 
                        value={this.state.length}
                        className="arrayLenghtSelector" 
                        onChange={(e) => {
                            this.props.setArrayLength(e.target.value);
                            this.setState({
                                length: e.target.value,
                            });
                        }}
                    />
                    Speed:
                    <input 
                        type="range" 
                        min="10" 
                        max="100" 
                        value={this.state.speed}
                        className="arrayLenghtSelector" 
                        onChange={(e) => {
                            this.props.setSpeed(110 - e.target.value);
                            this.setState({
                                speed: e.target.value,
                            });
                        }}
                    />
                </div>
            </div>
        )
    }
}

export default Toolbar;