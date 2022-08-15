import React from 'react';

import logo from '../../logo.svg';
import '../Home/Home.scss';

import axiosService from '../../services/axios.service';

class About extends React.Component {
  state = {
    users: []
  };

  componentDidMount() {
    axiosService.getUsers('https://reqres.in/api/users?page=2').then((res) => {
      this.setState({ users: res.data.data });
    });
  }

  render() {
    return (
      <div className="Home">
        <header className="Home-header">
          <img src={logo} className="Home-logo" alt="logo" />
          <p>こんにちは！</p>
          <a className="Home-link" href="/">Return to Home</a>
          <ul> {this.state.users.map(user => <li key={user.id}>{user.first_name}</li>)} </ul>
        </header>
      </div>
    );
  }
}

export default About;
