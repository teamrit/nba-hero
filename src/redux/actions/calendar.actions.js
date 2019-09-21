import {Api} from "../../network/api";
import {calendarLoadSuccess,calendarLoadFail} from "../dispatchers/calendar.dispatcher";
import {
  scoreBoardFail,
  scoreBoardSuccess, teamFailure,
  teamsFailure,
  teamsSuccess,
  teamSuccess
} from '../dispatchers/scoreboard.dispatchers';

export const getDates = (link) => dispatch =>
    Api.get(link)
    .then(response => {
        return dispatch(calendarLoadSuccess(response));
    })
    .catch(error => {
        return dispatch(calendarLoadFail(error));
    });

export const getScoreBoard = (link) => dispatch =>
    Api.get(link)
    .then(response => {
        return dispatch(scoreBoardSuccess(response))
    })
    .catch(error => {
        return dispatch(scoreBoardFail(error))
    });

export const getTeams = (link) => dispatch =>
  Api.get(link)
    .then(response => {
      return dispatch(teamsSuccess(response))
    })
    .catch(error => {
      return dispatch(teamsFailure(error))
    });

export const getTeamData = (link) => dispatch =>
  Api.get(link)
    .then(response => {
      return dispatch(teamSuccess(response))
    })
    .catch(error => {
      return dispatch(teamFailure(error))
    });


