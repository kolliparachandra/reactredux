import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Header from './common/header';

class App extends React.Component{
    render(){
           return(
            <div>
              <Header loading={this.props.loading}/>
              <div className="container-fluid">
                {this.props.children}
              </div>
            </div>
        );

    }

}

App.propTypes = {
  children: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired
};

const mapStateToProps=(state,ownProps)=>{
  return{
    loading:state.numAjaxCallsInProgress > 0
  }
}

export default connect(mapStateToProps)(App);
