import * as types from './index';
import authorApi from '../api/mockAuthorApi';
const loadAuthorSuccess = (authors)=>{
  return{ type:types.LOAD_AUTHOR_SUCCESS,authors};
};

export const loadAuthors=()=>(dispatch)=>{
  return authorApi.getAllAuthors().then(authors=>{
    dispatch(loadAuthorSuccess(authors));
  }).catch(error =>{
    throw(error);
  });
};

export default loadAuthorSuccess;
