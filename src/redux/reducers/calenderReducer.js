import {CALENDER_LOAD_FAIL,CALENDER_LOAD_SUCCESS} from "../constants";
import {beautifyCalenderData} from "../../functional/calender";

export const calenderReducer = (
    state = {
        calender: {},
        error: ''
    },
    action
) => {
    switch (action.type) {
        case CALENDER_LOAD_SUCCESS:
            return { ...state, calender: action.dates };
        case CALENDER_LOAD_FAIL:
            return { ...state, error: action.error };
        default:
    }
    return state;
};