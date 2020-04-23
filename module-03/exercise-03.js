const findBestEmployee = function (employees) {
  const arrOftasks = Object.values(employees);

  let greatNum = arrOftasks[0];
  // eslint-disable-next-line
  for (const tasks of arrOftasks) {
    if (greatNum < tasks) {
      greatNum = tasks;
    }
  }

  let bestEmployee;
  // eslint-disable-next-line
  for (const employee in employees) {
    if (employees[employee] === greatNum) {
      bestEmployee = employee;
    }
  }
  return bestEmployee;
};

console.log(
  findBestEmployee({
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99,
  }),
); // lorence

console.log(
  findBestEmployee({
    poly: 12,
    mango: 17,
    ajax: 4,
  }),
); // mango

console.log(
  findBestEmployee({
    lux: 147,
    david: 21,
    kiwi: 19,
    chelsy: 38,
  }),
); // lux
