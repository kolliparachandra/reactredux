import * as types from '../actions';
const courses=(state = [],action)=>{
  switch(action.type){
    case types.LOAD_COURSES_SUCCESS:
      return action.courses;
    default:
      return state;
  }
}
export default courses;
