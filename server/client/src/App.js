import React, { Fragment } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import jwt_decode from 'jwt-decode';
import setAuthToken from './utils/setAuthToken';
import { setCurrentUser } from './actions/authAction';

import './App.css';
import Register from './containers/Register/Register';
import Dashboard from './containers/Dashboard/Dashboard';
import Login from './containers/Login/Login';

import store from './store';

// check for token
if(localStorage.jwtToken) {
  // Set auth token header auth
  setAuthToken(localStorage.jwtToken);
  // Decode Token and get user info and exp
  const decoded = jwt_decode(localStorage.jwtToken);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));
}
const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Fragment>
        <Route path="/login" exact component={Login} />
        <Route path="/register" exact component={Register} />
        <Route path="/dashboard" exact component={Dashboard} />
      </Fragment>
    </BrowserRouter>
  </Provider>
);

export default App;
