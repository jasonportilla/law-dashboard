import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { Route } from 'react-router-dom';
import './MainContent.css';

import Clients from '../../Clients/Clients';

class MainContent extends Component {
  render() {
    return (
      <Container className="main-content">
         <Route path="/dashboard/clients" component={Clients} />
      </Container>
    );
  }
}

export default MainContent;
