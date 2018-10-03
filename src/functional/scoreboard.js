import * as R from 'ramda';
import {NUMBER, STRING, UNDEFINED} from "../constants";
import {POSSIBLE_OUTCOMES} from "../redux/array.constants";

export const makeImageUrl = (teamAbbr) => (
    `https://stats.nba.com/media/img/teams/logos/${teamAbbr && teamAbbr.toUpperCase()}_logo.svg`
);

export const undefinedChecked = (r) => {
    return typeof r === UNDEFINED;
};

export const stringToNumber = (r) => {
    if (typeof r === NUMBER) return r;
    if (typeof r === STRING) return Number(r);
};

export const winnerDecider = (hTeam,vTeam) => {
    let hScore = R.path(['score'],hTeam);
    let vScore = R.path(['score'],vTeam);
    if (undefinedChecked(hScore) || undefinedChecked(vScore)) {
        return POSSIBLE_OUTCOMES[3];
    }
    if (stringToNumber(hScore) - stringToNumber(vScore) === 0) {return POSSIBLE_OUTCOMES[2]}
    if (stringToNumber(hScore) - stringToNumber(vScore) > 0) {return POSSIBLE_OUTCOMES[1]}
    if (stringToNumber(hScore) - stringToNumber(vScore) < 0) {return POSSIBLE_OUTCOMES[0]}
};