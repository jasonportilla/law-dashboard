import React, { Component } from 'react';
import { Container, Label, Form } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import './RegisterForm.css';

class RegisterForm extends Component {
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
    const { errors } = this.state;
    return (
      <Container>
        <Form noValidate onSubmit={this.onSubmit} className="register-fields">
          <Label for="name">Name</Label>
          <input
            className={errors.name ? 'invalid' : ''}
            type="text"
            onChange={this.onChange}
            name="name"
            placeholder="portillaj"
            value={this.state.name}
          />
          { errors.name && (<div className="feedback">{ errors.name}</div>) }

          <Label for="email">Email</Label>
          <input
            className={errors.email ? 'invalid' : ''}
            type="email"
            onChange={this.onChange}
            name="email"
            placeholder="example@gmail.com"
            value={this.state.email}
          />
          { errors.email && (<div className="feedback">{ errors.email}</div>) }

          <Label for="password">Password</Label>
          <input
            className={errors.password ? 'invalid' : ''}
            type="password"
            onChange={this.onChange}
            name="password"
            placeholder="......"
            value={this.state.password}
          />
          { errors.password && (<div className="feedback">{ errors.password}</div>) }

          <Label for="password2">Confirm Password</Label>
          <input
            className={errors.password2 ? 'invalid' : ''}
            type="password"
            onChange={this.onChange}
            name="password2"
            placeholder="......"
            value={this.state.password2}
          />
          { errors.password2 && (<div className="feedback">{ errors.password2}</div>) }

          <button className="signup-btn" type="submit" name="submit">Sign Up</button>
          <h4 className="or-login">or</h4>
          <NavLink className="login-link" to="/login">Login</NavLink>
        </Form>
      </Container>
    );
  }
}

export default RegisterForm;
