import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import PropTypes from 'prop-types';
import * as courseActions from '../../actions/courseAction';
import CourseForm from './courseForm'
class ManageCoursePage extends React.Component{
  constructor(props,context){
    super(props,context);
  this.state={course:this.props.course,errors:{},authors:this.props.authors};
  }

  render(){
    return(
        <CourseForm course={this.state.course}
        errors={this.state.errors}
        allAuthors={this.state.authors} />
    )
  }

}
ManageCoursePage.propTypes={
  course:PropTypes.object.isRequired,
  authors:PropTypes.array.isRequired
}

const mapStateToProps = (state,ownprops)=>{
  let course ={id:'',watchHref:'',title:'',authorId:'',length:'',category:''};
  const authorFormattedForDropdown = state.authors.map(author =>{
    return {
      value = author.id,
      text = author.firstName + ' ' + author.lastName
    }
  })
  return{
    course:course,
    authors:authorFormattedForDropdown
  }
}
const mapDispatchToProps=(dispatch)=>{
  return{
    actions:bindActionCreators(courseActions,dispatch)
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(ManageCoursePage);
