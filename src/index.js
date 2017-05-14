
'use strict';
import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import { HashRouter, Route, Redirect, Switch } from 'react-router-dom';
import {Provider} from 'react-redux';
import configureStore from './store/configureStore'
import Home from './components/home/homePage';
import About from './components/about/aboutPage';
import Courses from './components/course/coursesPage';
import './styles/styles.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
const supportsHistory = 'pushState' in window.history;
const store = configureStore();

ReactDOM.render( <Provider store={store}><HashRouter baseName='/app' forceRefresh={!supportsHistory}>
    <App>
      <Switch>
        <Route  exact path='/' component={Home} />
        <Route  path='/about' component={About}/>
        <Route path='/courses' component={Courses} />
        <Redirect from="about-us" to="about" />
        <Redirect from="about/*" to="about" />
     </Switch>
    </App>
  </HashRouter></Provider>, document.getElementById('app'));


