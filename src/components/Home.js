import React, { Component } from 'react';
import logo from './logo.svg';
import { Jumbotron } from 'react-bootstrap';
import {Link} from 'react-router';
import './Home.css';

export default class Home extends Component {
  render() {
    return (
        <Jumbotron>
            <div className="centerText">
                <h1>Welcome to Redux Forms</h1>
                <p>This is a starter template for learning how to setup Redux with Redux forms</p>
                <img src={logo} className="App-logo" alt="logo" />
                <p><Link to={'/users'}>View All Users</Link></p>
            </div>
        </Jumbotron>
    );
  }
}
