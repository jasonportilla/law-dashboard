import React from 'react';
import { Container } from 'reactstrap';
import './MainContent.css';

import Clients from '../../Clients/Clients';
import AddClient from '../../Clients/AddClient';
import PrivateRoute from '../../common/PrivateRoute';

const MainContent = () => (
  <Container className="main-content">
    <PrivateRoute path="/dashboard/clients" component={Clients} />
    <PrivateRoute path="/dashboard/add-client" component={AddClient} />
  </Container>
);

export default MainContent;
