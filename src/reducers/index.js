import {combineReducers} from 'redux';
import courses from './courseReducer';
import authors from './authorReducer';
import numAjaxCallsInProgress from './ajaxStatusReducer';
const root = combineReducers({
  courses,
  authors,
  numAjaxCallsInProgress
});

export default root;
