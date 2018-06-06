import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import './Header.css';

const Header = () => (
  <Container className="header">
    <Row>
      <Col sm="3">
        <h1 className="header-title">Dashboard</h1>
      </Col>
      <Col sm="9" className="header-logout">
        <h2 className="logout">Logout</h2>
      </Col>
    </Row>

  </Container>
);

export default Header;

