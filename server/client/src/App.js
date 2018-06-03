import React, { Fragment } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import './App.css';
import Register from './containers/Register/Register';
import Dashboard from './containers/Dashboard/Dashboard';

import store from './store';

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Fragment>
        <Route path="/" exact component={Dashboard} />
        <Route path="/register" exact component={Register} />
      </Fragment>
    </BrowserRouter>
  </Provider>
);

export default App;
