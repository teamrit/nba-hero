import {
  SCOREBOARD_LOAD_SUCCESS,
  SCOREBOARD_LOAD_FAIL,
  TEAMS_LOAD_SUCCESS,
  TEAMS_LOAD_FAIL, TEAM_LOAD_SUCCESS, TEAM_LOAD_FAIL
} from "../reflective.strings";

export const scoreBoardSuccess = data => ({
    type: SCOREBOARD_LOAD_SUCCESS,
    data
});
export const scoreBoardFail = error => ({
    type: SCOREBOARD_LOAD_FAIL,
    error
});
export const teamsSuccess = data => ({
  type: TEAMS_LOAD_SUCCESS,
  data
});
export const teamsFailure = error => ({
  type: TEAMS_LOAD_FAIL,
  error
});
export const teamSuccess = data => ({
  type: TEAM_LOAD_SUCCESS,
  data
});
export const teamFailure = error => ({
  type: TEAM_LOAD_FAIL,
  error
});
