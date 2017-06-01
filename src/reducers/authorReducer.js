import * as types from '../actions';
import initalState from './initialState';
const authors=(state = initalState.authors,action)=>{
  switch(action.type){
    case types.LOAD_AUTHOR_SUCCESS:
      return action.authors;
    default:
      return state;
  }
};
export default authors;
