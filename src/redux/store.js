import { applyMiddleware, createStore } from 'redux';
import {indexReducer} from "./reducers/index.reducer";
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

export const store = createStore(
    indexReducer,
    composeWithDevTools(applyMiddleware(thunk))
);