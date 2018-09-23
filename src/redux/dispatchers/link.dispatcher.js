import {LINK_FAIL, LINK_SUCCESS} from "../constants";

export const linkLoadSuccess = links => ({
    type: LINK_SUCCESS,
    links
});
export const linkLoadFail = error => ({ type: LINK_FAIL, error });
