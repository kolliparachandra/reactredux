import * as types from './index';
import beginAjaxCall from './ajaxStatusActions';
import authorApi from '../api/mockAuthorApi';
const loadAuthorSuccess = (authors)=>{
  return{ type:types.LOAD_AUTHOR_SUCCESS,authors};
};

export const loadAuthors=()=>(dispatch)=>{
dispatch(beginAjaxCall());
  return authorApi.getAllAuthors().then(authors=>{
    dispatch(loadAuthorSuccess(authors));
  }).catch(error =>{
    throw(error);
  });
};

export default loadAuthorSuccess;
