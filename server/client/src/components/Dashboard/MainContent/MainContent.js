import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { Route } from 'react-router-dom';
import './MainContent.css';

import Clients from '../../Clients/Clients';
import AddClient from '../../Clients/AddClient';

const MainContent = () => {
  return (
    <Container className="main-content">
      <Route path="/dashboard/clients" component={Clients} />
      <Route path="/dashboard/add-client" component={AddClient} />
    </Container>
  );
};

export default MainContent;
