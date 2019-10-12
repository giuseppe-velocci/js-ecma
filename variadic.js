// variadic operator does not need arguments in the function signature
function addMany() {
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    return sum;
}

// you can pass as many arguments you want
addMany(1,2,3,4);
// or even explode an array with the spread syntax
addMany(...[1,2,3,4]);