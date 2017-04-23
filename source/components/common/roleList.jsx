import React from 'react';
import { Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import './roleList.scss';

const RoleList = ({ onHandleChange, roles, activeRoles }) => (
  <div>
    {roles.map((role) => {
      const active = activeRoles.indexOf(role) > -1;
      const buttonCss = `role-button ${role.toLowerCase()}`;
      return (
        <div className="role" key={role}>
          <Button
            className={buttonCss}
            onClick={() => onHandleChange(role, active)}
            active={active}
          >
            {role}
          </Button>
        </div>
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
