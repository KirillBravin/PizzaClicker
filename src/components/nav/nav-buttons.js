import './nav-buttons.scss';
import {Component} from 'react';

class NavButtons extends Component {
    constructor (props) {
        super(props)
    }

    render() {
        return (
            <div className="nav-buttons">
                <button>Reset</button>
            </div>
        )
    }
}

export default NavButtons;