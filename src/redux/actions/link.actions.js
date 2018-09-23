import {Api} from "../../network/api";
import {TODAYS_REPORTS} from "../../network/requests";
import {linkLoadFail, linkLoadSuccess} from "../dispatchers/link.dispatcher";

export const getLinks = () => dispatch =>
    Api.get(TODAYS_REPORTS)
        .then(response => {
            console.warn(response)
            return dispatch(linkLoadSuccess(response.links));
        })
        .catch(error => {
            return dispatch(linkLoadFail(error));
        });
