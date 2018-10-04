import {Api} from "../../network/api";
import {calenderLoadSuccess,calenderLoadFail} from "../dispatchers/calender.dispatcher";
import {scoreBoardFail,scoreBoardSuccess} from '../dispatchers/scoreboard.dispatchers';

export const getDates = (link) => dispatch =>
    Api.get(link)
    .then(response => {
        return dispatch(calenderLoadSuccess(response));
    })
    .catch(error => {
        return dispatch(calenderLoadFail(error));
    });

export const getScoreBoard = (link) => dispatch =>
    Api.get(link)
    .then(response => {
        return dispatch(scoreBoardSuccess(response))
    })
    .catch(error => {
        return dispatch(scoreBoardFail(error))
    });