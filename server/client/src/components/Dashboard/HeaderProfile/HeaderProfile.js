import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import './HeaderProfile.css';

const HeaderProfile = ({ user }) => (
  <Fragment>
    <div className="header-profile">
      <img
        className="avatar-image rounded-circle"
        src={user.avatar}
        alt="Gravatar"
      />
      <h4 className="header-profile__name">{ user.name }</h4>
      <h5 className="header-profile__title text-center">{ user.jobTitle}  </h5>
    </div>
  </Fragment>
);

HeaderProfile.propTypes = {
  user: PropTypes.object.isRequired,
};

export default HeaderProfile;
