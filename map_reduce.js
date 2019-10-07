// js map - reduce pattern
const double = (m) => {
    return m *2;
}

const arr = [1,2,3,4];

// double the values inside the array
const arrDouble = arr.map(double);

// then sum them all
let sumDouble = arrDouble.reduce((accumulator, d) => {return accumulator + d;}, 0);
console.log(sumDouble);


// or do it all in one single operation through chain calls
console.log(
    arr.map(double).reduce((accumulator, d) => {return accumulator + d;}, 0)
);