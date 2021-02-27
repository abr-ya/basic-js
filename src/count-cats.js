const CustomError = require("../extensions/custom-error");

const countIt = (arr, str) => arr.reduce((sum, it) => sum + (it === str ? 1 : 0), 0);

module.exports = function countCats(arr) {
  return arr.reduce((sum, it) => sum + countIt(it, '^^'), 0);
};
