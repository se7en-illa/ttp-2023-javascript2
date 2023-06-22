// Getting various built in methods for Strings & Integers
var methods = Object.getOwnPropertyNames(Number.prototype);
console.log(methods);

/*
Let's use some of the methods below for Number that we see

'toFixed',
'toPrecision',
'toString',
*/ 

// Integers Methods Usage 
// Integers Methods Usage - toFixed() - This method is used to format a number with a fixed number of decimal places. It returns a string representation of the number with the specified precision. The number is rounded to the specified number of decimal places, and if necessary, zeros are padded to the right
// let userInput = Number(prompt("Enter a decimal: "));
// console.log(userInput.toFixed(2));
// console.log(typeof userInput);

// Integers Methods Usage - toPrecision() - This method is used to format a number to a specified length, including both integer and decimal parts. It returns a string representation of the number with the specified precision
let num = 1234.5678;
console.log("num.toPrecision(5)",num.toPrecision(4)); 
console.log("typeof num",typeof num);
console.log("String(num)",String(num));

// Integers Methods Usage - toString() - converts Int variables to String
let myNum = 24;
myNum = myNum.toString();
console.log("myNum",myNum)
console.log(typeof myNum);

// 2D Arrays
let myArr = [[1,2,3],[4,5,6],[7,8,9]]
console.log(myArr[0][2])
console.log(myArr[2][1])

let myArr2 = [
    [["a","b","c"]],[4,5,6],[7,8,9]
]
console.log(myArr2[0][0][0])

// Objects - object is a collection of key-value pairs, where each key is a unique identifier and each value can be of any data type, including other objects.

// create empty object
let person = new Object();
person.name = "John";
person.age = "23";
person.city = "NY"

console.log("person",person);
console.log("person.name",person.name);
console.log("person.city",person.city);

// create object with data
let person2 = {
    name: "Bob", // key:value pair
    age: 21,
    city: "CA"
}
console.log("person2.age",person2.age)

person2.sport = "soccer" // add in new key,value pair
console.log("person2.sport",person2.sport);

person2.sport = "basketball" // update value
console.log("person2.sport",person2.sport);

console.log("person2",person2);
delete person2.sport // delete an object property
console.log("person2",person2);

// Looping through Object Properties
let person3 = {
    name: "Bob",
    age: 21,
    city: "CA"
}
for (let key in person3) {
    console.log("key",key);
    console.log("person3[key]",person3[key])
}

for (let [key,value] of Object.entries(person3)) {
    console.log("key",key);
    console.log("value",value);
}

let keys = Object.keys(person3); // access keys (only)
console.log("keys",keys);

let keys2 = Object.values(person3); // access values only
console.log("keys",keys2);

// Nested Objects
let student = {
    name: "John Doe",
    age: 20,
    grade: "A",
    address: {
        street: "123 Main Street",
        city: "New York",
        country: "USA"
    }
};
console.log("student.address.street",student.address.street)

let company = {
    name: "ABC Corp",
    location: "New York",
    departments: {
        sales: {
            manager: "John Smith",
            employees: {
                employee1: {
                    name: "Alice",
                    position: "Sales Representative"
                },
                employee2: {
                    name: "Bob",
                    position: "Sales Manager"
                }
            }
        },
        marketing: {
            manager: "Jane Doe",
            employees: {
                employee1: {
                    name: "Charlie",
                    position: "Marketing Coordinator"
                },
                employee2: {
                    name: "David",
                    position: "Marketing Specialist"
                }
            }
        }
    }
};
console.log("company.departments.sales.employees.employee1.name",company.departments.sales.employees.employee1.name)


// Object functions
let person4 = {
    name: "John",
    age: 30,
    sayHello: function(name) {
        console.log(`Hello, my name is ${name}`);
    }
};
person4.sayHello("bob");

let calculator = {
    add: function(a, b) {
        return a + b;
    },
    subtract: function(a, b) {
        return a - b;
    }
};
console.log("calculator.add(5, 3)",calculator.add(5, 3)); // Output: 8
console.log("calculator.subtract(10, 4)",calculator.subtract(10, 4)); // Output: 6

// this keyword refers to the current object car. It is a special keyword in JavaScript that is used to access properties and methods within an object. this.brand and this.model are used to access the brand and model properties. Without using "this." our startEngine function won't know that brand and model by themselves exist. Thus, we use this.brand and this.model to access those properties.
let car = {
    brand: "Tesla",
    model: "Model 3",
    startEngine: function() {
        console.log("Starting the " + this.brand + " " + this.model);
    }
};

car.startEngine(); // Output: Starting the Tesla Model 3

// another way of defining functions in objects     
let car2 = {
    brand: "Toyota",
    model: "Camry",
    year: 2022,
    displayDetails() {
        console.log(`Brand: ${this.brand}, Model: ${this.model}, Year: ${this.year}`);
    }
};

car2.displayDetails(); // Output: Brand: Toyota, Model: Camry, Year: 2022

// Nested Object Functions
let car3 = {
    brand: "Tesla",
    model: "Model 3",
    displayInfo: function() {
        console.log("Brand: " + this.brand);
        console.log("Model: " + this.model);
    },
    engine: {
        type: "Electric",
        start: function() {
            console.log("Starting the " + this.type + " engine...");
        },
        stop: function() {
            console.log("Stopping the " + this.type + " engine...");
        }
    }
};

// Calling the displayInfo function
car3.displayInfo();
// Output: Brand: Tesla
//         Model: Model 3

// Calling the engine's start and stop functions
car3.engine.start();
// Output: Starting the Electric engine...

car3.engine.stop();
// Output: Stopping the Electric engine...


// Object constructors - in the examples above, we've created objects, but we've set values for each, meaning we can't really re-use the objects that we made. In order to make these objects more flexible, we can create an object like we would a function, pass in parameters, and create this. placeholders for these parameters.
function Person(name, age, city) {
    this.name = name;
    this.age = age;
    this.city = city;
}

// Creating instances of the Person object using the constructor
let person01 = new Person("John", 30, "New York");
let person02 = new Person("Jane", 25, "London");

console.log("person1",person01); // Output: Person { name: 'John', age: 30, city: 'New York' }
console.log("person01.name",person01.name)
console.log("person1",person02); // Output: Person { name: 'Jane', age: 25, city: 'London' }
console.log("person02.city",person02.city)

function Book(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
    this.getInfo = function() {
        return `${this.title} by ${this.author} (${this.year})`;
    };
}

// Creating instances of the Book object using the constructor
let book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald", 1925);
let book2 = new Book("To Kill a Mockingbird", "Harper Lee", 1960);

console.log(book1); // Output: Book { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year: 1925, getInfo: [Function] }
console.log(book2); // Output: Book { title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960, getInfo: [Function] }

console.log(book1.getInfo()); // Output: The Great Gatsby by F. Scott Fitzgerald (1925)
console.log(book2.getInfo()); // Output: To Kill a Mockingbird by Harper Lee (1960)

// - more practice
function Book2(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
    this.getInfo = function() {
        return `${this.title} by ${this.author} (${this.year})`;
    };
}
Book2.prototype.getAge = function() {
    const currentYear = new Date().getFullYear(); // getMonth() Jan - 0 feb - 1
    const age = currentYear - this.year;
    return age;
};
let book3 = new Book2("Spiderman","IDK",1920);
console.log("book3",book3);
console.log(book3.getAge());

// More Object Methods (built in)
// - Create Method
const person10 = {
    greet() {
        console.log('Hello!');
    }
};

const john2 = Object.create(person10);
john2.greet(); // Output: Hello!
//the code creates an object person with a greet method, then creates another object john that inherits from person, and finally calls the greet method on john to display the greeting message "Hello!".

// - hasOwnProperty method
const person20 = {
    name: 'John',
    age: 30,
};

console.log(person20.hasOwnProperty('name')); // Output: true
console.log(person20.hasOwnProperty('age')); // Output: true
console.log(person20.hasOwnProperty('city')); // Output: false
// checking to see if that property exists in the object

// - create and hasOwnProperty method
const vehicle3 = {
    type: 'car',
    startEngine() {
        console.log('Engine started!');
    }
};

const tesla3 = Object.create(vehicle3);
tesla3.model = 'Model 3';

console.log(tesla3.hasOwnProperty('model')); // Output: true
console.log(tesla3.hasOwnProperty('type')); // Output: false (inherited property)
tesla3.startEngine(); // Output: Engine started!
// hasOwnProperty() checks if the property inside of () is directly owned by that object. Since tesla3 inherited type from vehicle 3, this means type isn't owned by tesla3, but by vehicle3, thus it returns False

// more Object practice
function createMovie(id, name, director, year) {
    let movie = Object.create(createMovie);

    movie.id = id;
    movie.name = name;
    movie.director = director;
    movie.year = year
    return movie;
}

createMovie.getInfo = function () {
    return `${this.director}, ${this.year}`;
};

let movieCreate = new createMovie(1,"Spiderman","IDK",2023);
console.log(movieCreate.getInfo());


// Primitive Types - in JavaScript are basic data types that store single values. They include number, string, boolean, null, undefined, and symbol. Primitive types are immutable, meaning their values cannot be changed after they are created. When assigning a primitive value to a variable or passing it as an argument to a function, a new copy of the value is created.
let name1 = "Alice";
let name2 = name1;

name2 = "Bob";

console.log(name1); // Output: Alice
console.log(name2); // Output: Bob
// Explanation for code above - In this example, name1 is assigned the value "Alice", and then name2 is assigned the value of name1. When name2 is changed to "Bob", it does not affect the value of name1. This is because strings are primitive types, and assigning a primitive value creates a new copy.

// Primitive Type Example
let num1 = 5;
let num2 = num1;

num2 = 10;

console.log(num1); // Output: 5
console.log(num2); // Output: 10

// Primitive Type Example
let bool1 = true;
let bool2 = bool1;

bool2 = false;

console.log(bool1); // Output: true
console.log(bool2); // Output: false

// Complex types - also known as reference types, are objects that can store multiple values and have properties and methods. Examples of complex types in JavaScript include objects, arrays, and functions. Complex types are mutable, meaning their values can be modified by changing their properties or elements.
let person11 = { 
    name: "Alice", 
    age: 30 
};
let person12 = person11;

person12.name = "Bob";

console.log(person11.name); // Output: Bob
console.log(person12.name); // Output: Bob
// explanation for code above: In this example, person11 is an object with a name property, and person12 is assigned the reference to person1. Modifying the name property of person12 also changes the name property of person11. This is because objects are complex types, and assigning a complex type creates a reference to the same object in memory.

// Complex Type Example
let arr1 = [1, 2, 3];
let arr2 = arr1;

arr2.push(4);

console.log(arr1); // Output: [1, 2, 3, 4]
console.log(arr2); // Output: [1, 2, 3, 4]

// Pass By value (integer - primitive)
function changeValue(x) {
    x = 5; // Assigning a new value to the parameter x
    console.log("Inside the function:", x);
}

let num3 = 10;
console.log("Before the function call:", num3); // Output: Before the function call: 10

changeValue(num3); // Passing the value of num to the function
console.log("After the function call:", num3); // Output: After the function call: 10

// Pass By Value (string - primitive)
function changeString(str) {
    str = "Hello, World!";
}

let message = "Goodbye";
changeString(message);

console.log("message",message); // Output: Goodbye

function capitalize(str) {
    str = str.toUpperCase();
    console.log(str); // Output: HELLO WORLD
}

let message2 = "Hello World";
capitalize(message2);
console.log("message2",message2); // Output: Hello World

// Pass By value (boolean - primitive)
function negate(bool) {
    bool = !bool;
    console.log(bool); // Output: false
}

let isTrue = true;
negate(isTrue);
console.log("isTrue",isTrue); // Output: true

// Pass By Reference
function updateAge(person) {
    person.age = 30;
    console.log("Inside updateAge - person.age",person.age)
}

let john = { name: "John", age: 25 };
console.log("Before updateAge - john.age",john.age)
updateAge(john);

console.log("After updateAge - john.age",john.age); // Output: 30
// Explanation for code above - In this example, an object john with properties name and age is passed into the updateAge function. Inside the function, the age property of the person object is modified, which affects the original john object. This is because objects are complex types, and they are passed by reference.

// Pass By Reference
function updateArray(arr) {
    arr.push(4);
    console.log(arr); // Output: [1, 2, 3, 4]
}

let numbers = [1, 2, 3];
updateArray(numbers);
console.log(numbers); // Output: [1, 2, 3, 4]

// Pass By reference - Object
function updateBookTitle(book) {
    book.info.title = 'New Book';
    console.log(book); // Output: { info: { title: 'New Book', pages: 200 } }
}

let myBook = { 
    info: { 
        title: 'Old Book', pages: 200 
    } 
};
updateBookTitle(myBook);
console.log("myBook",myBook); // Output: { info: { title: 'New Book', pages: 200 } }

// == and ===
// == - first compares the types of the two values its comparing, and if the types are different it will convert both to the same type. Although, == is not really recommended as its output might sometimes be unexpected
// === - It compares both the values and types of the operands, without any sort of type conversion. Will onlty return true if the type and value are the same. This is the most recommended one to use - similar to == in other languages.

let arr4 = [1, 2, 3];
let arr5 = [1, 2, 3];

console.log(arr4 == arr5); // Output: false
// returns False because even though there values and type are the same, since arrays are complex values, there memory is being compared, thus each array has a unique memory

let arr6 = [1, 2, 3];
let arr7 = [1, 2, 3];
console.log(arr6 === arr7); // Output: false
// Even though arr6 and arr7 have the same elements, they are distinct arrays in memory, resulting in false.

let num4 = 5;
let num5 = "5";
console.log(num4 == num5); // Output: true
// True, because it converted num4 to a string and then compared both values

let num6 = 5;
let num7 = "5";
console.log(num6 === num7); // Output: False
// False, because its different type and different value

// Callback function - is a function that is passed as an argument to another function and is invoked or called at a specific point within the receiving function. The purpose of a callback function is to be executed when a certain event occurs or when a particular task is completed
function greet(name, callback) {
    console.log("Hello, " + name + "!");
    callback();
}

function sayGoodbye() {
    console.log("Goodbye!");
}
greet("John", sayGoodbye); // Output: Hello, John! /n Goodbye!

function calculate(num1, num2, operation, callback) {
    let result;
    if (operation === "add") {
      result = num1 + num2;
    } else if (operation === "subtract") {
      result = num1 - num2;
    } 
    callback(result);
  }
  
  function handleResult(result) {
    console.log("Result:", result);
  }
  
  calculate(5, 3, "add", handleResult);
  calculate(5, 3, "subtract", handleResult);

// Higher Order Functions -  is a function that can accept other functions as arguments and/or return functions as results. In other words, it treats functions as values

// forEach - Higher order function (built in - javascript)
let numbers4 = [1, 2, 3, 4, 5];

numbers4.forEach(function(num) {
    console.log(num * 2);
});
// Output: 2 4 6 8 10
// forEach is looping over every single element in numbers4 and is calling the function(num) in each iteration

// Map - Higher Order Function (built in)
let numbers10 = [1, 2, 3, 4, 5];
let doubled2 = numbers10.map(function (num) {
return num * 2;
});
console.log(doubled2);
// Output: [2, 4, 6, 8, 10]
// The map function is used to create a new array doubled2 where each element of the original numbers10 array is multiplied by 2. The provided function (num) => num * 2 is called for each element, and the returned value is added to the new doubled2 array. So, the output will be [2, 4, 6, 8, 10], which is the original numbers array with each element doubled.

// Filter - Higher Order Function (built in)
let numbers11 = [1, 2, 3, 4, 5];
let evenNumbers = numbers11.filter(function (num) {
    return num % 2 === 0;
});
console.log(evenNumbers);
// Output: [2, 4]
//The filter function is used to create a new array evenNumbers that contains only the even numbers from the original numbers11 array. The provided function (num) => num % 2 === 0 is called for each element, and if the condition num % 2 === 0 evaluates to true, the element is included in the new evenNumbers array. In this case, only the numbers 2 and 4 pass the condition, so they are filtered into the new array.

// Reduce - Higher Order Function (built in)
//The reduce() function in JavaScript is used to perform a reduction/accumulation operation on an array. It iterates over the elements of an array and accumulates a single value based on the logic defined in the callback function.
let numbers12 = [1, 2, 3, 4, 5];
let sum = numbers12.reduce((accumulator, num) => {
    accumulator += num;
    return accumulator;
}, 0);
console.log(sum);
// Output: 15
//By setting the initial value as 0, the accumulation process starts from 0. The callback function then adds each element of the numbers array to the accumulator (accumulator + num), resulting in the sum of all the numbers in the array. If the initial value was not provided, the first element of the array (1) would be used as the initial value, and the sum would be different.