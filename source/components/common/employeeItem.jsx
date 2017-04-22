import React from 'react';
import PropTypes from 'prop-types';

import './employeeItem.scss';

const EmployeeItem = ({ item, color }) => (
  <div className="card" style={{'backgroundColor': color}}>
    <h3>{item.name}</h3>
    <div>Role: {item.role}</div>
    <div>Quote: {item.quote}</div>
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
