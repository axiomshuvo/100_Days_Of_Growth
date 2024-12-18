
/* 
    JavaScript Function:-

    @ A JavaScript function is a block of code designed to perform a particular task.
    @ function is defined with the function keyword, followed by a name, followed by parentheses ()
    @ The parentheses may include parameter names separated by commas: (parameter1, parameter2, ...)

    # With functions you can reuse code
    # You can write code that can be used many times.
    # You can use the same code with different arguments, to produce different results.

*/

/*

? Function parameters are listed inside the parentheses () in the function definition.
! Function arguments are the values received by the function when it is invoked.
@ Inside the function, the arguments (the parameters) behave as local variables.

*/ 

function name(parameter1,parameter2){
    //work to done
}
// # now invoke the function
     name();



function sleep(name,time){
    console.log(name +" is sleeping from "+ time);
}
// # not work untill call or invoke
// console.log("Arron is sleeping from 10pm");

sleep("arron","11 pm");
sleep("Micheal","12 am");
sleep("John","10.30 pm");
sleep("Andy","1.30pm");




/*
# Funcrion Return

@ When JavaScript reaches a return statement, the function will stop executing.


# If the function was invoked from a statement, JavaScript will "return" to execute the code after the invoking statement.
? means after the function has run, JavaScript goes back to the place where the function was called and continues running the code from that point onward.

#Functions often compute a return value. The return value is "returned" back to the "caller":
? In JavaScript, if a function doesn’t have a return statement, it automatically returns undefined when it finishes running. This means that the function doesn’t send any meaningful value back to the place where it was called.

$ When JavaScript encounters a function without a return statement, it assumes the function has nothing to send back and assigns the special value undefined. This is the default return value for functions that don’t use return.

*/


// # Here Function is called, the return value will end up in x

let x = myFunction(4, 3);

function myFunction(a, b) {
/* 
@    Function returns the product of a and b
*/

  return a * b;
}


/* 
    # FUNCTION INVOKE 
  @ The () operator invokes (calls) the function:
  ?Accessing a function with incorrect parameters can return an incorrect answer:

  !Accessing a function without () returns the function and not the function result:
    

 */

  function toCelsius(fahrenheit) {
    return (5/9) * (fahrenheit-32);
  }

  let value = toCelsius;
  document.getElementById("demo").innerHTML = value;

  let root = toCelsius(77);
  document.getElementById("demo2").innerHTML = root;



/* 
  ? As you see from the examples above, toCelsius refers to the function object,
  ? and toCelsius() refers to the function result.
*/



/* 
    @ Functions can be used the same way as you use variables, in all types of formulas, assignments, and calculations.

*/

// ? let text = "The temperature is " + toCelsius(77) + " Celsius";

// ! Variables declared within a JavaScript function, become LOCAL to the function.



