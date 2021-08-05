const { species } = require('./data');
const { employees } = require('./data');
const { prices } = require('./data');
const data = require('./data');

function getSpeciesByIds(id1, id2 = '') {
  // seu código aqui
  return species.filter((element) => ((element.id === id1 || element.id === id2) && element));
}

function getAnimalsOlderThan(animal, age) {
  // seu código aqui
  return species.find((animals) => animals.name === animal)
    .residents.every(({ age: idade }) => (idade >= age));
}

function getEmployeeByName(employeeName) {
  // seu código aqui
  if (!employeeName) return {};
  return employees.find(({ firstName, lastName }) =>
    (firstName === employeeName) || (lastName === employeeName));
}

function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
  return {
    id: personalInfo.id,
    firstName: personalInfo.firstName,
    lastName: personalInfo.lastName,
    managers: associatedWith.managers,
    responsibleFor: associatedWith.responsibleFor,
  };
}

function isManager(id) {
  // seu código aqui
  // Referência -> Source: https://ricardo-reis.medium.com/indexof-e-lastindexof-do-array-javascript-ac93f0848bd2
  return employees.some(({ managers }) => managers.indexOf(id) !== -1);
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  // seu código aqui
  employees.push({
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  });
}

function countAnimals(specie) {
  // seu código aqui
  /* Consultei o repositório do Rodolfo Braga para entender e resolver essa parent;
  Link: https://github.com/tryber/sd-014-b-project-zoo-functions/pull/35 */
  if (!specie) {
    return species.reduce((acc, { name, residents }) => {
      acc[name] = residents.length;
      return acc;
    }, {});
  }
  return species.find((animals) => animals.name === specie).residents.length;
}

function calculateEntry(...entrants) {
  // seu código aqui
  if (!entrants) return 0;
  return entrants.reduce((acc, { Adult = 0, Child = 0, Senior = 0 }) => {
    let value = acc;
    value = (Adult * prices.Adult) + (Child * prices.Child) + (Senior * prices.Senior);
    return value;
  }, 0);
}

function getAnimalMap(options) {
  // seu código aqui
}

function getSchedule(dayName) {
  // seu código aqui
}

function getOldestFromFirstSpecies(id) {
  // seu código aqui
}

function increasePrices(percentage) {
  // seu código aqui
}

function getEmployeeCoverage(idOrName) {
  // seu código aqui
}

module.exports = {
  calculateEntry,
  getSchedule,
  countAnimals,
  getAnimalMap,
  getSpeciesByIds,
  getEmployeeByName,
  getEmployeeCoverage,
  addEmployee,
  isManager,
  getAnimalsOlderThan,
  getOldestFromFirstSpecies,
  increasePrices,
  createEmployee,
};
