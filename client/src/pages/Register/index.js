import React, { Component } from 'react'
import Button from '../../components/materialComponents/CustomButtons/Button';
import GridItem from '../../components/materialComponents/Grid/GridItem';
import CustomInput from '../../components/materialComponents/CustomInput/CustomInput';
import registerImage from '../../assets/images/register.jpg';

class Register extends Component {
  render() {
    return (
      <div>
        <GridItem className="register-box">
          <div className="register-box-contents">
            <div className="register-box-form">
              <h1 className="welcome-back">Welcome Back</h1>
              <GridItem className="register-input">
                <form noValidate autoComplete="off">
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
                </form>
              </GridItem>
              <small className="forgot-password">Forgot Password?</small>
              <Button size="sm" className="register-button" color="primary" round>SIGN IN</Button>
            </div>
          </div> 
        </GridItem>
      </div>
    );
  }
}

export default Register;
