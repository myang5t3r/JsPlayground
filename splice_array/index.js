// practice splice

// create array form string
const myStr = "HelloMyNameisMatt";
const myArr = myStr.split("");

console.log(myArr);

// create new array but remove first index with splice
// const newArr = myArr.splice(1);
// console.log(newArr);

// Remove M from matt index 13
const newArr1 = myArr.splice(1, myArr.length);
console.log(myStr.slice(5));
