import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-bootstrap';

import EmployeeItem from './employeeItem.jsx';

const EmployeeList = ({ employees }) => (
  <Row>
    {employees.map(employee =>
      <Col xs={12} sm={6} md={6} key={employee.name}>
        <EmployeeItem item={employee} />
      </Col>
    )}
  </Row>
);

EmployeeList.propTypes = {
  employees: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
    quote: PropTypes.string.isRequired,
  })),
};

EmployeeList.defaultProps = {
  employees: [],
};

export default EmployeeList;
