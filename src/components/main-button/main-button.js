import "./main-button.scss";
import { Component } from "react";

class MainButton extends Component {
  state = {
    count: 0,
    doubleClickCounter: 0,
  };

  componentDidUpdate(prevProps) {
    if (this.props.count !== prevProps.count) {
      this.setState({
        count: this.props.count,
      });
    }
    if (this.props.doubleClickCounter !== prevProps.doubleClickCounter) {
      this.setState({
        doubleClickCounter: this.props.doubleClickCounter,
      });
    }
  }

  onCount = () => {
    this.setState(
      {
        count: this.state.count + 1 + this.props.doubleClickCounter,
      },
      () => {
        this.props.onClickCount(this.state.count);
      }
    );
  };

  render() {
    const { count } = this.props;

    return (
      <div className="main-button">
        <div className="main-button__counter">Score: {count}</div>
        <button className="main-button__main-btn" onClick={this.onCount}>
          <img
            src={require("../../img/pizza_main2.png")}
            alt="Click the pizza! :)"
            draggable="false"
          />
        </button>
      </div>
    );
  }
}

export default MainButton;
