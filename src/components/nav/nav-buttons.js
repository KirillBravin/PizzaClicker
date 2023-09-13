import { Component } from "react";
import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./nav-buttons.scss";

class NavButtons extends Component {
  onReset = () => {
    this.props.onResetCount(0, 0);
  };

  render() {
    return (
      <Navbar data-bs-theme="dark">
        <div className="nav-buttons">
          <Button variant="outline-light" onClick={this.onReset}>
            Reset
          </Button>
        </div>
      </Navbar>
    );
  }
}

export default NavButtons;
