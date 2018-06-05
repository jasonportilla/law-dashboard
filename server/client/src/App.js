import React, { Fragment } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import './App.css';
import Register from './containers/Register/Register';
import Dashboard from './containers/Dashboard/Dashboard';
import Login from './containers/Login/Login';

import store from './store';

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Fragment>
        <Route path="/login" exact component={Login} />
        <Route path="/register" exact component={Register} />
        <Route path="/" exact component={Dashboard} />
      </Fragment>
    </BrowserRouter>
  </Provider>
);

export default App;
