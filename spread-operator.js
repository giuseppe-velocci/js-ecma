const a = [1,2,3,4];

// log an array witha a one liner
console.log(...a);

// or use it inside a function: that MUST have the same number (or greater) of arguments
const add4 = (one, two, three, four) => {
    return one+two+three+four;
}
console.log(add4(...a));

// or concat arrays easily
const b = [5,6,7];
const c = [...a, ...b];
console.log(...c);
