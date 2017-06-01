
'use strict';
import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import { BrowserRouter , Route, Redirect, Switch } from 'react-router-dom';
import {Provider} from 'react-redux';
import configureStore from './store/configureStore';
import {loadCourses} from './actions/courseAction';
import {loadAuthors} from './actions/authorActions';
import Home from './components/home/homePage';
import About from './components/about/aboutPage';
import Courses from './components/course/coursesPage';
import ManageCoursePage from './components/course/manageCoursePage';
import './styles/styles.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
const supportsHistory = 'pushState' in window.history;
const store = configureStore();
store.dispatch(loadCourses());
store.dispatch(loadAuthors());
ReactDOM.render( <Provider store={store}><BrowserRouter  baseName="/app" forceRefresh={!supportsHistory}>
    <App>
      <Switch>
        <Route  exact path="/" component={Home} />
        <Route  path="/about" component={About}/>
        <Route path="/courses" component={Courses} />
        <Route path="/course/:id" component={ManageCoursePage} />
        <Redirect from="about-us" to="about" />
        <Redirect from="about/*" to="about" />
     </Switch>
    </App>
  </BrowserRouter ></Provider>, document.getElementById('app'));


