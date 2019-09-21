import {CALENDAR_LOAD_FAIL,CALENDAR_LOAD_SUCCESS} from "../reflective.strings";

export const calendarReducer = (
    state = {
        calendar: {},
        error: ''
    },
    action
) => {
    switch (action.type) {
        case CALENDAR_LOAD_SUCCESS:
            return { ...state, calendar: action.dates };
        case CALENDAR_LOAD_FAIL:
            return { ...state, error: action.error };
        default:
    }
    return state;
};
