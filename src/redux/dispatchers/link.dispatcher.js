import {LINK_FAIL, LINK_SUCCESS} from "../reflective.strings";

export const linkLoadSuccess = links => ({
    type: LINK_SUCCESS,
    links
});
export const linkLoadFail = error => ({ type: LINK_FAIL, error });
