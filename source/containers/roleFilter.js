import { connect } from 'react-redux';
import { addFilterByRole, removeFilterByRole } from '../actions/filter.js';
import RoleList from '../components/common/roleList.jsx';

const mapStateToProps = state => ({
  roles: [...new Set(state.employees.employees.map(employee => employee.role))],
  activeRoles: state.filters.roles
});


const mapDispatchToProps = dispatch => (
  {
    onHandleChange: (role, active) => {
      if (active) {
        return dispatch(removeFilterByRole(role));
      }
      return dispatch(addFilterByRole(role));
    }
  }
);

const roleFilter = connect(
  mapStateToProps,
  mapDispatchToProps,
)(RoleList);

export default roleFilter;
