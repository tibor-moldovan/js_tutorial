let numbers = [1,2,3,4,5,6,7,8,9,10];
function functionalProduct(elements) {
  return elements.reduce((total, n) => { return total *= n; });
}
console.log(functionalProduct(numbers));

/*let states = ["Kansas", "Nebraska", "North Dakota", "South Dakota"];

// Dakotas: Functional version
function functionalSingles(elements) {
  return elements.filter(element => element.split(/\s+/).length === 2);
}
console.log(functionalSingles(states));

// Dakotas: Functional version
function functionalSingles(elements) {
  return elements.filter(element => element.includes("Dakota"));
}
console.log(functionalSingles(states));*/
