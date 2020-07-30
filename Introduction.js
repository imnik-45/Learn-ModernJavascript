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


/* alerting in browser
alert("hello alert in JS...!!!"); 
 */

//creating variables
console.log("----------------------------------------------------------------")
let age1 = 25;
console.log(age1);
age1=30;
console.log(age1);

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
console.log("----------------------------------------------------------------")
let fname="nikhil";
let lname="singh";

// concatenating two strings via ' + ' operator

console.log("Concatenation using '+' is= "+fname+ " "+lname);

console.log(fname[0]+" "+lname[0]);


// String functions to convert to upper and lower case
console.log("uppercase = "+ fname.toUpperCase());

let fullname = fname+" " +lname;

console.log("fullname in UpperCase is= "+ fullname.toUpperCase());


// index function 
let index = lname.indexOf('s');

console.log("IndexOf Function indexof()= "+index);

// slice function slice(m,n-1)

let email="nik@gmail.com"

let result = email.slice(0,2);

console.log("Slice Function slice()= "+result);

//substring function substr(m,n-1)

let result1 = email.substr(0,2);

console.log("substr functions substr()= "+result1);

// replace function replace('old str', 'new str')

console.log("replace function replace()= "+email.replace('n','m'))

//----------------------------------------------------------------------------------------

/* Operations On Numbers - B I D M A S

--> B -Brackets
--> I -Indices
--> D -division
--> M -multiplications
--> A -Additions  
--> S -Subtractions

*/
console.log("----------------------------------------------------------------")

let calc= 5*(10-3)**2;
console.log("Operation using BIDMAS of ' 5*(10-3)**2 ' is = "+calc);

let likes=25;
console.log("preincrement of 25= "+ (++likes));
likes=25;
console.log("postincrement of 25= "+ (likes++) +  ' is ' +(likes));

// NaN - Not A Number..

console.log("----------------------------------------------------------------")