'use strict';
import React from 'react';
import {NavLink} from 'react-router-dom';
import LoadingDots from './loadingDots';
export default class Header extends React.Component{
    render(){
        return(
            <nav>
                <NavLink to="/" activeClassName="active">Home</NavLink>
                {' | '}
                <NavLink to="/about" activeClassName="active">About</NavLink>
                 {' | '}
                <NavLink to="/courses" activeClassName="active">Courses</NavLink>
                 {' | '}
                 <LoadingDots interval={1000} dots={20} />
             </nav>
        );
    }
}
