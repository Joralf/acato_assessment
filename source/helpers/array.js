/**
 * Calculate minimum value for given key in array of objects
 * @param  {array}  array array of objects
 * @param  {string} key   key that will be used to determine minimum value
 * @return {number}       minimum value
 */
const min = (array, key) => (
  array.reduce((prev, curr) => (
    prev[key] < curr[key] ? prev : curr
  ))[key]
);

/**
 * Calculate maximum value for given key in array of objects
 * @param  {array}  array array of objects
 * @param  {string} key   key that will be used to determine maximum value
 * @return {number}       maximum value
 */
const max = (array, key) => (
  array.reduce((prev, curr) => (
    prev[key] > curr[key] ? prev : curr
  ))[key]
);

export { min, max };
