import {LINK_FAIL, LINK_SUCCESS} from "../reflective.strings";

export const linkReducer = (
    state = {
        links: {},
        error: ''
    },
    action
) => {
    switch (action.type) {
        case LINK_SUCCESS:
            return { ...state, links: action.links };
        case LINK_FAIL:
            return { ...state, error: action.error };
        default:
    }
    return state;
};