import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory, IndexRoute} from 'react-router';
import App from './container/App';
import Products from './container/Products';
import Customers from './container/Customers';
import Home from './container/Home';
import { Provider } from 'react-redux';
import configureStore from './configureStore';

import './index.css';
const store = configureStore();


ReactDOM.render((
                <Provider store={store}>
                  <Router history={browserHistory}>
                    <Route path="/" component={App}>

                      <IndexRoute component={Home}/>
                      <Route path="/products" component={Products}/>
                      <Route path="/customers" component={Customers}/>
                    </Route>
                  </Router>
                </Provider>
), document.getElementById('root'));
