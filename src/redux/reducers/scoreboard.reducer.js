import {SCOREBOARD_LOAD_SUCCESS,SCOREBOARD_LOAD_FAIL} from "../reflective.strings";

export const scoreBoardReducer = (
    state = {
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
        default:
    }
    return state;
};