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
