import employeeData from '../data/employees.js';

const employees = (state = employeeData, action) => {
  switch (action.type) {
    case 'ADD_EMPLOYEE':
      return Object.assign({}, state, {
        employees: [
          ...state.employees,
          action.employee,
        ],
      });
    default:
      return state;
  }
};

export default employees;
