import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-bootstrap';

import EmployeeItem from './employeeItem.jsx';

const employeeColorPallete = ['lightblue', 'lightgoldenrodyellow', 'lightsalmon', 'lightgreen'];

const EmployeeList = ({ employees }) => (
  <Row>
    {employees.map((item, index) =>
      <Col xs={12} sm={6} md={6} key={item.name}>
        <EmployeeItem color={employeeColorPallete[index]}
          item={item}
        />
      </Col>
    )}
  </Row>
);

EmployeeList.propTypes = {
  courses: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
    quote: PropTypes.string.isRequired,
  })),
};

EmployeeList.defaultProps = {
  courses: [],
};

export default EmployeeList;
