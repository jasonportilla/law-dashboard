import React from 'react';
import { Col, Label } from 'reactstrap';

const RegisterForm = () => (
  <Col>
    <div className="form-box">
      <form>
        <Label for="firstName">Name:</Label>
        <input type="text" />
      </form>
    </div>
  </Col>
);

export default RegisterForm;
