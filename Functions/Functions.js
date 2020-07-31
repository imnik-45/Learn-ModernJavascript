//Functions in JS

/*
Functions are blocks of code that can be named and reused.

Here’s how to declare a function:
EXAMPLE :- 

function addTwoNumbers(x, y) {
       return x + y;
}

There’s a lot going on in the example above, so let’s look at each part individually.

--> function is the keyword that starts declaring a function.
--> addTwoNumbers is the function’s name, which is customizable — just like variable names.
--> (x, y) are parameters, variable names for the inputs a function will accept.
--> return is the keyword that exits the function and shares an optional value outside.

*/

// function declarations

function greet() {
  console.log("hello Js..!!");
}

//function call
greet();

//function expression -- ends with a semicolon(;)

const speak = function () {
  console.log("this is funtion expression..");
};

//involke a function expression

speak();

//Hoisting is JavaScript's default behavior of moving all declarations to the top of the current scope
//(to the top of the current script or the current function).

//function expressions are not hoisted in Javascript.

//argument or parameterized functions

const args = function (name) {
  console.log(`hello ${name}`);
};

args("abcd");

// orders of arguments are important
console.log("\n--Parameterised Functions--");
const args1 = function (name = "abc", region = "uk") {
  console.log(`hello ${name} from ${region}`);
};

args1();

args1("bcd", "Usa");

//using values of the functions

const Calcarea = function (radius) {
  let area = 3.14 * radius ** 2;
  return area;
};

const area = Calcarea(5);
console.log("\nArea of circle is =" + area);

//Arrow functions
//Arrow functions were introduced in ES6. Arrow functions allow us to write shorter function syntax.
console.log("\n--Arrow Functions--");
const Circle = (radius) => {
  return 3.14 * radius ** 2;
};

console.log("new area is= " + Circle(4));

//when we have only one argument for arrow function we can simplify the above code even more by removing ()

const Circle2 = (radius) => {
  return 3.14 * radius ** 2;
};

console.log("new area is= " + Circle2(4));

// if we have only one simple return with one argument we can simplify the above function to a single line by removing the return keyword

const Circle3 = (radius) => 3.14 * radius ** 2;

console.log("new area is= " + Circle3(2));

//more of arrow functions

const greet1 = () => "hello again JS";
console.log(greet1());

//complexity in arrow functions
console.log("\nComplex Arrow Functions");
const bill = function (products, tax) {
  let total = 0;
  for (let i = 0; i < products.length; i++) {
    total += products[i] + products[i] * tax;
  }
  return total;
};

console.log("total bill is= " + bill([10, 20, 30], 0.2));

const bill1 = (products, tax) => {
  let total = 0;
  for (let i = 0; i < products.length; i++) {
    total += products[i] + products[i] * tax;
  }
  return total;
};
console.log("total bill is= " + bill1([40, 20, 30], 0.2));

//methods vs functions - functions are invoked via calling function name i.e fun()
//while methods are functions which are associated with objects or data types ie followed by dot (.) notation
console.log("\n--Methods vs Functions--");
const name = "hello";

console.log(name.toUpperCase());

// Call-Back Functions

//function takes another function as a parameter and calls it inside. This is valid in JavaScript and we call it a “callback”.
//So a function that is passed to another function as a parameter is a callback function.

console.log("\n--CallBack Functions--");

const myfunc = (callbackfunc) => {
  let value = 10;
  callbackfunc(value);
};

myfunc((value) => {
  console.log("value of callback function is= " + value);
});


// for each methods
console.log("\n--For each--")
let people=['mario',"naruto","ryu","kaguya"];

people.forEach(function(){
       console.log("this is for-each");
})
console.log("\narray of person using for-each");
people.forEach((person,index) => {
       console.log(index+ ". "+person);
})

console.log("\nusing callback with template strings/literals")

const logPerson=(person,index) =>{
       console.log(`${index} - ${person}`);
};

people.forEach(logPerson);

console.log("references...")

const ul=document.querySelector(".kneegas");

const kneegas=["a","b","c","d"];

let html=``;

kneegas.forEach(kneega=>{
       html+= `<li style="color:orange">${kneega}</li>`;
});
console.log(html);
ul.innerHTML=html;