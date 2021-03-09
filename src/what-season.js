const isDate = (date) => typeof date.getMonth === 'function';
const isDate2 = (date) => {
  const mon = date.getMonth();
  return Number.isInteger(mon) && mon > 0 && mon <= 12;
}

const getSeason = (date) => {
  if (date === undefined) return 'Unable to determine the time of year!';
  if (!isDate(date) && !isDate2(date)) throw new Error('Whoops!');

  const mon = date.getMonth();
  const helper = [
    {id: 'spring', val: [2,3,4]},
    {id: 'summer', val: [5,6,7]},
    {id: 'autumn', val: [8,9,10]},
    {id: 'winter', val: [11,0,1]},
  ];
  return helper.find(el => el.val.includes(mon)).id;
}

module.exports = getSeason;
