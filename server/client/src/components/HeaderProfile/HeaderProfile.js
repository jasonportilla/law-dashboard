import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import './HeaderProfile.css';

const HeaderProfile = props => (
  <Fragment>
    <div className="header-profile">
      <img
        className="avatar-image rounded-circle"
        src={props.user.avatar}
        alt="Gravatar"
      />
      <div className="header-profile__name">
        <h4>{ props.user.name }</h4>
        <h5 className="text-center">Marilyn Portilla</h5>
      </div>
    </div>
  </Fragment>
);

HeaderProfile.propTypes = {
  user: PropTypes.object.isRequired,
};

export default HeaderProfile;
