import React, { Component } from 'react';
import { Row, Container, Form } from 'reactstrap';
import RegisterForm from '../../components/Register/RegisterForm';
import './Register.css';
import logo from '../../assets/images/logo.svg';

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: '',
      password2: '',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
    console.log('email: ', this.state.email);
    console.log('email: ', this.state.username);
    console.log('email: ', this.state.password);
    console.log('email: ', this.state.password2);
  }
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
                <Form onSubmit={this.handleSubmit} className="register-fields">
                  <RegisterForm handleSubmit={this.handleSubmit} {...this.state} />
                </Form>
              </div>
            </div>
          </Container>
        </Row>
      </Container>
    );
  }
}

export default Register;
