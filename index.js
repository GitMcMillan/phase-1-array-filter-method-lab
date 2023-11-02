// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'bobby'];



const findMatching = (drivers, nameToMatch) => {
  const result = drivers.filter(
    (driver) => driver.toLowerCase() === nameToMatch.toLowerCase()
  );
  return result;
};

const fuzzyMatch = (drivers, letters) =>
  drivers.filter((driver) => driver.startsWith(letters));


const matchName = (drivers, name) =>
  drivers.filter((driver) => driver.name === name);

// function findMatching(drivers, name) {
//   for (const driver of drivers) {
//     if (driver.name === name) {
//       return driver.name
//     }
//   }
// }