import React from 'react';
import { Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

const RoleList = ({ onHandleChange, roles, activeRoles }) => (
  <div>
    {roles.map((role) => {
      const active = activeRoles.indexOf(role) > -1;

      return (
        <Button
          onClick={() => onHandleChange(role, active)}
          key={role}
          active={active}
        >
          {role}
        </Button>
      );
    })}
  </div>
);

RoleList.propTypes = {
  activeRoles: PropTypes.arrayOf(PropTypes.string.isRequired),
  roles: PropTypes.arrayOf(PropTypes.string.isRequired),
  onHandleChange: PropTypes.func.isRequired,
};

RoleList.defaultProps = {
  activeRoles: [],
  roles: [],
};

export default RoleList;
