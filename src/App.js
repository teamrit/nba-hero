import React, { Component } from 'react';
import logo from './assets/basketball.png';
import './assets/App.css';
import {Table} from "./components/table";

export class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <Table />
      </div>
    );
  }
}