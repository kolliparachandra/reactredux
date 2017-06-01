import * as types from '../actions';
import initalState from './initialState';
const courses=(state = initalState.courses,action)=>{
  switch(action.type){
    case types.LOAD_COURSES_SUCCESS:
      return action.courses;
    case types.CREATE_COURSE_SUCCESS:
    return [...state,action.course];
    case types.SAVE_COURSE_SUCCESS:
    return [...state.filter(course =>course.id != action.course.id),action.course];
    default:
      return state;
  }
};
export default courses;
