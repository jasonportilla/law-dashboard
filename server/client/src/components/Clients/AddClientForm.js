import React from 'react';
import { Container, Form, Label } from 'reactstrap';
import PropType from 'prop-types';
import { Link } from 'react-router-dom';

const AddClientForm = ({
  errors, onSubmit, onChange, firstName,
  lastName, email, judge, caseAmount, courtroom,
  phoneNumber, street, state, city, zipcode, county, courtCaseNumber, caseDivision,
}) => (
  <Container>

    <Form noValidate onSubmit={onSubmit} className="register-fields">
      <Label for="firstName">First Name</Label>
      <input
        className={errors.name ? 'invalid' : ''}
        type="text"
        onChange={onChange}
        name="firstName"
        value={firstName}
      />
      { errors.firstName && (<div className="feedback">{ errors.firstName }</div>) }

      <Label for="lastName">Last Name</Label>
      <input
        className={errors.name ? 'invalid' : ''}
        type="text"
        onChange={onChange}
        name="lastName"
        value={lastName}
      />
      { errors.lastName && (<div className="feedback">{ errors.lastName }</div>) }

      <Label for="email">Email</Label>
      <input
        className={errors.email ? 'invalid' : ''}
        type="email"
        onChange={onChange}
        name="email"
        value={email}
      />

      <Label for="courtcasenumber">Court Case Number</Label>
      <input
        className={errors.courtCaseNumber ? 'invalid' : ''}
        type="text"
        onChange={onChange}
        name="courtCaseNumber"
        value={courtCaseNumber}
      />

      <Label for="courtroom">Courtroom</Label>
      <input
        className={errors.courtroom ? 'invalid' : ''}
        type="text"
        onChange={onChange}
        name="courtroom"
        value={courtroom}
      />

      <Label for="casedivision">Case Division</Label>
      <input
        className={errors.caseDivision ? 'invalid' : ''}
        type="password"
        onChange={onChange}
        name="caseDivision"
        value={caseDivision}
      />

      <Label for="judge">Judge</Label>
      <input
        className={errors.judge ? 'invalid' : ''}
        type="password"
        onChange={onChange}
        name="judge"
        value={judge}
      />

      <Label for="county">County</Label>
      <input
        className={errors.county ? 'invalid' : ''}
        type="password"
        onChange={onChange}
        name="county"
        value={county}
      />

      <Label for="caseamount">Case Amount</Label>
      <input
        className={errors.caseAmount ? 'invalid' : ''}
        type="password"
        onChange={onChange}
        name="caseAmount"
        value={caseAmount}
      />

      <Label for="phonenumber">Phone Number</Label>
      <input
        className={errors.phoneNumber ? 'invalid' : ''}
        type="password"
        onChange={onChange}
        name="phoneNumber"
        value={phoneNumber}
      />

      <Label for="street">Street</Label>
      <input
        className={errors.street ? 'invalid' : ''}
        type="password"
        onChange={onChange}
        name="street"
        value={street}
      />

      <Label for="city">City</Label>
      <input
        className={errors.city ? 'invalid' : ''}
        type="password"
        onChange={onChange}
        name="city"
        value={city}
      />

      <Label for="state">State</Label>
      <input
        className={errors.state ? 'invalid' : ''}
        type="password"
        onChange={onChange}
        name="state"
        value={state}
      />

      <Label for="zipcode">Zipcode</Label>
      <input
        className={errors.zipcode ? 'invalid' : ''}
        type="password"
        onChange={onChange}
        name="zipcode"
        value={zipcode}
      />

      <button className="signup-btn" type="submit" name="submit">Add Client</button>
    </Form>
  </Container>
);

AddClientForm.propTypes = {
  errors: PropType.object.isRequired,
  firstName: PropType.string.isRequired,
  lastName: PropType.string.isRequired,
  email: PropType.string.isRequired,
  judge: PropType.string.isRequired,
  caseDivision: PropType.string.isRequired,
  courtroom: PropType.string.isRequired,
  street: PropType.string.isRequired,
  state: PropType.string.isRequired,
  city: PropType.string.isRequired,
  zipcode: PropType.string.isRequired,
  phoneNumber: PropType.string.isRequired,
  county: PropType.string.isRequired,
  caseAmount: PropType.string.isRequired,
  courtCaseNumber: PropType.string.isRequired,
  onChange: PropType.func.isRequired,
  onSubmit: PropType.func.isRequired,
};

export default AddClientForm;
