import React from 'react';
import { Checkbox } from 'semantic-ui-react';

import logo from '../../logo.svg';
import './Home.scss';

class Home extends React.Component {
  render() {
    return (
      <div className="Home">
        <header className="Home-header">
          <img src={logo} className="Home-logo" alt="logo" />
          <p>
            Edit <code>src/Home.js</code> and save to reload.
          </p>
          <a
            className="Home-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <a className="Home-link" href="/game">Play Game</a>
          <a className="Home-link" href="/about">About</a>
          <a className="Home-link" href="/about">About</a>
        </header>
        <form>
          <label>
            <Checkbox toggle />
          </label>
        </form>
      </div>
    );
  }
}

export default Home;
