const chainMaker = {
  value: [],
 
  addLink: function(link) {
    this.value.push(link);
    return this;
  },

  removeLink: function(pos) {
    if (!Number.isInteger(pos) || pos <= 0 || pos > this.value.length - 1) {
      this.value = [];
      throw new Error('oooops!');
    }
    this.value = this.value.filter((el, id) => id !== pos - 1);
    return this;
  },

  reverseChain: function() {
    this.value.reverse();
    return this;
  },

  getLength: function() {
    return this.value.length;
  },

  finishChain: function() {
    const res = this.value.map(val => val === undefined ? '( )' : `( ${val} )`).join('~~');
    this.value = [];
    return res;
  },
}

module.exports = chainMaker;
