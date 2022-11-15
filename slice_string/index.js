// Practice slice for strings

//  create a string
const str = "Hello my name is matt";
console.log(`The original length of the string is = ${str.length}`);

// remove Hello by removing first 5 elements
const newStr = str.slice(5);
console.log(
  `To remove beginning of string use slice(x), where x is the number of characters you want to remove, for example str.slice(5) = ${newStr}`
);

// remove my name is from the string
const nextStr = str.slice(0, 5) + str.slice(16);
console.log(
  `To remove my name is from str use str.slice(0, 5) + str.slice(16), which will log  = ${nextStr}`
);

// Practice negative indexes print my name is
const negStr = str.slice(6, -5);
console.log(
  `We can also use negative indexes to remove backend of string, us str.slice(6,-5) to remove first 6 indices and last 5 indices  = ${negStr}`
);
