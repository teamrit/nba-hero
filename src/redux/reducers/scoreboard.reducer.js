import {
  SCOREBOARD_LOAD_SUCCESS,
  SCOREBOARD_LOAD_FAIL,
  TEAMS_LOAD_SUCCESS,
  TEAMS_LOAD_FAIL, TEAM_LOAD_FAIL, TEAM_LOAD_SUCCESS
} from "../reflective.strings";

export const scoreBoardReducer = (
    state = {
        teams: {},
        data: {},
        error: ''
    },
    action
) => {
    switch (action.type) {
      case SCOREBOARD_LOAD_SUCCESS:
        return { ...state, data: action.data };
      case SCOREBOARD_LOAD_FAIL:
        return { ...state, error: action.error };
      case TEAMS_LOAD_SUCCESS:
        return { ...state, teams: action.data };
      case TEAMS_LOAD_FAIL:
        return { ...state, error: action.error };
      case TEAM_LOAD_SUCCESS:
        return { ...state, team: action.data };
      case TEAM_LOAD_FAIL:
        return { ...state, error: action.error };
        default:
    }
    return state;
};
