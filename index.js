'use strict';

let company = {
  sales: [{name: 'Jonh', salary: 1000}, {name: 'Alice', salary: 600}],
  development: {
    web: [{name: 'Peter', salary: 2000}, {name: 'Alex', salary: 1800}],
    internals: [{name: 'Jack', salary: 1300}]
  }
};
function sumSalaries(company) {
  if (Array.isArray(company)) { 
    return company.reduce((prev, current) => prev + current.salary, 0);
  } else {
    let sum = 0;
    for (let subdepartment of Object.values(company)) {
      sum += sumSalaries(subdepartment);
    }
    return sum;
  }
}
console.log(sumSalaries(company));