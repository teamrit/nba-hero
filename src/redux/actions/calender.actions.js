import {Api} from "../../network/api";
import {calenderLoadSuccess,calenderLoadFail} from "../dispatchers/calender.dispatcher";

export const getDates = (link) => dispatch =>
    Api.get(link)
    .then(response => {
        console.log(response)
        return dispatch(calenderLoadSuccess(response));
    })
    .catch(error => {
        return dispatch(calenderLoadFail(error));
    });
