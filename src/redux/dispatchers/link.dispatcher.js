import {LINK_FAIL, LINK_SUCCESS} from "../constants";

export const linkLoadSuccess = item => ({
    type: LINK_SUCCESS,
    item
});
export const linkLoadFail = error => ({ type: LINK_FAIL, error });
