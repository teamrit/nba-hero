import {CALENDAR_LOAD_FAIL,CALENDAR_LOAD_SUCCESS} from "../reflective.strings";

export const calendarLoadSuccess = dates => ({
    type: CALENDAR_LOAD_SUCCESS,
    dates
});
export const calendarLoadFail = error => ({
    type: CALENDAR_LOAD_FAIL,
    error
});
