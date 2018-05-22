import React from 'react';
import { Container, Label } from 'reactstrap';
import { NavLink } from 'react-router-dom';

const RegisterForm = (props) => {
  console.log('my props ', props);
  return (
    <Container>
      <Label for="username">username</Label>
      <input type="text" name="username" placeholder="portillaj"value={props.username} />

      <Label for="email">Email</Label>
      <input type="email" name="email" placeholder="example@gmail.com" value={props.email} />

      <Label for="password">Password</Label>
      <input type="password" name="password" placeholder="......" value={props.password} />

      <Label for="password2">Confirm Password</Label>
      <input type="password" name="password2" placeholder="......" value={props.password2} />

      <Label for="password2">Confirm Password</Label>
      <button className="signup-btn" type="submit" name="submit">Sign Up</button>
      <h4 className="or-login">or</h4>
      <NavLink className="login-link" to="/login">Login</NavLink>
    </Container>
  );
};

export default RegisterForm;
