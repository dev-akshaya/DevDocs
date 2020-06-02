const companies = [
  {name: "Company One", category: "Finance", start: 1982, end: 2000},
  {name: "Company Two", category: "Retail", start: 1984, end: 2001},
  {name: "Company Three", category: "Auto", start: 1986, end: 2004},
  {name: "Company Four", category: "Tech", start: 1983, end: 2004},
  {name: "Company Five", category: "Space", start: 1986, end: 2005},
  {name: "Company Six", category: "Tech", start: 1989, end: 2006},
  {name: "Company Seven", category: "Tech", start: 1990, end: 2004},
  {name: "Company Eight", category: "Design", start: 1995, end: 2004}
]

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 25, 64, 32];

// for ---------------------------------------
for(let i = 0; i < companies.length; i++) {
  console.log(companies[i]);
}

// forEach -----------------------------------
companies.forEach(function(Company){
  console.log(Company);
});

companies.forEach(function(company){
  console.log(company.name);
});

// filter (for) -------------------------------
let canDrink = [];
for(let i = 0; i < ages.length; i++) {
  if(ages[i] >= 21){
    canDrink.push(ages[i]);
  }
}
console.log(canDrink);

// filter -------------------------------------
const canDrink = ages.filter(function(age){
  if(age >= 21){
    return true;
  }
});
console.log(canDrink);

// filter using ES6 ------------------------------
const canDrink = ages.filter(age => age >= 21);
console.log(canDrink);

// filter retail companies ------------------------
const retailCompanies = companies.filter(function(company){
  if(company.category === 'Tech') {
    return true;
  }
});
console.log(retailCompanies);

// filter retail companies ES6 ---------------------
const retailCompanies = companies.filter(company => company.category === 'Tech');
console.log(retailCompanies);

// filter 80s companies ------------------------
const eightiesCompanies = companies.filter(company => (company.start >= 1980 && company.start < 1990));

console.log(eightiesCompanies);

// filter survived 10years companies ------------
const lastedTenYears = companies.filter(company => (company.end - company.start) >= 10);

console.log(lastedTenYears);

// map ------------------------------
const companyName = companies.map(function(company){
  return company.name;
});
console.log(companyName);

const companyData = companies.map(function(company){
  return `${company.name} [${company.start} - ${company.end}]`;
});
console.log(companyData);

// map with ES6 ------------------------------
const companyName = companies.map(company => company.name);
console.log(companyName);

const companyData = companies.map(company => `${company.name} [${company.start} - ${company.end}]`);
console.log(companyData);

// map age Square root ------------------------------
const agesSquareroot = ages.map(age => Math.sqrt(age));
console.log(agesSquareroot);

// map age Square ------------------------------
const agesSquare = ages.map(age => age * 2);
console.log(agesSquare);

// sort the companies by starting year --------------
const sortedCompanies = companies.sort(function(c1, c2){
  if(c1.start > c2.start) {
    return 1;
  } else {
    return -1;
  }
});

console.log(sortedCompanies);

// sort the companies by starting year ----- ES6 -----
const sortedCompanies = companies.sort((a, b) => (a.start > b.start ? 1 : -1));

console.log(sortedCompanies);

// sort ages ----------------------------------------
const sortAges = ages.sort((a, b) => a -b);
console.log(sortAges);

// reduce functionality with for loop ---------------
let ageSum = 0;
for(let i = 0; i < ages.length; i++){
  ageSum += ages[i];
}
console.log(ageSum);

// reduce -------------------------------------------
let ageSum = ages.reduce(function(total, age){
  return total + age;
})
console.log(ageSum);

// reduce ES5----------------------------------
let ageSum = ages.reduce((total, age) => total + age, 0);
console.log(ageSum);

// get total years of all companies ---------------
const totalYears = companies.reduce(function(total, company){
  return total + (company.end - company.start);
}, 0);
console.log(totalYears);

// get total years of all companies ----- ES6 -------
const totalYears = companies.reduce((total, company) => total + (company.end - company.start), 0);
console.log(totalYears);

// Combaine methods ---------------
const combine = ages
  .map(age => age * 2)
  .filter(age => age >= 40)
  .sort((a, b) => a - b)
  .reduce((a, b) => a + b, 0)

console.log(combine);