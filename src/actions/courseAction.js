import * as types from './index';
const createCourse = (course)=>{
  return{ type:types.CREATE_COURSE,course};
}

export default createCourse;
