/* -->  JavaScript (JS) is a lightweight, interpreted, or just-in-time compiled programming language with first-class functions.
   -->  While it is most well-known as the scripting language for Web pages, many non-browser environments also use it, such as Node.js, Apache CouchDB and Adobe Acrobat.
   -->  JavaScript is a prototype-based, multi-paradigm, single-threaded, dynamic language, supporting object-oriented, imperative, and declarative (e.g. functional programming) styles.  
   -->  The standard for JavaScript is ECMAScript.
   --> JS is loosely typed.
*/

/*
 --> Use javascript console to view output.. open HTML file in chrome...
*/


/* -->multi line comment
commenting in JS
--> // - single line comment
*/

//Printing to console

console.log("Hello JavaScript");
console.log('This is Nikhil.');

/* alerting in browser
alert("hello alert in JS...!!!"); 
 */

//creating variables

let age = 25;
console.log(age);
age=30;
console.log(age);

const a=25;
console.log(a);
 //    a=30;  error; reassigning the const variable.

var score=75;
console.log(score);

/* rules with variable assignments

-->  Names can contain letters, digits, underscores, and dollar signs.
-->  Names must begin with a letter
-->  Names can also begin with $ and _ 
-->  Names are case sensitive (y and Y are different variables)
-->  Reserved words (like JavaScript keywords) cannot be used as names like let and Const.


Note: Variables are dynamic..

*/

/* Data Types In JavaScript....
1. Numbers - 1,2,3,4,1.02,5.5
2.String - 'ar' , "hello"
3.Boolean - true, false
4.Null - explicitly set a variable to a no value
5.Undefined - For variable that have not yet been defined
6.Object - Complex data structures like Arrays, Dates
7.Symbols- used with objects


*/

// String operations

let fname="nikhil";
let lname="singh";

console.log(fname+ " "+lname);

console.log(fname[0]+" "+lname[0]);

console.log("uppercase = "+ fname.toUpperCase());

let fullname = fname+" " +lname;

console.log("fullname is= "+ fullname.toUpperCase());

