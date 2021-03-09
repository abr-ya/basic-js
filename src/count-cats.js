const countIt = (arr, str) => arr.reduce((sum, it) => sum + (it === str ? 1 : 0), 0);
const countCats = (arr) => arr.reduce((sum, it) => sum + countIt(it, '^^'), 0);
module.exports = countCats;
