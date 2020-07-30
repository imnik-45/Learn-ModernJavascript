// Array Data Structure in JavaScript

let arr = ['apples','mangoes','pineapple'];

console.log("Original array is= "+arr);

arr[1]="orange";

console.log("new array after arr[1]=orange is= "+arr);
console.log("----------------------------------------------------------------")


console.log("\n--Array Methods--")
console.log("----------------------------------------------------------------")
//Length method

console.log("length of Fruits Array arr.length is "+arr.length);
console.log("----------------------------------------------------------------")

// join method

console.log("Joined with Fruits join() =  "+arr.join('*'));
console.log("----------------------------------------------------------------")

// index of elements
console.log("index of orange is indexof() =  "+arr.indexOf('orange'));
console.log("----------------------------------------------------------------")

// concat method - does not changes array

console.log("concat Fruits Array concat() is= "+arr.concat(['kiwi','grapes']));
console.log("----------------------------------------------------------------")

//push method - changes array (destructive method)

console.log("pushed Banana in Fruits at = "+arr.push("Banana"));
console.log("Fruits Array After Pushing push() is = "+arr);
console.log("----------------------------------------------------------------")


//Pop method - changes array (destructive method)

console.log("popped element of fruits array= "+ arr.pop());
console.log("after popping new array pop() is= "+arr);
console.log("----------------------------------------------------------------")
