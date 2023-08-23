import Logo from '../../img/pizza_logo.png'
import './App.scss';
import {Component} from 'react';

import NavButtons from '../nav/nav-buttons';
import MainButton from '../main-button/main-button';

class App extends Component {
  constructor (props) {
    super(props)
  }

  render() {
    return (
      <div className="App">
          <link rel="icon" href={Logo} />
          <nav>
            <NavButtons/>
          </nav>
          <main>
            <MainButton/>
          </main>
      </div>
    );
  }
}

export default App;
