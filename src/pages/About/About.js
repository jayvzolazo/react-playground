import React from 'react';

import logo from '../../logo.svg';
import '../Home/Home.scss';

function About() {
  return (
    <div className="Home">
      <header className="Home-header">
        <img src={logo} className="Home-logo" alt="logo" />
        <p>こんにちは！</p>
        <a className="Home-link" href="/">Return to Home</a>
      </header>
    </div>
  );
}

export default About;
