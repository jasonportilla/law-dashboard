import React from 'react';
import { Container, Label, Form } from 'reactstrap';
import { NavLink } from 'react-router-dom';

const RegisterForm = () => (
  <Container>
    <Form className="register-fields">
      <Label for="username">username</Label>
      <input type="text" name="username" placeholder="portillaj" />

      <Label for="email">Email</Label>
      <input type="email" name="email" placeholder="example@gmail.com" />

      <Label for="password">Password</Label>
      <input type="password" name="password" placeholder="......" />

      <Label for="password2">Confirm Password</Label>
      <input type="password" name="password2" placeholder="......" />

      <Label for="password2">Confirm Password</Label>
      <button className="signup-btn" type="submit" name="submit">Sign Up</button>
    </Form>
    <h4 className="or-login">or</h4>
    <NavLink className="login-link" to="/login">Login</NavLink>
  </Container>
);

export default RegisterForm;
