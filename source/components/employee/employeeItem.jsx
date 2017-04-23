import React from 'react';
import PropTypes from 'prop-types';

import ProfilePicture from '../../../assets/profile_picture.png';

import '../../../assets/css/common.scss';
import './employeeItem.scss';

const EmployeeItem = ({ item }) => {
  const avatarCss = `avatar ${item.role.toLowerCase()}`;
  return (
    <div className="employee-card card clickable">
      <img
        src={ProfilePicture}
        className={avatarCss}
        alt="profile_picture"
      />
      <div className="content">
        <h4>{item.name}</h4>
        <div>Role: {item.role}</div>
        <div>Quote: {item.quote}</div>
      </div>
    </div>
  );
};

EmployeeItem.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
    quote: PropTypes.string.isRequired,
  }).isRequired,
};

export default EmployeeItem;
