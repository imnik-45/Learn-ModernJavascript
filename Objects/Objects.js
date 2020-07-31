/*
An object is a collection of properties, and a property is an association between a name (or key) and a value.
 A property's value can be a function, in which case the property is known as a method.
 In addition to objects that are predefined in the browser, you can define your own objects. 
*/

//object literals

let user = {
    name: "hello jS",
    age: 25,
    email: "hello@gmail.com",
    reg: "India",
    blogs: ["hello", "js"],
    login: function () {
        console.log("this is login function in user objects...");
    },
    logout: function () {
        console.log("this is logout functions in user objects...");
    },
    logBlogs: function () {
        //  console.log(this.blogs);
        this.blogs.forEach(blog => {
            console.log(blog);
        })
        console.log(this)
    }

}

console.log(user);
console.log(user.reg);
console.log(user['name']);
console.log(user['age']);

const key = 'blogs';
console.log(user[key]);

user['name'] = "rikk";
console.log(user['name']);

//type of user

console.log("type of user= " + typeof user);


//using function of user objects

user.login();

user.logBlogs();

/* Outputs upto here

{
  name: 'hello jS',
  age: 25,
  email: 'hello@gmail.com',
  reg: 'India',
  blogs: [ 'hello', 'js' ],
  login: [Function: login],
  logout: [Function: logout],
  logBlogs: [Function: logBlogs]
}
India
hello jS
25
[ 'hello', 'js' ]
rikk
type of user= object
this is login function in user objects...
hello
js
{
  name: 'rikk',
  age: 25,
  email: 'hello@gmail.com',
  reg: 'India',
  blogs: [ 'hello', 'js' ],
  login: [Function: login],
  logout: [Function: logout],
  logBlogs: [Function: logBlogs]
}


*/
//------------------------------------------------------------
console.log("\n----------------------- New Stuff ---------------------------------");
const blogs = [{
        title: "harry potter",
        likes: 30
    },
    {
        title: "Song of ice n fire",
        likes: 29
    }
];

console.log(blogs)

let people = {
    name: "hello jS",
    age: 25,
    email: "hello@gmail.com",
    reg: "India",

    blogs: [{
            title: "harry potter",
            likes: 30
        },
        {
            title: "Song of ice n fire",
            likes: 29
        }
    ],


    login: function () {
        console.log("this is login function in user objects...");
    },
    logout: function () {
        console.log("this is logout functions in user objects...");
    },
    logBlogs: function () {
        //  console.log(this.blogs);
        this.blogs.forEach(blog => {
            console.log(blog.title, blog.likes);
        });

    }

}

people.logBlogs();

// Inbuilt objects in javascript
console.log("\n-------------- Inbuilt Math Objects------------")
//Math Object
console.log("value of pi using Math.PI= " + Math.PI);
console.log("value of E using Math.E= "+Math.E);

const a = 2.8;
console.log("original value= " + a);
console.log("ROUNDING USING round()= " + Math.round(a));
console.log("floor()= " + Math.floor(a));
console.log("ceil()= " + Math.ceil(a));
console.log("trunc()= " + Math.trunc(a));

//random numbers

const random = Math.random();
console.log("random number using Math.random= " + random);
console.log("random number again  using Math.random= " + Math.round(random * 100));

/*
----------------------- New Stuff ---------------------------------
[
  { title: 'harry potter', likes: 30 },
  { title: 'Song of ice n fire', likes: 29 }
]
harry potter 30
Song of ice n fire 29

-------------- Inbuilt Math Objects------------
value of pi using Math.PI= 3.141592653589793
value of E using Math.E= 2.718281828459045
original value= 2.8
ROUNDING USING round()= 3
floor()= 2
ceil()= 3
trunc()= 2
random number using Math.random= 0.633160194896206
random number again  using Math.random= 63
*/

console.log("\n=========================Primitive Values================================\n");

let scoreOne=50;
let scoreTwo=scoreOne;

console.log(`scoreOne is ${scoreOne} and scoreTwo is ${scoreTwo}`);

scoreOne=100;

console.log(`changed scoreOne is ${scoreOne} and scoreTwo is ${scoreTwo}`);

// reference values/types
console.log("\n=========================Reference Values================================\n");
const userOne ={name:"nik",age:22};
const userTwo = userOne;
console.log(userOne,userTwo);

userOne.age=23;
console.log("changed values but both variable point to same object");
console.log(userOne,userTwo);