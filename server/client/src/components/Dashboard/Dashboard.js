import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logoutUser } from '../../actions/authAction';

class Dashboard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>Dashboard Container</div>
    );
  }
}

const mapStateToProps = state => ({
  client: state.client,
  auth: state.auth,
});

export default connect(mapStateToProps, { logoutUser })(Dashboard);
