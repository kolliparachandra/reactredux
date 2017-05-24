import * as types from './index';
import courseApi from '../api/mockCourseApi'
const loadCoursesSuccess = (courses)=>{
  return{ type:types.LOAD_COURSES_SUCCESS,courses};
}

export const loadCourses=()=>(dispatch)=>{
  return courseApi.getAllCourses().then(courses=>{
    dispatch(loadCoursesSuccess(courses));
  }).catch(error =>{
    throw(error);
  })
}

export default loadCoursesSuccess;
