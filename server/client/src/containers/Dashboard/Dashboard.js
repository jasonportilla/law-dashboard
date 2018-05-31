import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import './Dashboard.css';

class Dashboard extends Component {
  render() {
    return (
      <Container fluid>
        <Row className="top-section">
          <Col sm="3" className="profile-section bg-success">
            <h3>Profile section</h3>
          </Col>

          <Col sm="9" className="header-section bg-dark text-light">
            <h3>Header section</h3>
          </Col>

        </Row>

        <Row className="dashboard">
          <Col sm="3" className="menu-section bg-primary">
            <h3>Dash Menu section</h3>
          </Col>

          <Col sm="9" className="main-section bg-danger">
            <h3>Main Content section</h3>
          </Col>

        </Row>
      </Container>
    );
  }
}

export default Dashboard;
