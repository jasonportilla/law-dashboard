import React, { Component } from 'react';
import { Row, Container } from 'reactstrap';
import axios from 'axios';
import RegisterForm from '../../components/Register/RegisterForm';
import './Register.css';
import logo from '../../assets/images/logo.svg';

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
      password2: '',
      errors: {},
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    const createUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2,
    };

    axios.post('/api/users/register', createUser)
      .then(res => console.log(res.data))
      .catch(err => this.setState({ errors: err.response.data }));
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
                <RegisterForm {...this.state} onSubmit={this.onSubmit} onChange={this.onChange} />
              </div>
            </div>
          </Container>
        </Row>
      </Container>
    );
  }
}

export default Register;
