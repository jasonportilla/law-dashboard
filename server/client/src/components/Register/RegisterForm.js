import React, { Component } from 'react';
import { Container, Label, Form } from 'reactstrap';
import { NavLink } from 'react-router-dom';

class RegisterForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: '',
      password2: '',
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
      username: this.state.username,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2,
    };

    console.log(createUser);
  }

  render() {
    return (
      <Container>
        <Form onSubmit={this.onSubmit} className="register-fields">
          <Label for="username">username</Label>
          <input
            type="text"
            onChange={this.onChange}
            name="username"
            placeholder="portillaj"
            value={this.state.username}
          />

          <Label for="email">Email</Label>
          <input
            type="email"
            onChange={this.onChange}
            name="email"
            placeholder="example@gmail.com"
            value={this.state.email}
          />

          <Label for="password">Password</Label>
          <input
            type="password"
            onChange={this.onChange}
            name="password"
            placeholder="......"
            value={this.state.password}
          />

          <Label for="password2">Confirm Password</Label>
          <input
            type="password"
            onChange={this.onChange}
            name="password2"
            placeholder="......"
            value={this.state.password2}
          />

          <button className="signup-btn" type="submit" name="submit">Sign Up</button>
          <h4 className="or-login">or</h4>
          <NavLink className="login-link" to="/login">Login</NavLink>
        </Form>
      </Container>
    );
  }
}

export default RegisterForm;
