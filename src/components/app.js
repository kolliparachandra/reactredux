import React from 'react';
import {connect} from 'react-redux';
import Header from './common/header';
import {RouteHandler} from 'react-router-dom';
export default class App extends React.Component{
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



