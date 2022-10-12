const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let separator = options.separator || '+';
  let addition = String(options.addition) || '';
  let additionSeparator = options.additionSeparator || '|';
  let repeatTimes = options.repeatTimes || 1;
  let additionRepeatTimes = options.additionRepeatTimes || 1;
  let substr = str + ((String(options.addition) !== 'undefined' ? addition + additionSeparator : '')).repeat(additionRepeatTimes);
  if (String(options.addition) !== 'undefined') {
   substr= substr.slice(0, substr.length - additionSeparator.length)
  }
  let resstr =(substr + separator).repeat(repeatTimes);
  resstr = resstr.slice(0, resstr.length - separator.length)
  return resstr;
}
module.exports = {
  repeater
};
