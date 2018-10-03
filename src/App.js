import React, { Component } from 'react';
import 'react-calendar-heatmap/dist/styles.css';
import 'uikit/dist/css/uikit.min.css';
import 'normalize.css/normalize.css';
import 'bulma/css/bulma.min.css';
import 'font-awesome/css/font-awesome.min.css';
import './assets/App.css';
import {BrowserRouter as Router} from "react-router-dom";
import {Main} from "./components/main";
import {Provider} from 'react-redux';
import {store} from "./redux/store";

export class App extends Component {
  render() {
    return (
        <Provider store={store}>
            <Router>
                <Main />
            </Router>
        </Provider>
    );
  }
}