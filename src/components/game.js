import React, {Component} from 'react';
import {Team} from "./team";

export class Game extends Component {
    render() {
        const {game: {hTeam, vTeam, gameDuration}} = this.props;
        return (
            <div className="uk-container uk-margin-top uk-card uk-card-default">
                <div className="uk-grid uk-padding">
                    <div className="uk-width-2-5">
                        <Team team={hTeam} />
                    </div>
                    <div className="uk-width-1-5 uk-align-center">
                        <span className="uk-badge is-centered is-center">VS</span>
                    </div>
                    <div className="uk-width-2-5">
                        <Team team={vTeam} />
                    </div>
                    <div className="uk-width-1-1">
                        <i className="far fa-clock" /> {gameDuration.hours}h {gameDuration.minutes}m
                        {/*<Arena arena={game.arena} />*/}
                    </div>
                </div>
            </div>
        );
    }
}
