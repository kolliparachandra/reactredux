'use strict'
import React from 'react';
import{NavLink} from 'react-router-dom';
export default class Header extends React.Component{
    render(){
        return(
            <nav className='navbar navbar-default'>
                <div className='container-fluid'>
                    <NavLink to='/' className='navbar-brand'>
                    <img src='images/pluralsight-logo.png'/>
                    </NavLink>
                    <ul className='nav navbar-nav'>
                        <li><NavLink to='/' activeClassName='active'>Home</NavLink></li>
                        <li><NavLink to='/about' activeClassName='active'>About</NavLink></li>
                        <li><NavLink to='/courses' activeClassName='active'>Courses</NavLink></li>
                    </ul>
                </div>
                </nav>
        );
    }
}
