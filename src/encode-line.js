const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
 function encodeLine(str) {
  let res ='';
  for(let i=0; i<str.length; i++){
    let n =1;
    while (str[i] === str[i + 1]) {
      n++;
      i++;
    }
    res += (n === 1)? str[i]: n+str[i];
  }
  console.log(res)
   return(res)
}

module.exports = {
  encodeLine
};
