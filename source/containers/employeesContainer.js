import { connect } from 'react-redux';
import EmployeeList from '../components/common/employeeList.jsx';

import { applySearchFilter, applyRoleFilter } from '../helpers/employeeFilters.js';

const mapStateToProps = (state) => {
  const employees = state.employees.employees;
  const { searchString, roles } = state.filters;

  return {
    employees: employees.filter((employee) => {
      const filters = [];

      if (searchString) {
        filters.push(applySearchFilter(employee, searchString));
      }

      if (roles.length > 0) {
        filters.push(applyRoleFilter(employee, roles));
      }

      return filters.every(item => (item === true));
    })
  };
};

const mapDispatchToProps = () => ({});

const employeesContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(EmployeeList);

export default employeesContainer;
