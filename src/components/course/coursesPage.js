import React from 'react';
import createCourse from '../../actions/courseAction';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import CourseList from './courseList';
class Courses extends React.Component{
  constructor(props,context){
    super(props,context);
    this.redirectToAddCoursePage = this.redirectToAddCoursePage.bind(this);
  }
  redirectToAddCoursePage(){
    this.props.history.push('/course/0');
  }
render(){
  const {courses} = this.props;
  return(
    <div>
      <h1>Courses</h1>
      <input type="submit" value="Add Course" className="btn btn-primary" onClick={this.redirectToAddCoursePage} />
     <CourseList courses = {courses} />
      </div>
  );
}
}
const mapStateToProps = (state,ownProps) =>{
  return{
    courses:state.courses
  };
};
export default connect(mapStateToProps)(Courses);
