const createDreamTeam = (members) =>
  Array.isArray(members)
    ? members.filter(it => typeof it === 'string')
      .map(it => it.trim()[0].toUpperCase()).sort().join('')
    : false;

module.exports = createDreamTeam;
