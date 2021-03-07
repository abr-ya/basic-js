const calculateHanoi = (diskNumber, turnsSpeed) => ({
  turns: 2 ** diskNumber - 1,
  seconds: Math.floor((2 ** diskNumber - 1) / (turnsSpeed / 3600)),
});

module.exports = calculateHanoi;
