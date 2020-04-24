import React, { Component } from 'react';

import AppActions from './actions/app-actions';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  // eslint-disable-next-line class-methods-use-this
  handler() {
    AppActions.addBook('This is the book..Sherlock Holmes');
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit
            {' '}
            <code>src/App.js</code>
            {' '}
            and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-noninteractive-element-interactions */}
          <h1 onClick={this.handler}>My First Flux App </h1>
        </header>
      </div>
    );
  }
}

export default App;
