
'use strict';
import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import { HashRouter, Route, Redirect, Switch } from 'react-router-dom';
import Home from './components/homePage';
import About from './components/about/aboutPage';
import './styles/styles.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
const supportsHistory = 'pushState' in window.history;

ReactDOM.render( <HashRouter baseName='/app' forceRefresh={!supportsHistory}>
    <App>
      <Switch>
        <Route  exact path='/' component={Home} />
        <Route  path='/about' component={About}/>
        <Redirect from="about-us" to="about" />
        <Redirect from="about/*" to="about" />
     </Switch>
    </App>
  </HashRouter>, document.getElementById('app'));

>>>>>>> 13dbd1d62adaa0c728691667383158751e3c7203
