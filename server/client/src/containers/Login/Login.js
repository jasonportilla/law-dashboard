import React, { Component } from 'react';
import { Container } from 'reactstrap';
import './Login.css';
import LoginForm from '../../components/Login/LoginForm';

class Login extends Component {
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

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.errors) {
      return {
        errors: nextProps.errors,
      };
    }
    return null;
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
    // this.props.registerUser(createUser, this.props.history);
  }
  render() {
    return (
      <Container fluid className="login-background">
        <div className="login-overlay">
          <div className="login-form-container">
            <LoginForm
              {...this.state}
              onSubmit={this.onSubmit}
              onChange={this.onChange}
            />
          </div>
        </div>

      </Container>
    );
  }
}

export default Login;
