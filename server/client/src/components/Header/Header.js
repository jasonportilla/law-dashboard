import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import PropTypes from 'prop-types';
import './Header.css';

const Header = props => (
  <Container className="header">
    <Row>
      <Col sm="3">
        <h1 className="header-title">Dashboard</h1>
      </Col>
      <Col sm="9" className="header-logout">
        <button
          onClick={props.onLogoutClick}
          className="logout"
        >Logout
        </button>
      </Col>
    </Row>

  </Container>
);

Header.propTypes = {
  onLogoutClick: PropTypes.func.isRequired,
};

export default Header;

