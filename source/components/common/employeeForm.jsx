import React from 'react';
import PropTypes from 'prop-types';
import { FormGroup, FormControl } from 'react-bootstrap';

import ProfilePicture from '../../../assets/profile_picture_add.png';
import '../../../assets/css/common.scss';

import './employeeForm.scss';
import './employeeItem.scss';

class EmployeeForm extends React.Component {
  static getDefaultState() {
    return {
      name: '',
      role: '',
      quote: '',
      validation: EmployeeForm.getDefaultValidation()
    };
  }

  static getDefaultValidation() {
    return {
      name: null,
      role: null,
      quote: null
    };
  }

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      role: '',
      quote: '',
      validation: {
        name: null,
        role: null,
        quote: null
      }
    };

    this.onHandleChange = this.onHandleChange.bind(this);
    this.onSubmitResult = this.onSubmitResult.bind(this);
    this.validateResult = this.validateResult.bind(this);
  }


  onHandleChange(e) {
    const id = e.target.id;

    switch (id) {
      case 'name':
        this.setState({ name: e.target.value });
        break;
      case 'role':
        this.setState({ role: e.target.value });
        break;
      case 'quote':
        this.setState({ quote: e.target.value });
        break;
      default:
    }
  }

  onSubmitResult() {
    if (this.validateResult()) {
      this.props.onSubmitResult(this.state);
    }
  }

  validateResult() {
    const validation = EmployeeForm.getDefaultValidation();

    if (!this.state.name) {
      validation.name = 'error';
    }
    if (!this.state.role) {
      validation.role = 'error';
    }
    if (!this.state.quote) {
      validation.quote = 'error';
    }

    if (validation.name || validation.role || validation.quote) {
      this.setState({ validation });
      return false;
    }

    this.resetForm();
    return true;
  }

  resetForm() {
    this.setState(EmployeeForm.getDefaultState());
  }

  render() {
    return (
      <div className="employee-card add card">
        <img
          onClick={this.onSubmitResult}
          src={ProfilePicture}
          className="avatar add"
          alt="profile_picture"
        />
        <div className="content">
          <form>
            <FormGroup
              validationState={this.state.validation.name}
            >
              <FormControl
                id="name"
                bsSize="sm"
                type="text"
                value={this.state.name}
                placeholder="Enter your name..."
                onChange={this.onHandleChange}
              />
            </FormGroup>
            <FormGroup
              validationState={this.state.validation.role}
            >
              <FormControl
                id="role"
                bsSize="sm"
                type="text"
                value={this.state.role}
                placeholder="Enter your role..."
                onChange={this.onHandleChange}
              />
            </FormGroup>
            <FormGroup
              validationState={this.state.validation.quote}
            >
              <FormControl
                id="quote"
                bsSize="sm"
                type="text"
                value={this.state.quote}
                placeholder="Enter your quote..."
                onChange={this.onHandleChange}
              />
            </FormGroup>
          </form>
        </div>
      </div>
    );
  }
}

EmployeeForm.propTypes = {
  onSubmitResult: PropTypes.func.isRequired,
};

export default EmployeeForm;
