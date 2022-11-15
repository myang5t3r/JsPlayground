// Practice slice for strings

//  create a string
const str = "Hello my name is matt";
console.log(`The original length of the string is = ${str.length}`);

// remove Hello by removing first 5 elements
const newStr = str.slice(5);
console.log(
  `To remove beginning of string use slice(x), where x is the number of characters you want to remove, for example str.slice(5) = ${newStr}`
);
