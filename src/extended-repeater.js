const creator = (str = '', sep, n = 1) => Array(n).fill(str, 0).join(sep);
const repeater = (str, options) => {
    const add = options.addition !== undefined
        ? creator(String(options.addition), options.additionSeparator || '|', options.additionRepeatTimes) : '';
    return creator(`${str}${add}`, options.separator || '+', options.repeatTimes);
};

module.exports = repeater;
