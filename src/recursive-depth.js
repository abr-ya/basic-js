class DepthCalculator {
  toStr(arr) {
      return JSON.stringify(arr).split('').filter(el => '[]'.includes(el)).join('');
  }

  calculateDepth(arr, count = 1) {
      let str = Array.isArray(arr) ? this.toStr(arr) : arr;
      str = str.replace(/\[\]/g, "");
      return str.length ? this.calculateDepth(str, count + 1) : count;
  };
}

module.exports = DepthCalculator;
