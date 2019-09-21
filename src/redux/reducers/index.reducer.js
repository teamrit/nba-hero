import { combineReducers } from 'redux';
import {linkReducer} from "./link.reducer";
import {calendarReducer} from "./calendar.reducer";
import {scoreBoardReducer} from "./scoreboard.reducer";
import {teamsReducer} from './teams.reducer';

export const indexReducer = combineReducers({
    links: linkReducer,
    calendar: calendarReducer,
    scoreboard: scoreBoardReducer,
    teams: teamsReducer
});
