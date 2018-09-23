import { combineReducers } from 'redux';
import {linkReducer} from "./linkReducer";
import {calenderReducer} from "./calenderReducer";

export const indexReducer = combineReducers({
    links: linkReducer,
    calender: calenderReducer
});