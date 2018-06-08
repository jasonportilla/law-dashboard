import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Container, Row, Col } from 'reactstrap';
import './Dashboard.css';
import { logoutUser } from '../../actions/authAction';

import Header from '../../components/Header/Header';
import HeaderProfile from '../../components/HeaderProfile/HeaderProfile';
import MainContent from './MainContent/MainContent';

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.onLogoutClick = this.onLogoutClick.bind(this);
  }
  onLogoutClick(e) {
    e.preventDefault();
    this.props.logoutUser();
  }
  render() {
    console.log(this.props);
    const { user, isAuthenticated } = this.props.auth;
    return (
      <Container fluid>
        <Row className="top-section">
          <Col sm="3" className="profile-section bg-success">
            <HeaderProfile
              onLogoutClick={this.onLogoutClick}
              user={user}
            />
          </Col>

          <Col sm="9" className="header-section bg-dark text-light">
            <Header />
          </Col>

        </Row>

        <Row className="dashboard">
          <Col sm="3" className="menu-section bg-primary">
            <h3>Dash Menu section</h3>
          </Col>

          <Col sm="9">
            <MainContent />
          </Col>

        </Row>
      </Container>
    );
  }
}

Dashboard.propTypes = {
  auth: PropTypes.object.isRequired,
  logoutUser: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logoutUser })(Dashboard);
