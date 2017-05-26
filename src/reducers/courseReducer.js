import * as types from '../actions';
import initalState from './initialState';
const courses=(state = initalState.courses,action)=>{
  switch(action.type){
    case types.LOAD_COURSES_SUCCESS:
      return action.courses;
    default:
      return state;
  }
}
export default courses;
