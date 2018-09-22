import React, {Component} from 'react';
import {Api} from "../network/api";
import {TODAYS_REPORTS} from "../network/requests";

export class Table extends Component {

    componentDidMount() {
        Api.get(TODAYS_REPORTS).then(r => console.log(r))
    }

    render() {
        return (
            <div>

            </div>
        );
    }
}