import React from 'react';
import ReactTooltip from "react-tooltip";
import {Game} from "./game";

export class ScoreBoard extends React.Component {
    render() {
        const {state: {data}} = this.props;
        console.log(data)
        const games = data.games;
        return (
            <div className="uk-padding">
                <div className="box mt-1">
                    <h2>Score Board</h2>
                    <div className="container">
                        <div className="row is-dark">
                            <div className="col-4">
                            {games && games.map(game => {
                                return <div className="uk-grid" key={game.gameId}>
                                    <div className="uk-width-1-2@l uk-width-1-1@s">
                                        <Game game={game}  />
                                    </div>
                                </div>
                            })}
                            </div>
                        </div>
                    </div>
                    <ReactTooltip />
                </div>
            </div>
        );
    }
}