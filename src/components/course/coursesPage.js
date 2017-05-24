import React from 'react';
import createCourse from '../../actions/courseAction'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import CourseList from './courseList';
class Courses extends React.Component{
  constructor(props,context){
    super(props,context);
  }
render(){
  const {courses} = this.props;
  return(
    <div>
      <h1>Courses</h1>
     <CourseList courses = {courses} />
      </div>
  )
}
}
const mapStateToProps = (state,ownProps) =>{
  return{
    courses:state.courses
  }
}
export default connect(mapStateToProps)(Courses);
