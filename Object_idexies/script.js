const types = {
    "lowercase":[true,"abcdefghijklmnopqrstuvwxyz"],
    "uppercase":[true, "ABCDEFGHIJKLMNOPWXYZ"],
    "numbers":[true,"0123456789"], 
    "specialCharacters":[true,"!#$%&()*+,-./:;<=>?@[\]^_`{|}~"]
  };

// var charArray = [
// (lowercase = "abcdefghijklmnopqrstuvwxyz"),
// (uppercase ="ABCDEFGHIJKLMNOPWXYZ"),
// (numbers = "0123456789"), 
// (specicalCharacters = "!#$%&()*+,-./:;<=>?@[\]^_`{|}~") 
// ]
var char ="";  

console.log(Object.values(types)[0][1])
console.log(types.lowercase[0])
console.log((Object.values(types).length))




// if ( types.lowercase || types.numbers || types.specialCharacters || types.uppercase === true){
//     console.log("At least one yes")
// }else {
//     console.log("No character selected")
// }

for(i=0; i < Object.values(types).length; i++){
    console.log(Object.values(types)[i][0])
    if(Object.values(types)[i][0]===true){
        char = char.concat(Object.values(types)[i][1])
    }
  }
console.log(char)