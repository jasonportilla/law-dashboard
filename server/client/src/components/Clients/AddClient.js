import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

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

  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      return <Redirect to="/dashboard" />;
    }
    return <Redirect to="/login" />;
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
    return (
      <div>
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
  errors: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors,
});

export default connect(mapStateToProps, { createNewClient })(AddClient);