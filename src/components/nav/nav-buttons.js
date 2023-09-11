import "./nav-buttons.scss";
import { Component } from "react";

class NavButtons extends Component {
  onReset = () => {
    this.props.onResetCount(0, 0);
  };

  render() {
    return (
      <div className="nav-buttons">
        <button onClick={this.onReset}>Reset</button>
      </div>
    );
  }
}

export default NavButtons;
