import "./pizza-sidebar.scss";

import { Component } from "react";

class PizzaSidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: null,
      doubleClickCounter: 0,
      priceDoubleClick: 100,
    };
  }

  componentDidUpdate(prevProps) {
    if (this.props.doubleClickCounter !== prevProps.doubleClickCounter) {
      this.setState({
        doubleClickCounter: this.props.doubleClickCounter,
      });
    }
    if (this.props.count !== prevProps.count) {
      this.setState({
        count: this.props.count,
      });
    }
  }

  onDoubleClick = () => {
    let tempCount = this.state.count;
    let tempPriceDoubleclick = this.state.priceDoubleClick;
    tempCount = tempCount - tempPriceDoubleclick;
    if (this.state.count >= this.state.priceDoubleClick) {
      this.setState(
        {
          doubleClickCounter: this.state.doubleClickCounter + 1,
          priceDoubleClick: this.state.priceDoubleClick * 3,
          count: tempCount,
        },
        () => {
          this.props.onDoubleClick(this.state.doubleClickCounter);
          this.props.onClickCount(this.state.count);
        }
      );
    }
  };

  render() {
    const { count, priceDoubleClick } = this.state;

    return (
      <div className="side-bar">
        <button
          className="side-bar__btn side-bar__btn_btn2x"
          onClick={this.onDoubleClick}>
          +1 click
        </button>
        <strong className="side-bar__price">Price: {priceDoubleClick}</strong>
      </div>
    );
  }
}

export default PizzaSidebar;

/* onCount = () => {
  if (this.props.count === this.state.count) {
    this.setState(
      {
        count: this.state.count + 1 + this.props.doubleClickCounter,
      },
      () => {
        this.props.onClickCount(this.state.count);
      }
    );
  } else if (this.props.count < this.state.count && this.props.count > 0) {
    this.setState({
      count: this.props.count + 1 + this.props.doubleClickCounter,
    });
  } else {
    this.setState(
      {
        count: 1,
      },
      () => {
        this.props.onClickCount(this.state.count);
      }
    );
  }
}; */
