import React from 'react';
import PropTypes from 'prop-types';

import ProfilePicture from '../../../assets/profile_picture.png';

import './employeeItem.scss';

const EmployeeItem = ({ item, color }) => (
  <div className="card" style={{'backgroundColor': color}}>
    <img className="avatar" src={ProfilePicture} alt="profile_picture" />
    <div className="content">
      <h4>{item.name}</h4>
      <div>Role: {item.role}</div>
      <div>Quote: {item.quote}</div>
    </div>
  </div>
);

EmployeeItem.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
    quote: PropTypes.string.isRequired,
  }).isRequired,
  color: PropTypes.string.isRequired
};

export default EmployeeItem;
