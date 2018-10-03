import {SCOREBOARD_LOAD_SUCCESS,SCOREBOARD_LOAD_FAIL} from "../reflective.strings";

export const scoreBoardSuccess = data => ({
    type: SCOREBOARD_LOAD_SUCCESS,
    data
});
export const scoreBoardFail = error => ({
    type: SCOREBOARD_LOAD_FAIL,
    error
});
