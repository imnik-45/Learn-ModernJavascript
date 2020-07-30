const title="Best Of 2019"
const movie = "Avengers Endgame"
const coll = 2

//concatenation way

console.log('the '+title+ ' movie is '+movie+ ' a '+coll);

// template literals way

let temp= `the ${title} movie is ${movie} a ${coll}`;
console.log("Template string way= "+temp);

//creating HTML Templates

let html=`
            <h2>${title}</h2>
            <p>${movie}</p>
            <span>${coll}</span>
`;
console.log("\nHTML Template way\n "+html);

console.log("----------------------------------------------------------------")
console.log("--BOOLEANS--")

let email="nik@gmail.com"

let res=email.includes('@');
console.log("@ is present in email- "+email+" is = "+res);

//comparison operators

let age=25;
console.log("the age is = "+age);
console.log("if age is 25 = "+(age==25));
console.log("if age is 35 = "+(age==35));
console.log("if age is >=35 = "+(age>=35));
console.log("if age is <=35 = "+(age<=35));
console.log("if age is !=35 = "+(age!=35));

//lowecase letter are greater than uppercase letters in JS

let name="nikhil"
console.log("if nikhil > Nikhil = "+ (name > 'Nikhil'))
console.log("if nikhil > inder = "+ (name>'inder'))
console.log("if nikhil > shouvit = "+ (name>'shouvit'))
console.log("if nikhil > Shouvit = "+ (name>'Shouvit'))
console.log("if Nikhil > Shouvit = "+ ('Nikhil'>'shouvit'))


console.log("----------------------------------------------------------------")

console.log(" == is a loose method of comparison in JS bc Of JS TypeConversion Behind the scene.. For Example")

let ck=25;
console.log("loose comparison compare str with numbr ck == '25' is  = "+ (ck =='25'));

console.log("use === to perform strict comparison..For Example")
console.log("strict comparison compare str with numbr ck === '25' is  = "+ (ck ==='25'));

console.log("----------------------------------------------------------------")
//type conversion
console.log("\t--Type Conversion--")

let str="mango";

console.log("to know the type of variable str is using typeof="+ typeof str );

let result=Number('abcd');
console.log("explicit conversion to number= "+result +" type="+typeof result);

let result2=String(50);
console.log("explicit conversion to string= "+result2 +" type="+typeof result2);


console.log("----------------------------------------------------------------")