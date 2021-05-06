import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Router, Route, HashRouter , BrowserRouter} from 'react-router-dom'

import {About} from './components/about'
import {Contact} from './components/contact'
import {Gallery} from './components/gallery'
import {Services} from './components/services'
import {Header} from './components/header'
import {Testimonials} from './components/testimonials'


ReactDOM.render((

  <HashRouter>
     <Route path="/" component={App} exact={true} />
     <Route path="/contact" component={Contact} exact={true} />
     <Route path="/about" component={About} exact={true} />
     <Route path="/header" component={Header} exact={true} />
     <Route path="/services" component={Services} exact={true} />
     <Route path="/gallery" component={Gallery} exact={true} />
     <Route path="/testimonials" component={Testimonials} exact={true} />
   </HashRouter>


),document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
