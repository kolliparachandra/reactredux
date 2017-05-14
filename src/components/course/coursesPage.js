import React from 'react';
import createCourse from '../../actions/courseAction'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
class Courses extends React.Component{
  constructor(props,context){
    super(props,context);
    this.state={
      course:{title:''}
    }
    this.onClickSave= this.onClickSave.bind(this);
    this.onTitleChange=this.onTitleChange.bind(this);
    this.courseRow=this.courseRow.bind(this);
  }
  onClickSave(event){
    this.props.actions(this.state.course);
  }
  onTitleChange(event){
     const course = this.state.course;
     course.title = event.target.value;
     this.setState({course:course});
  }
  courseRow(course,index){
    return <div key={index}>{course.title}</div>;
  }
render(){
  return(
    <div>
      <h1>Courses</h1>
      {this.props.courses.map(this.courseRow)}
      <h2>Add Course</h2>
      <input type='text' onChange={this.onTitleChange} value={this.state.course.title} />
      <input type='submit' value='Save' onClick={this.onClickSave}/>
      </div>
  )
}
}
const mapStateToProps = (state,ownProps) =>{
  return{
    courses:state.courses
  }
}
const mapDispatchToProps =(dispatch)=>{
return{
  actions:bindActionCreators(createCourse,dispatch)
}
 }
export default connect(mapStateToProps,mapDispatchToProps)(Courses);
