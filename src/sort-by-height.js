const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let changeArr = arr.filter(el => el !== (-1)).sort((a,b) => a-b);
  let pos = [];
  
  let findPos = arr.map((el,i) => {if(el === -1)pos.push(i)})
  
  let result = pos.map(i => changeArr.splice(i,0,-1));
  
  console.log(changeArr, pos, result);
  return changeArr;
}

module.exports = {
  sortByHeight
};
