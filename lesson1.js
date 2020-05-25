// Lesson 01: Code as a Calculator:

// part 01:

// const x = 3 + 4;
// const y = 4 / 2;
// const z = 5 * 5;
// const a = 3 - 2;

// console.log(x); // => 7
// console.log(y); // => 2
// console.log(z); // => 25
// console.log(a); // => 1

// // part 02:

// const b = 3 + 4;
// const c = 4 / 2;
// const d = 3 - 2;
// const e = 5 * 5;

// const sum = b + c;
// const dividend = z / a;
// const remainder = x - z;
// const product = y * x;

// you can hold the result of an operation in variable names. Variables hold values, and as a programmer
// would say, variables in JS are passed by value:

// W3 Schools: 
// JavaScript arguments are passed by value: The function only gets to know the 
// values, not the argument's locations. If a function changes an argument's value, it does not change 
// the parameter's original value. Changes to arguments are not visible (reflected) outside the function.

// we can start to introduce a new building block of JavaScript in the next section: 

// Part 03:

let variable_to_mutate = 3;

const func = (variable_to_pass) => {

  variable_to_pass -= 2; // -> 1
  console.log(variable_to_pass);
};

func(variable_to_mutate); // -> ???

// Here we can see many new things going on. What is important to remember is the building blocks we've
// started with. So variable_to_mutate is 3 to begin with. Up until now we've been using the keyword
// *const* to declare variables, now we will be using the keyword *let* to declare this variable, for one key reason,
// we know that when we pass this variable into the function, we are going to mutate it, because of the way
// we named the variable, and because of the way the function is set up.

// after that we declare a function with the *const* keyword again, set it equal to what, as of JavaScirpt
// (ECMAScript 2015) or ES6, we would define this as a ES6 fat arrow function. => is the fat arrow
// the paramter of the funtion (the variable from outside the function that the we can operate on
// *inside* the function), is variable_to_pass

// inside the function, you can see that we are mutating the variable: variable_to_pass by setting it equal 
// to the product of the variable_to_pass and 3, that is what the *= operator means. In fact, that = sign
// can come after any basic math operator and mean a similar thing:

// variable_to_pass *= 3; // -> 9

// 

// on line 43 we pass the now mutated variable to console.log(), which then prints the result to the screen.
// to get this code to run, however, we must *invoke* the function on line 46.

// To summarize all the concepts in this lesson, we'll move on to Part 04:

