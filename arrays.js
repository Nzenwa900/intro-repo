
let cars = ["BENZ", "HONDA", "BMW"];

let firstElement = cars[0];

console.log(firstElement);


// Array lenghth method

console.log(cars.length)

let lastElement = cars[cars.length - 1]; // last element

console.log(lastElement);

// reassign an array element

cars[1] = "Audi";

console.log(cars);




console.log(cars.pop());

console.log(cars)

let poppedElement = cars.pop();

console.log(poppedElement);
console.log(cars);

cars.push("Honda");
console.log(cars);

cars.unshift("lexus");
console.log(cars);

cars.shift()
console.log(cars);

console.log(cars.indexOf("Honda"));
console.log(cars.indexOf("BENZ"));


// function hello(firstName) {
//     return firstName 
    
// }

// const hello = firstName => {
//     return firstName;
// }


// 

// function add (num1, num2) {
//     return num1 + num2
// }



// Arrow Function
// const add = (num1,num2) => result = num1 + num2;


// console.log(add(2,3));

// // Object

const person = {
    firstName: "John",
    lastName: "Wick",
    age: 30,
    walk: function () {
        console.log('I am walking');
    },
    run: function () {
        console.log("I am running");
    }
};

console.log(person.firstName);

person.age = 32;

console.log(person);

person.walk();

person.run();

// CREATE A CAR OBJECT properties should include name of car, model, year of manufacture, start function, stop function.