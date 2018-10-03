import {CALENDER_LOAD_FAIL,CALENDER_LOAD_SUCCESS} from "../reflective.strings";

export const calenderLoadSuccess = dates => ({
    type: CALENDER_LOAD_SUCCESS,
    dates
});
export const calenderLoadFail = error => ({
    type: CALENDER_LOAD_FAIL,
    error
});
