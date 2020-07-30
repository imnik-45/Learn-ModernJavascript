/*
Control Flow - uses conditional statements to check conditions.

    1.for-loops
    2.While-Loop
    3.do-While-Loop

*/

// 1 .For loop
console.log("---For Loop ---\n");

const names = ["rj", "jk", "pk"];
for (let i = 0; i < names.length; i++) {
    //  console.log(names[i]);
    let html = `<div>${names[i]}</div>`;
    console.log(html);
}

//2. While Loop
console.log("\n---While Loop ---");
let i = 0;
while (i < names.length) {
    console.log(names[i]);
    i++;
}

//3.Do While Loop
console.log("\n---Do While Loop ---");
let j = 0;
do {
    console.log(j);
    ++j;
} while (j < 5);

console.log("---------------------------------------------------------------");

// If Statement

console.log("\n---If Statement----\n");

const age = 20;

if (age > 18) {
    console.log("you can vote");
}

console.log("\n---If-Else Statement----\n");
const password = "p@ss";

if (password.length >= 8) {
    console.log("password is long enough");
} else {
    console.log("password is not long enough");
}

console.log("\n---If-Else-Ladder Statement----\n");

if (password.length == 4 && password.includes("@")) {
    console.log("password is correct");
} else if (password.length > 4) {
    console.log("password is good");
} else {
    console.log("password is bad");
}

/*
    && - Logical And
    || - Logical OR
    !  - Logical NOT    
*/

//Break & Continue

const scores=[50,20,0,30,100,10,25];

console.log("array of scores is= "+scores)

console.log("\nuse of Continue ")
for(i=0;i<scores.length;i++){
    if(scores[i] == 0){
        continue;
    }
    console.log(scores[i]);
   
}
console.log("\nuse of Break ")
for(i=0;i<scores.length;i++){
    if(scores[i] == 100){
        console.log("you scored a centuary.")
       break;
    }
    console.log(scores[i]);
}

//Switch Case
console.log("\nUse of Switch Case.(Uses Strict Equality)")
const grade='C';

switch(grade)
{
    case 'A':console.log("grade A"); break;
    case 'B':console.log("grade B"); break;
    case 'C':console.log("grade C"); break;
    case 'D':console.log("grade D"); break;
    default:
        console.log("Reached Default")
}

// Scope Of Variable
console.log("\nScope Of Variable")
let num=10;
console.log("Original num="+num)
if(true){
    let num=20;
    console.log("inside 1st if="+num);

    if(true){
        let num=30;
        console.log("inside 2nd if="+num);
    }
}

console.log("Outside Scope="+num);