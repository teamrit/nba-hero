import { createStore, applyMiddleware } from 'redux';
import { createBrowserHistory } from 'history';
import thunk from 'redux-thunk';
import { indexReducer } from './foundation/index.reducer';

export const store = createStore(indexReducer, applyMiddleware(thunk));
export const history = createBrowserHistory({ forceRefresh: false }); // { queryKey: false }
