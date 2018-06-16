import React, { Component } from 'react';
import { Row, Container } from 'reactstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter, Redirect } from 'react-router-dom';
import RegisterForm from '../../components/Register/RegisterForm';
import './Register.css';
import logo from '../../assets/images/logo.svg';
import { registerUser } from '../../actions/authAction';

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      jobTitle: '',
      password: '',
      password2: '',
      errors: {},
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
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
    const createUser = {
      name: this.state.name,
      email: this.state.email,
      jobTitle: this.state.jobTitle,
      password: this.state.password,
      password2: this.state.password2,
    };
    this.props.registerUser(createUser, this.props.history);
  }
  render() {
    const { isAuthenticated } = this.props.auth;
    if (isAuthenticated) {
      return <Redirect to="/dashboard" />;
    }
    return (
      <Container fluid className="register-background">
        <Row className="back-overlay">
          <Container>
            <div className="register-form">
              <div className="form-info">
                <img className="register-logo" src={logo} alt="Law Hub Logo" />
                <h1 className="title-info">Sign Up</h1>
                <div className="register-description">
                  <p>Handle everything you need in one place to make your life easier.</p>
                </div>
              </div>
              <div className="form-box">
                <RegisterForm
                  {...this.state}
                  registerUser={registerUser}
                  onSubmit={this.onSubmit}
                  onChange={this.onChange}
                />
              </div>
            </div>
          </Container>
        </Row>
      </Container>
    );
  }
}

Register.propTypes = {
  history: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  registerUser: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors,
});

export default connect(mapStateToProps, { registerUser })(withRouter(Register));
