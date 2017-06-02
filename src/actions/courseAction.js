import * as types from './index';
import beginAjaxCall from './ajaxStatusActions';
import courseApi from '../api/mockCourseApi';
const loadCoursesSuccess = (courses)=>{
  return{ type:types.LOAD_COURSES_SUCCESS,courses};
};

const updateCourseSuccess=(course)=>{
  return { type:types.SAVE_COURSE_SUCCESS,course};
}

export const createCourseSuccess=(course)=>{
  return {type:types.CREATE_COURSE_SUCCESS,course};
}

export const loadCourses=()=>(dispatch)=>{
  dispatch(beginAjaxCall());
  return courseApi.getAllCourses().then(courses=>{
    dispatch(loadCoursesSuccess(courses));
  }).catch(error =>{
    throw(error);
  });
};



export const saveCourse=(course)=>(dispatch,getState)=>{
  dispatch(beginAjaxCall());
  return courseApi.saveCourse(course).then(savedCourse=>{
    course.id?dispatch(updateCourseSuccess(savedCourse)):
    dispatch(createCourseSuccess(savedCourse));
  }).catch(error =>{
    throw(error);
  });
}

export default loadCoursesSuccess;
