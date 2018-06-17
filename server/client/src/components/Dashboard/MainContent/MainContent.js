import React from 'react';
import { Container } from 'reactstrap';
import { Switch } from 'react-router-dom';
import './MainContent.css';

import Clients from '../../Clients/Clients';
import AddClient from '../../Clients/AddClient';
import PrivateRoute from '../../common/PrivateRoute';

const MainContent = () => (
  <Container className="main-content">
    <Switch>
      <PrivateRoute exact path="/dashboard/add-client" component={AddClient} />
      <PrivateRoute exact path="/dashboard/clients" component={Clients} />
    </Switch>
  </Container>
);

export default MainContent;
