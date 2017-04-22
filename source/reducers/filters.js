const initialState = {
  name: '',
  roles: []
};

const filters = (state = initialState, action) => {
  switch (action.type) {
    case 'FILTER_BY_NAME':
      return Object.assign({}, state, {
        searchString: action.searchString
      });
    case 'ADD_FILTER_BY_ROLE':
      return Object.assign({}, state, {
        roles: [
          ...state.roles,
          action.role,
        ],
      });
    case 'REMOVE_FILTER_BY_ROLE':
      return Object.assign({}, state, {
        roles: [
          ...state.roles.filter(role => (role !== action.role))
        ],
      });
    default:
      return state;
  }
};

export default filters;
