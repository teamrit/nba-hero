import React, {Component} from 'react';
import '../assets/App.css';
import Table from "../components/table";
import {Switch,Route} from "react-router";
import {NavBar} from "./navbar";
import Calender from "./calender";

export class Main extends Component {

    componentDidMount() {
    }

    render() {
        return (
            <div className="App">
                <NavBar />
                <Table />
                <Switch>
                    <Route path="/calender" exact component={Calender} />
                </Switch>
            </div>
        );
    }
}