import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import jwtDecode from 'jwt-decode';
import setAuthToken from './utils/setAuthToken';
import { setCurrentUser } from './actions/authAction';

import './App.css';
import Register from './components/Register/Register';
import Dashboard from './components/Dashboard/Dashboard';
import Login from './components/Login/Login';

import store from './store';
import PrivateRoute from './components/common/PrivateRoute';

// check for token
if (localStorage.jwtToken) {
  // Set auth token header auth
  setAuthToken(localStorage.jwtToken);
  // Decode Token and get user info and exp
  const decoded = jwtDecode(localStorage.jwtToken);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));
}

const App = () => (
  <Provider store={store}>
    <Router>
      <Fragment>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <PrivateRoute path="/dashboard" component={Dashboard} />
        </Switch>
      </Fragment>
    </Router>
  </Provider>
);

export default App;
