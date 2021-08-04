const { species } = require('./data');
const { employees } = require('./data');
const data = require('./data');

function getSpeciesByIds(id1, id2 = '') {
  // seu código aqui
  return species.filter((element) => ((element.id === id1 || element.id === id2) && element));
}

function getAnimalsOlderThan(animal, age) {
  // seu código aqui
  return species.filter((animals) => animals.name === animal)[0].residents
    .every(({ age: idade }) => (idade >= age));
}

console.log(getAnimalsOlderThan('otters', 7));
function getEmployeeByName(employeeName) {
  // seu código aqui
  if (employeeName === undefined) {
    return {};
  }
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

function addEmployee(id, firstName, lastName, managers, responsibleFor) {
  // seu código aqui
}

function countAnimals(specie) {
  // seu código aqui
}

function calculateEntry(entrants) {
  // seu código aqui
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
