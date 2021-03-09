const transform = (start) => {
  const control = [
    '--double-next', '--discard-next',
    '--double-prev', '--discard-prev'
  ];
  const arr = [...start];
  arr.forEach((el, index) => {
    if (el === '--double-next' && index !== (arr.length - 1)) arr[index + 1] = {key: '+', value: arr[index + 1]};
    if (el === '--discard-next' && index !== (arr.length - 1)) arr[index + 1] = {key: '-'};
    if (el === '--double-prev' && index !== 0) {
      const prev = arr[index - 1];
      if (prev.key && prev.key === '+') {
        arr[index - 1].key = '++';
      } else {
        arr[index - 1] = {key: '+', value: arr[index - 1]};
      }
    }
    if (el === '--discard-prev' && index !== 0) {
      const prev = arr[index - 1];
      if (prev.key && prev.key === '+') {
        arr[index - 1] = prev.value;
      } else {
        arr[index - 1] = {key: '-'};
      }
    } 
  });
  const res = [];
  arr.forEach(el => {
    if (el.key && el.key === '++') res.push(el.value, el.value, el.value);
    if (el.key && el.key === '+') res.push(el.value, el.value);
    if (!el.key || el.key !== '-' && el.key !== '+' && el.key !== '++') res.push(el);
  });
  return res.filter(el => !control.includes(el))
    .filter(el => !(el.key && el.key === '-' || el.key === '+')); // если удвоил упр.
}

module.exports = transform;
