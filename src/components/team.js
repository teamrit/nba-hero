import React, {Component,Fragment} from 'react';
import {TeamLogo} from "./team.logo";

export class Team extends Component {

    componentDidMount() {

    }

    render() {
        const {team} = this.props;
        return (
            <Fragment>
                <TeamLogo teamCode={team.triCode} />
                <h2>{team.triCode}</h2>
                <span className="uk-text-large">
                    {team.score}
                </span>
                <div className="uk-grid uk-border-rounded is-outlined">
                    <div className="uk-width-1-2">
                        <span className="uk-badge uk-label-success">{team.win}<br/>wins</span>
                    </div>
                    <div className="uk-width-1-2">
                        <span className="uk-badge uk-label-danger">{team.loss}<br/>losses</span>
                    </div>
                </div>
            </Fragment>
        );
    }
}