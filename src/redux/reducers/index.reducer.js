import { combineReducers } from 'redux';

export const indexReducer = combineReducers({
    links: linkReducer,
});
