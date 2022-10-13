const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
 function minesweeper(matrix) {
  const matrixCopy = matrix.map(item => item.map(_ => 0));

  for (let i = 0; i < matrixCopy.length; i++) {
    for (let j = 0; j < matrixCopy[i].length; j++) {
      if(matrix[i][j]===true&&matrix[i+1]!==undefined&&matrix[i+1][j-1]!==undefined) {
        matrixCopy[i+1][j-1]++; 
      }
      if(matrix[i][j]===true&&matrix[i+1]!==undefined&&matrix[i+1][j]!==undefined) {
        matrixCopy[i+1][j]++; 
      }
      if(matrix[i][j]===true&&matrix[i+1]!==undefined&&matrix[i+1][j+1]!==undefined) {
        matrixCopy[i+1][j+1]++;
      } 
      if(matrix[i][j]===true&&matrix[i-1]!==undefined&&matrix[i-1][j+1]!==undefined) {
        matrixCopy[i-1][j+1]++;
      } 
      if(matrix[i][j]===true&&matrix[i-1]!==undefined&&matrix[i-1][j-1]!==undefined) {
        matrixCopy[i-1][j-1]++; 
      }
      if(matrix[i][j]===true&&matrix[i-1]!==undefined&&matrix[i-1][j]!==undefined) {
        matrixCopy[i-1][j]++;
      } 
      if(matrix[i][j]===true&&matrix[i]!==undefined&&matrix[i][j-1]!==undefined) {
        matrixCopy[i][j-1]++; 
      }
      if(matrix[i][j]===true&&matrix[i]!==undefined&&matrix[i][j+1]!==undefined) {
        matrixCopy[i][j+1]++;
      } 
    }
  }
    console.log(matrixCopy);
    return matrixCopy;
  }

module.exports = {
  minesweeper
};
