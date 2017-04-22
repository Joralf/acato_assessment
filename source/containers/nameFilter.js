import { connect } from 'react-redux';
import { filterByName } from '../actions/filter.js';
import Search from '../components/common/search.jsx';

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => (
  {
    onHandleChange: (searchString) => {
      dispatch(filterByName(searchString));
    }
  }
);

const nameFilter = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Search);

export default nameFilter;
