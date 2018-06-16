import React from 'react';
import { Container, Form, Label, FormGroup } from 'reactstrap';
import PropType from 'prop-types';
import { Link } from 'react-router-dom';
import './AddClient.css';

const AddClientForm = ({
  errors, onSubmit, onChange, firstName,
  lastName, email, judge, caseAmount, courtroom,
  phoneNumber, street, state, city, zipcode, county, courtCaseNumber, caseDivision,
}) => (
  <Container>
    <Form className="add-client-form" noValidate onSubmit={onSubmit}>
      <FormGroup>
        <Label for="firstName">First Name</Label>
        <br />
        <input
          className={errors.name ? 'invalid' : ''}
          type="text"
          onChange={onChange}
          name="firstName"
          value={firstName}
          />  
      </FormGroup>
      { errors.firstName && (<div className="feedback">{ errors.firstName }</div>) }
      <FormGroup>
      <Label for="lastName">Last Name</Label>
      <br />
      <input
        className={errors.name ? 'invalid' : ''}
        type="text"
        onChange={onChange}
        name="lastName"
        value={lastName}
      />
      </FormGroup>

      { errors.lastName && (<div className="feedback">{ errors.lastName }</div>) }
      <FormGroup>
      <Label for="email">Email</Label>
      <br />
      <input
        className={errors.email ? 'invalid' : ''}
        type="email"
        onChange={onChange}
        name="email"
        value={email}
      />
      </FormGroup>
      <br />
      <FormGroup>
      <Label for="courtcasenumber">Court Case Number</Label>
      <br />
      <input
        className={errors.courtCaseNumber ? 'invalid' : ''}
        type="text"
        onChange={onChange}
        name="courtCaseNumber"
        value={courtCaseNumber}
      />
      </FormGroup>
      <FormGroup>
      <Label for="courtroom">Courtroom</Label>
      <br />
      <input
        className={errors.courtroom ? 'invalid' : ''}
        type="text"
        onChange={onChange}
        name="courtroom"
        value={courtroom}
      />
      </FormGroup>
      <FormGroup>
      <Label for="casedivision">Case Division</Label>
      <br />
      <input
        className={errors.caseDivision ? 'invalid' : ''}
        type="password"
        onChange={onChange}
        name="caseDivision"
        value={caseDivision}
      />
      </FormGroup>
      <FormGroup>
      <Label for="judge">Judge</Label>
      <br />
      <input
        className={errors.judge ? 'invalid' : ''}
        type="password"
        onChange={onChange}
        name="judge"
        value={judge}
      />
      </FormGroup>
      <FormGroup>
      <Label for="county">County</Label>
      <br />
      <input
        className={errors.county ? 'invalid' : ''}
        type="password"
        onChange={onChange}
        name="county"
        value={county}
      />
      </FormGroup>
      <FormGroup>
      <Label for="caseamount">Case Amount</Label>
      <br />
      <input
        className={errors.caseAmount ? 'invalid' : ''}
        type="password"
        onChange={onChange}
        name="caseAmount"
        value={caseAmount}
      />
      </FormGroup>
      <FormGroup>
      <Label for="phonenumber">Phone Number</Label>
      <br />
      <input
        className={errors.phoneNumber ? 'invalid' : ''}
        type="password"
        onChange={onChange}
        name="phoneNumber"
        value={phoneNumber}
      />
      </FormGroup>
      <FormGroup>
      <Label for="street">Street</Label>
      <br />
      <input
        className={errors.street ? 'invalid' : ''}
        type="password"
        onChange={onChange}
        name="street"
        value={street}
      />
      </FormGroup>
      <FormGroup>
      <Label for="city">City</Label>
      <br />
      <input
        className={errors.city ? 'invalid' : ''}
        type="password"
        onChange={onChange}
        name="city"
        value={city}
      />
      </FormGroup>
      <FormGroup>
      <Label for="state">State</Label>
      <br />
      <input
        className={errors.state ? 'invalid' : ''}
        type="password"
        onChange={onChange}
        name="state"
        value={state}
      />
      </FormGroup>
      <FormGroup>
      <Label for="zipcode">Zipcode</Label>
      <input
        className={errors.zipcode ? 'invalid' : ''}
        type="password"
        onChange={onChange}
        name="zipcode"
        value={zipcode}
      />
      </FormGroup>

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
