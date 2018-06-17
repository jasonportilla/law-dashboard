import React from 'react';
import { Container, Form, Label, FormGroup } from 'reactstrap';
import PropType from 'prop-types';
import './AddClient.css';

const AddClientForm = ({
  errors, onSubmit, onChange, firstName,
  lastName, email, judge, caseAmount, courtroom,
  phoneNumber, street, state, city, zipcode, county, courtCaseNumber, caseDivision,
}) => {
  console.log(errors);
  return (
    <Container>
      <div className="scrollable">
        <Form className="add-client-form" noValidate onSubmit={onSubmit}>
          <FormGroup className="firstname-client-input">
            <Label for="firstName">First Name</Label>
            <br />
            <input
              className={errors.firstName ? 'invalid' : ''}
              type="text"
              onChange={onChange}
              name="firstName"
              value={firstName}
            />
            { errors.firstName && (<div className="feedback" id="add-client-error">{ errors.firstName }</div>) }
          </FormGroup>

          <FormGroup className="lastname-client-input">
            <Label for="lastName">Last Name</Label>
            <br />
            <input
              className={errors.lastName ? 'invalid' : ''}
              type="text"
              onChange={onChange}
              name="lastName"
              value={lastName}
            />
            { errors.lastName && (<div className="feedback" id="add-client-error">{ errors.lastName }</div>) }
          </FormGroup>

          <FormGroup className="email-client-input">
            <Label for="email">Email</Label>
            <br />
            <input
              type="email"
              onChange={onChange}
              name="email"
              value={email}
            />
          </FormGroup>
          <br />
          <FormGroup className="court-case-input">
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
          <FormGroup className="judge-client-input">
            <Label for="judge">Judge</Label>
            <br />
            <input
              className={errors.judge ? 'invalid' : ''}
              type="text"
              onChange={onChange}
              name="judge"
              value={judge}
            />
          </FormGroup>
          <FormGroup>
            <Label for="casedivision">Case Division</Label>
            <br />
            <input
              className={errors.caseDivision ? 'invalid' : ''}
              type="text"
              onChange={onChange}
              name="caseDivision"
              value={caseDivision}
            />
          </FormGroup>
          <FormGroup>
            <Label for="county">County</Label>
            <br />
            <input
              className={errors.county ? 'invalid' : ''}
              type="text"
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
              type="text"
              onChange={onChange}
              name="caseAmount"
              value={caseAmount}
            />
          </FormGroup>
          <FormGroup className="phone-case-input">
            <Label for="phonenumber">Phone Number</Label>
            <br />
            <input
              className={errors.phoneNumber ? 'invalid' : ''}
              type="text"
              onChange={onChange}
              name="phoneNumber"
              value={phoneNumber}
            />
          </FormGroup>
          <FormGroup className="street-client-input">
            <Label for="street">Street</Label>
            <br />
            <input
              className={errors.street ? 'invalid' : ''}
              type="text"
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
              type="text"
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
              type="text"
              onChange={onChange}
              name="state"
              value={state}
            />
          </FormGroup>
          <FormGroup>
            <Label for="zipcode">Zipcode</Label>
            <input
              className={errors.zipcode ? 'invalid' : ''}
              type="text"
              onChange={onChange}
              name="zipcode"
              value={zipcode}
            />
          </FormGroup>

          <button className="add-client-btn" type="submit" name="submit">Add Client</button>
        </Form>
      </div>
    </Container>
  );
};

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
