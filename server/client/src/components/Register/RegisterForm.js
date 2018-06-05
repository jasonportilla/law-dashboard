import React from 'react';
import PropTypes from 'prop-types';
import { Container, Label, Form } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import './RegisterForm.css';

const RegisterForm = ({
  errors, onSubmit, onChange, name, email, password, password2,
}) => (
  <Container>
    <Form noValidate onSubmit={onSubmit} className="register-fields">
      <Label for="name">Name</Label>
      <input
        className={errors.name ? 'invalid' : ''}
        type="text"
        onChange={onChange}
        name="name"
        placeholder="portillaj"
        value={name}
      />
      { errors.name && (<div className="feedback">{ errors.name }</div>) }

      <Label for="email">Email</Label>
      <input
        className={errors.email ? 'invalid' : ''}
        type="email"
        onChange={onChange}
        name="email"
        placeholder="example@gmail.com"
        value={email}
      />
      { errors.email && (<div className="feedback">{ errors.email}</div>) }

      <Label for="password">Password</Label>
      <input
        className={errors.password ? 'invalid' : ''}
        type="password"
        onChange={onChange}
        name="password"
        placeholder="......"
        value={password}
      />
      { errors.password && (<div className="feedback">{ errors.password}</div>) }

      <Label for="password2">Confirm Password</Label>
      <input
        className={errors.password2 ? 'invalid' : ''}
        type="password"
        onChange={onChange}
        name="password2"
        placeholder="......"
        value={password2}
      />
      { errors.password2 && (<div className="feedback">{ errors.password2}</div>) }

      <button className="signup-btn" type="submit" name="submit">Sign Up</button>
      <h4 className="or-login">or</h4>
      <NavLink className="login-link" to="/login">Login</NavLink>
    </Form>
  </Container>
);

RegisterForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  password2: PropTypes.string.isRequired,
};

export default RegisterForm;
