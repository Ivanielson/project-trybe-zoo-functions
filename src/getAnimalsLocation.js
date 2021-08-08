const { species } = require('./data');

// Função retorna animais por location;

function getAnimalsFormLocation(zone) {
  const names = [];
  const animals = species.reduce((acc, { location, name }) => {
    if (location === zone.toUpperCase()) {
      names.push(name);
      acc[location] = names;
    }
    return acc;
  }, {});
  return animals;
}

// Função retorna todos os animais por location;

const getAllLocations = () => {
  const obj = Object.assign(
    getAnimalsFormLocation('ne'),
    getAnimalsFormLocation('nw'),
    getAnimalsFormLocation('se'),
    getAnimalsFormLocation('sw'),
  );
  return obj;
};

const getAllAnimalsFromLocation = () => {
  const newObjectSpecies = species.map(({ name: nome, location, residents }) => {
    const obj = {
      location,
      [nome]: residents.map((names) => `${names.name}`),
    };
    return obj;
  });
  return newObjectSpecies;
};

console.log(getAllAnimalsFromLocation());

module.exports = {
  getAllLocations,
};
