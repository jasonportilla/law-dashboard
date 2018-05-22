import React, { Component, Fragment } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Register from './containers/Register/Register';
import Dashboard from './containers/Dashboard/Dashboard';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Fragment>
        <Route path="/" exact component={Dashboard} />
        <Route path="/register" exact component={Register} />
      </Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
