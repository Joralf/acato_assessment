export const FILTER_BY_NAME = 'FILTER_BY_NAME';
export const ADD_FILTER_BY_ROLE = 'ADD_FILTER_BY_ROLE';
export const REMOVE_FILTER_BY_ROLE = 'REMOVE_FILTER_BY_ROLE';

export function filterByName(searchString) {
  return {
    type: 'FILTER_BY_NAME',
    searchString,
  };
}

export function addFilterByRole(role) {
  return {
    type: 'ADD_FILTER_BY_ROLE',
    role,
  };
}

export function removeFilterByRole(role) {
  return {
    type: 'REMOVE_FILTER_BY_ROLE',
    role,
  };
}
