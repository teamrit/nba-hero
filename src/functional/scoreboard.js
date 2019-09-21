import * as R from 'ramda';
import {NUMBER, STRING, UNDEFINED} from "../constants";
import {POSSIBLE_OUTCOMES, teams} from "../redux/array.constants";

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

export function toTitleCase(str) {
    return str.replace(
      /\w\S*/g,
      function(txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
      }
    );
}

export function createTeamLink(teamId) {
  return `/team/${teamId}`;
}

export function getDateString(date) {
    return new Date(`${date.slice(0,4)}-${date.slice(4,6)}-${date.slice(6,8)}`).toLocaleDateString();
}

export function getNBALogoUrl(abbr) {
  return `https://www.nba.com/assets/logos/teams/primary/web/${abbr}.svg`;
}

export function getGameIcons(gameUrlCode = '') {
    const homeIcon = getNBALogoUrl(gameUrlCode.split('/')[1].substring(0,3));
    const awayIcon = getNBALogoUrl(gameUrlCode.split('/')[1].substring(3,6));
    return {
      homeIcon,
      awayIcon
    };
}
