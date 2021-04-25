import { combineReducers } from 'redux';
import logSlowReducers from './logSlowReducers';

let reducers = {}
if (process.env.NODE_ENV === 'development') {
    reducers = logSlowReducers(reducers, 1);
}
const rootReducer = combineReducers(reducers);
export default rootReducer;