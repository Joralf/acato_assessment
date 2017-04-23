import { connect } from 'react-redux';
import { addEmployee } from '../actions/employee.js';
import employeeForm from '../components/employee/employeeForm.jsx';

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => (
  {
    onSubmitResult: (newEmployee) => {
      dispatch(addEmployee(newEmployee));
    }
  }
);

const employeeAdd = connect(
  mapStateToProps,
  mapDispatchToProps,
)(employeeForm);

export default employeeAdd;
