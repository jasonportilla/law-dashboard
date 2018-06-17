import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { createNewClient } from '../../actions/authAction';
import AddClientForm from './AddClientForm';

class AddClient extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      judge: '',
      caseAmount: '',
      courtroom: '',
      phoneNumber: '',
      street: '',
      state: '',
      city: '',
      zipcode: '',
      county: '',
      courtCaseNumber: '',
      caseDivision: '',
      errors: {},
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.errors) {
      return {
        errors: nextProps.errors,
      };
    }
    return null;
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    const createClient = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      phoneNumber: this.state.phoneNumber,
      judge: this.state.judge,
      caseDivision: this.state.caseDivision,
      courtCaseNumber: this.state.courtCaseNumber,
      caseAmount: this.state.caseAmount,
      courtroom: this.state.courtroom,
      street: this.state.street,
      city: this.state.city,
      state: this.state.state,
      zipcode: this.state.zipcode,
      county: this.state.county,
    };

    this.props.createNewClient(createClient, this.props.history);
  }
  render() {
    console.log('What are my props', this.props);
    return (
      <div>
        <h1>Add A Client</h1>
        <AddClientForm
          {...this.state}
          onSubmit={this.onSubmit}
          onChange={this.onChange}
        />
      </div>
    );
  }
}

AddClient.propTypes = {
  history: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  createNewClient: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  client: state.client,
  auth: state.auth,
  errors: state.errors,
});

export default connect(mapStateToProps, { createNewClient })(AddClient);
