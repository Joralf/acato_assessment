import React from 'react';
import PropTypes from 'prop-types';
import { FormGroup, FormControl } from 'react-bootstrap';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };

    this.onHandleChange = this.onHandleChange.bind(this);
  }

  onHandleChange(e) {
    const searchString = e.target.value;

    this.props.onHandleChange(searchString);
    this.setState({ value: searchString });
  }

  render() {
    return (
      <form>
        <FormGroup>
          <FormControl
            type="text"
            value={this.state.value}
            placeholder=""
            onChange={this.onHandleChange}
          />
        </FormGroup>
      </form>
    );
  }
}

Search.propTypes = {
  onHandleChange: PropTypes.func.isRequired,
};

export default Search;
