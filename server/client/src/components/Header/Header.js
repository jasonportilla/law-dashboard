import React from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './Header.css';

const Header = props => (
  <Container className="header">
    <Row>
      <Col sm="3">
        <h2 className="header-title">LawHub</h2>
      </Col>
      <Col sm="9">
        <ul className="header-nav">
          <li>
            <Link to="/account">Account</Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
          <li>
            <i className="far fa-bell" />
          </li>
          <li>
            <Button
              onClick={props.onLogoutClick}
              className="logout"
            >Logout
            </Button>
          </li>
        </ul>
      </Col>
    </Row>

  </Container>
);

Header.propTypes = {
  onLogoutClick: PropTypes.func,
};

export default Header;

