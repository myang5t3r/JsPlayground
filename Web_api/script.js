// Create elements to add to html 
var  elementTags = ["header", "main", "footer"];

elementTags.forEach(element =>{
    var tag = document.createElement(element)
    document.body.appendChild(tag)
})

// Let set some text inside the header, create element first
var h1Tag =document.createElement("h1")
h1Tag.textContent="This is the h1 in header"
// Only access with childNodes, not . notation
//  lookup 
console.log(document.body.childNodes)
document.body.childNodes[2].appendChild(h1Tag)

// // Try to add section in main with button
// var secTag = document.createElement("section")
// secTag.className = "container"
// secTag.setAttribute("style", 
// "background-color:lightblue; \
// border: .25em solid black; \
// height:8em ")
// document.body.childNodes[3].appendChild(secTag)

// // This is how you create button with attributes
// var btn = document.createElement("button")
// btn.innerHTML = "Click Me";
// btn.type = "submit";
// btn.name = "formBtn";
// btn.id = "button"
// // btn.onclick = function () {
// //     alert("Button is clicked")
// // }
// document.body.childNodes[3].appendChild(btn)

// // Lets change the background color with the button using eventListener
// var backgroundSwitcher = document.querySelector('#button')
// var container = document.querySelector('.container')

// backgroundSwitcher.addEventListener("click", function onclick(){
//     var randomColor = Math.floor(Math.random()*16777215).toString(16);
//     container.setAttribute("style", 
//     `background-color: #${randomColor};\
//     border: .25em solid black;\
//     height:8em `);
// })

// var myArry = [
//     {question: ["What operator can you use to find the data type of a variable?"],
//     guesses:["object.property", "this.object","typeof","propertyKey"],
//     answer:"typeof"
//     },
//     {question: "What does the === operator do in JS?",
//     answer1:["compares two variables are equal", "compares two variables and the data type and equal",
//     "compares two numbers are equal","compares two string are equal"],
//     answer:"compares two variables and the data type and equal"
//     },
//     {question: "In JS what method is used to get an element from an html document ",
//     answer1:["setInterval()", "appendChild()","getElementById()","setAttribute()"],
//     answer3:"getElementById()"
//     }
// ];


// console.log(myArry[0].guesses[0])

