import React, { Component } from 'react';
import { Row, Col, Container } from 'reactstrap';
import RegisterForm from '../../components/Register/RegisterForm';

class Register extends Component {
  render() {
    return (
      <Container fluid className="register-background">
        <Row>
          <Container>
            <RegisterForm />
          </Container>
        </Row>
      </Container>
    );
  }
}

export default Register;
