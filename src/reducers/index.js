import {combineReducers} from 'redux';
import courses from './courseReducer';
import authors from './authorReducer';
import numAjaxCallsInProgress from './ajaxStatusReducer';
import {routerReducer} from 'react-router-redux';
const root = combineReducers({
  courses,
  authors,
  numAjaxCallsInProgress,
  routing: routerReducer
});

export default root;
