import React, { Component } from 'react';
import 'react-calendar-heatmap/dist/styles.css';
import 'font-awesome/css/font-awesome.min.css';
import './App.css';
import {BrowserRouter as Router} from "react-router-dom";
import Main from "./components/main";
import {Provider} from 'react-redux';
import {store} from "./redux/store";

export default function App () {
    return (
        <Provider store={store}>
            <Router>
                <Main />
            </Router>
        </Provider>
    );
}
