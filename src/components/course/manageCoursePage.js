import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import PropTypes from 'prop-types';
import * as courseActions from '../../actions/courseAction';
import CourseForm from './courseForm';
class ManageCoursePage extends React.Component{
  constructor(props,context){
    super(props,context);
  this.state={course:this.props.course,errors:{},authors:this.props.authors};
  this.updateCourseState = this.updateCourseState.bind(this);
  this.saveCourse = this.saveCourse.bind(this);
  }

updateCourseState(event){
  const field = event.target.name;
  let course = this.state.course;
  course[field] = event.target.value;
  return this.setState({course:course});
}

saveCourse(event){
  event.preventDefault();
  this.props.actions.saveCourse(this.state.course);
}
  render(){
    return(
        <CourseForm course={this.state.course}
        errors={this.state.errors}
        allAuthors={this.state.authors}
         onChange={this.updateCourseState}
         onSave={this.saveCourse}/>
    );
  }

}
ManageCoursePage.propTypes={
  course:PropTypes.object.isRequired,
  authors:PropTypes.array.isRequired,
  actions:PropTypes.object.isRequired
};

const mapStateToProps = (state,ownprops)=>{
  let course ={id:'',watchHref:'',title:'',authorId:'',length:'',category:''};
  const authorFormattedForDropdown = state.authors.map(author =>{
    return {
      value : author.id,
      text : author.firstName + ' ' + author.lastName
    };
  });
  return{
    course:course,
    authors:authorFormattedForDropdown
  };
};
const mapDispatchToProps=(dispatch)=>{
  return{
    actions:bindActionCreators(courseActions,dispatch)
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(ManageCoursePage);
