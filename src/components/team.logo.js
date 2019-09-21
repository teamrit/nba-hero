import React from 'react';
import {makeImageUrl} from "../functional/scoreboard";

export const TeamLogo = ({teamCode}) => (
    <div className="uk-align-center" style={{width: "100px",height: "100px", border: '2px solid #777', borderRadius: 5, padding: 10}}>
        <img src={makeImageUrl(teamCode)} alt={teamCode} width={100}/>
    </div>
);