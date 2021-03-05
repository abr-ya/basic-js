const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if (typeof sampleActivity !== 'string') return false;
  const N = parseFloat(sampleActivity);
  if (Number.isNaN(N) || N > 15 || N <= 0) return false;
  const k = 0.693 / HALF_LIFE_PERIOD; // 1 / years
  return Math.ceil(Math.log(MODERN_ACTIVITY / N) / k);
};
