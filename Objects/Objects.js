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