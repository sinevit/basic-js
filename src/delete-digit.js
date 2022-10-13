const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const numbers = n.toString();
  const res = [];

  for (let i = 0; i < numbers.length; i++) {
      res.push(numbers.slice(0, i) + numbers.slice(i + 1))
  }

  return Math.max(...res.map(item => +item));
}

module.exports = {
  deleteDigit
};
