import Logo from "../../img/pizza_logo.png";
import "./App.scss";
import { Component } from "react";

import NavButtons from "../nav/nav-buttons";
import PizzaSidebar from "../pizza-sidebar/pizza-sidebar";
import MainButton from "../main-button/main-button";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      doubleClickCounter: 0,
      reset: false,
    };
  }

  onClickCount = (count) => {
    this.setState({ count });
  };

  onResetCount = (count, doubleClickCounter) => {
    this.setState({ count, doubleClickCounter, reset: true });
  };

  onReset = (reset) => {
    this.setState({ reset });
  };

  onDoubleClick = (doubleClickCounter) => {
    this.setState({ doubleClickCounter });
  };

  render() {
    const { count, doubleClickCounter, reset } = this.state;

    return (
      <div className="App">
        <link rel="icon" href={Logo} />
        <header>
          <NavButtons onResetCount={this.onResetCount} />
        </header>
        <aside>
          <PizzaSidebar
            count={count}
            doubleClickCounter={doubleClickCounter}
            reset={reset}
            onDoubleClick={this.onDoubleClick}
            onClickCount={this.onClickCount}
            onReset={this.onReset}
          />
        </aside>
        <main>
          <MainButton
            count={count}
            doubleClickCounter={doubleClickCounter}
            onClickCount={this.onClickCount}
          />
        </main>
      </div>
    );
  }
}

export default App;
