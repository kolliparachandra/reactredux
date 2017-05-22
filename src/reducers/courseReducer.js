import * as types from '../actions';
const courses=(state = [],action)=>{
  switch(action.type){
    case types.CREATE_COURSE:
      return [...state,action.course];
    default:
      return state;
  }
}
export default courses;
