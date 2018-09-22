import {Api} from "../../network/api";
import {LINK_FAIL, LINK_SUCCESS} from "../constants";
import {TODAYS_REPORTS} from "../../network/requests";
import {linkLoadFail, linkLoadSuccess} from "../dispatchers/link.dispatcher";

export const getLinks = () => dispatch =>
    Api.get(TODAYS_REPORTS)
        .then(response => {
            return dispatch(linkLoadSuccess(response.data));
        })
        .catch(error => {
            return dispatch(linkLoadFail(error));
        });
