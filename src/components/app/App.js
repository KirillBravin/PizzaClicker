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
    };
  }

  onClickCount = (count) => {
    this.setState({ count });
  };

  onResetCount = (count, doubleClickCounter) => {
    this.setState({ count, doubleClickCounter });
  };

  onDoubleClick = (doubleClickCounter) => {
    this.setState({ doubleClickCounter });
  };

  render() {
    const { count, doubleClickCounter } = this.state;

    return (
      <div className="App">
        <link rel="icon" href={Logo} />
        <nav>
          <NavButtons onResetCount={this.onResetCount} />
        </nav>
        <aside>
          <PizzaSidebar
            count={count}
            doubleClickCounter={doubleClickCounter}
            onDoubleClick={this.onDoubleClick}
            onClickCount={this.onClickCount}
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
