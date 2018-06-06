import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Form, Container, Label } from 'reactstrap';

const LoginForm = ({
  onSubmit, onChange, errors, email, password,
}) => (
  <div>
    <h1 className="login-title">LAW HUB</h1>
    <Container>
      <Form noValidate onSubmit={onSubmit} className="login-fields">
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

        <button className="login-btn" type="submit" name="submit">Login</button>
        <h4 className="or-signup">or</h4>
        <NavLink className="signup-link" to="/register">Create New Account</NavLink>
      </Form>
    </Container>
  </div>
);

LoginForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
};

export default LoginForm;
