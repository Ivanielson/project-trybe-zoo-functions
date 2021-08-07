const { species, employees } = require('./data');

const getEmployee = (idOrName) => {
  const value = employees.filter(({ firstName, lastName, id }) =>
    (firstName === idOrName || lastName === idOrName || id === idOrName))
    .reduce((acc, element) => {
      acc.nome = `${element.firstName} ${element.lastName}`;
      acc.AnimalsIds = `${[...element.responsibleFor]}`;
      return acc;
    }, {});
  const { nome, AnimalsIds } = value;
  const idsAnimal = AnimalsIds.split(',');
  const result = [];
  for (let index = 0; index < idsAnimal.length; index += 1) {
    result.push(species.find((animals) => animals.id.indexOf(idsAnimal[index]) !== -1).name);
  }
  return { [nome]: [...result] };
};

const getAllEmployes = () => {
  const allEmployees = employees.map(({ firstName, lastName, responsibleFor }) =>
    ({ name: `${firstName} ${lastName}`, idsResponsibleFor: [...responsibleFor] }));
  const result = {};
  for (let index = 0; index < allEmployees.length; index += 1) {
    const nome = allEmployees[index].name;
    const animals = allEmployees[index].idsResponsibleFor;
    const animalsName = [];
    for (let count = 0; count < animals.length; count += 1) {
      const nomeAnimals = species.find((animalName) => animalName.id === animals[count]).name;
      animalsName.push(nomeAnimals);
    }
    result[nome] = [...animalsName];
  }
  return result;
};

console.log(getAllEmployes());

module.exports = {
  getEmployee,
  getAllEmployes,
};
