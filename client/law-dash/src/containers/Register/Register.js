import React, { Component } from 'react';
import { Row, Container } from 'reactstrap';
import RegisterForm from '../../components/Register/RegisterForm';
import './Register.css';
import logo from '../../assets/images/logo.svg';

class Register extends Component {
  render() {
    return (
      <Container fluid className="register-background">
        <Row>
          <Container>
            <div className="register-form">
              <div className="form-info">
                <img className="register-logo" src={logo} alt="Law Hub Logo" />
                <h1 className="title-info">Sign Up</h1>
                <div className="register-description">
                  <p>Handle everything you need in one place to make your life easier.</p>
                </div>
              </div>
              <div className="form-box">
                <RegisterForm />
              </div>
            </div>
          </Container>
        </Row>
      </Container>
    );
  }
}

export default Register;
