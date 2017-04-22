import { combineReducers } from 'redux';
import filters from './filters.js';
import employees from './employees.js';

const rootRecucer = combineReducers({
  filters,
  employees
});

export default rootRecucer;
