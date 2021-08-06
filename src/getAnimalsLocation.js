const { species } = require('./data');

// Funções retornam nomes dos animais por location;
// <--------------------Início------------------------>
function getLocationNe() {
  const names = [];
  const animals = species.reduce((acc, { location, name }) => {
    if (location === 'NE') {
      names.push(name);
      acc[location] = names;
    }
    return acc;
  }, {});
  return animals;
}

function getLocationNw() {
  const names = [];
  const animals = species.reduce((acc, { location, name }) => {
    if (location === 'NW') {
      names.push(name);
      acc[location] = names;
    }
    return acc;
  }, {});
  return animals;
}

function getLocationSe() {
  const names = [];
  const animals = species.reduce((acc, { location, name }) => {
    if (location === 'SE') {
      names.push(name);
      acc[location] = names;
    }
    return acc;
  }, {});
  return animals;
}

function getLocationSw() {
  const names = [];
  const animals = species.reduce((acc, { location, name }) => {
    if (location === 'SW') {
      names.push(name);
      acc[location] = names;
    }
    return acc;
  }, {});
  return animals;
}

const getAllLocations = () => {
  const obj = Object.assign(getLocationNe(), getLocationNw(), getLocationSe(), getLocationSw());
  return obj;
};
// <--------------------Fim------------------------>

module.exports = {
  getAllLocations,
};
