/**
 * This method will check if the searchString is present in employee.name
 * @param  {object} employee       An employee object
 * @param  {string} searchString A searchstring
 * @return {boolean}             True if present, false if not
 */
const applySearchFilter = (employee, searchString) => {
  const name = employee.name.toLowerCase();
  const string = searchString.toLowerCase();
  return (name.indexOf(string) > -1);
};


/**
 * This method will check if any of the roles listed are present in the employee object
 * @param  {object} employee An employee object
 * @param  {array}  roles    An array with roles
 * @return {boolean}         True if present, false if not
 */
const applyRoleFilter = (employee, roles) => {
  return (roles.indexOf(employee.role) > -1);
};

export {
  applySearchFilter,
  applyRoleFilter
};
