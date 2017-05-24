import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import PropTypes from 'prop-types';
import * as courseActions from '../../actions/courseAction'
class ManageCoursePage extends React.Component{
  constructor(props,context){
    super(props,context);
  }

  render(){
    return(
      <div>
        <h1>Manage Course</h1>
        </div>
    )
  }

}
ManageCoursePage.propTypes={

}

const mapStateToProps = (state,ownprops)=>{
  return{
    state:state
  }
}
const mapDispatchToProps=(dispatch)=>{
  return{
    actions:bindActionCreators(courseActions,dispatch)
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(ManageCoursePage);
