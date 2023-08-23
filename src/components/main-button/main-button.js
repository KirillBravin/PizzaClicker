import './main-button.scss';
import {Component} from 'react';

class MainButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }

    onCount = () => {
        this.setState(({count}) => {
            return {
                count: ++count
            }
        })
    }

    render() {
        const {count} = this.state;

        return (
            <div className="main-button">
                <div className="main-button__counter">Score: {count}</div>
                <button className="main-button__main-btn" onClick={this.onCount}>
                    <img src={require("../../img/pizza_main2.png")} alt="Click the pizza! :)" draggable="false" />
                </button>
            </div>
        )
    }
}

export default MainButton;