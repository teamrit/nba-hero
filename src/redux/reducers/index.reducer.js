import { combineReducers } from 'redux';
import {linkReducer} from "./link.reducer";
import {calenderReducer} from "./calender.reducer";
import {scoreBoardReducer} from "./scoreboard.reducer";
import {teamsReducer} from './teams.reducer';

export const indexReducer = combineReducers({
    links: linkReducer,
    calender: calenderReducer,
    scoreboard: scoreBoardReducer,
    teams: teamsReducer
});