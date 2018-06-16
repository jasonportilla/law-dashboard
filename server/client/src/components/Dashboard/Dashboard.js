import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import './Dashboard.css';
import { logoutUser } from '../../actions/authAction';

import Header from '../../components/Header/Header';
import HeaderProfile from './HeaderProfile/HeaderProfile';
import DashMenu from './DashMenu/DashMenu';
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
    const { user, isAuthenticated } = this.props.auth;
    if (!isAuthenticated) {
      return <Redirect to="/login" />;
    }

    console.log(this.props);

    return (
      <Container fluid>
        <Row className="top-section">
          <Col sm="3" md="2" className="profile-section">
            <HeaderProfile
              user={user}
            />
          </Col>

          <Col sm="9" md="10" className="header-section">
            <Header onLogoutClick={this.onLogoutClick} />
          </Col>

        </Row>

        <Row className="dashboard">
          <Col sm="3" md="2" className="menu-section">
            <DashMenu />
          </Col>

          <Col sm="9" md="10">

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
