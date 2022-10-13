const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
 function getDNSStats(domains) {
  let elements = {};
  domains.map(el => {
    let k ='';
    el.split('.').reverse().map(e =>{
      k = k +'.'+ e;
      console.log(k);
      (elements.hasOwnProperty(k))? elements[k]++: elements[k]= 1;
    })
  })
 return elements;
}

module.exports = {
  getDNSStats
};
