import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap';
import Button from '../../components/materialComponents/CustomButtons/Button';
import GridItem from '../../components/materialComponents/Grid/GridItem';
import CustomInput from '../../components/materialComponents/CustomInput/CustomInput';
import registerImage from '../../assets/images/register.jpg';

class Register extends Component {
  render() {
    return (
      <div className="registration-page">
        <Container className="register-box">
          <Row>
            <Col md="8">
              <h1 className="welcome-back">Welcome Back</h1>
              <form noValidate autoComplete="off">
                <div className="register-input">
                  <CustomInput
                    labelText="Username"
                    id="float"
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                  <CustomInput
                    labelText="Password"
                    id="float"
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </div>
              </form>
              <small className="forgot-password">Forgot Password?</small>
              <Button size="sm" className="register-button" color="primary" round>SIGN IN</Button>
            </Col>
            <Col md="4">
              <div className="register-info">
                <div className="register-info-overlay" />
                <img className="register-photo" src={registerImage} alt="register page" />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Register;
