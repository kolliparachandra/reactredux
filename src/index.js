
'use strict';
import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import { HashRouter, Route, Redirect, Switch } from 'react-router-dom';
import Home from './components/home/homePage';
import About from './components/about/aboutPage';
import Courses from './components/course/coursesPage';
import './styles/styles.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
const supportsHistory = 'pushState' in window.history;

ReactDOM.render( <HashRouter baseName='/app' forceRefresh={!supportsHistory}>
    <App>
      <Switch>
        <Route  exact path='/' component={Home} />
        <Route  path='/about' component={About}/>
        <Route path='/courses' component={Courses} />
        <Redirect from="about-us" to="about" />
        <Redirect from="about/*" to="about" />
     </Switch>
    </App>
  </HashRouter>, document.getElementById('app'));


