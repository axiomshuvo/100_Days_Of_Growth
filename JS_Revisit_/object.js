/* 
! Javascript Object

# In real life, objects are things like: houses, cars, people, animals, or any other subjects.
# A real life car has properties like weight and color:
@ example: a Car objects have the same properties, but the values differ from car to car.


# A real life car has methods like start and stop:
@ Car objects have the same methods, but the methods are performed at different times.


*/


A Car Object

Properties	             Methods
	
car.name = Fiat          car.start()

car.model = 500          car.drive()

car.weight = 850kg       car.brake()

car.color = white	     car.stop()



// # JavaScript variables are containers for data values. 

let car = "Fiat";

// @ This code assigns a simple value (Fiat) to a variable named car:



/*

# Objects are variables too. But objects can contain many values.
@ It is a common practice to declare objects with the const keyword.

 */

const car2 = {type:"Fiat", model:"500", color:"white"};

// @ This code assigns many values (Fiat, 500, white) to an object named car:

/* 
! Define a JavaScript Object

# Using an Object Literal
# Using the new Keyword
# Using an Object Constructor
*/

{firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"}

/*

# An object literal is a list of name:value pairs inside curly braces {}

@ name:value pairs are also called key:value pairs.
@ object literals are also called object initializers.

 */

// ! Create an Object
// @ Spaces and line breaks are not important. An object initializer can span multiple lines:

const person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
  };

// ! or
// # first Create an Object then Add Properties

const person = {};

person.firstName = "John";
person.lastName = "Doe";
person.age = 50;
person.eyeColor = "blue";


/* 

? Using the new Keyword
@ This example create a new JavaScript object using new Object(), and then adds 4 properties:

*/

const person = new Object();

// Add Properties
person.firstName = "John";
person.lastName = "Doe";
person.age = 50;
person.eyeColor = "blue";

/* 
? But, there is no need to use new Object().
?For readability, simplicity and execution speed, use the object literal method.
 */

/* 

! Object Properties

# The named values, in JavaScript objects, are called properties.

  ? Property	Value
    firstName	John
    lastName	Doe
    age	        50
    eyeColor	blue


    $ Accessing Object Properties

    #You can access object properties in two ways:
    by concatenating the object name & property name together and other way as array index 
*/

    objectName.propertyName
    objectName["propertyName"]


/* 
    ! JavaScript Object Methods

    # Methods are actions that can be performed on objects.
    # Methods are function definitions stored as property values.
    
    
*/

const person = {
  firstName: "John",
  lastName : "Doe",
  id       : 5566,
  fullName : function() {
    return this.firstName + " " + this.lastName;
  }
};

/*
? In the example above, this refers to the person object:

@ this.firstName means the firstName property of person.
@ this.lastName means the lastName property of person.


*/


/*
! In JavaScript, Objects are King.

# Objects are containers for Properties and Methods.
# Properties are named Values.
# Methods are Functions stored as Properties.
# Properties can be primitive values, functions, or even other objects.

*/

/*
? All JavaScript values, except primitives, are objects.
! JavaScript Primitives

@ A primitive value is a value that has no properties or methods.
# A primitive data type is data that has a primitive value.
 #JavaScript defines 7 types of primitive data types:
        string
        number
        boolean
        null
        undefined
        symbol
        bigint

! Immutable

? Primitive values are immutable (they are hardcoded and cannot be changed).
@ if x = 3.14, you can change the value of x, but you cannot change the value of 3.14.

*/


/* 

! JavaScript Objects are Mutable

? Objects are mutable: They are addressed by reference, not by value.

*/

//Create an Object
const person = {
  firstName:"John",
  lastName:"Doe",
  age:50, eyeColor:"blue"
}

// Create a copy
const x = person;

// Change Age in both
x.age = 10;


/*
# The object x is not a copy of person. The object x is person.
? The object x and the object person share the same memory address.
@ Any changes to x will also change person:
*/