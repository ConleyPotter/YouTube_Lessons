// Part 04:

const another_function = (a_secret_variable) => {
  a_secret_variable *= 2;
  a_secret_variable -= 3;
  a_secret_variable += 5;
  a_secret_variable /= 2;
  console.log(a_secret_variable);
};

let the_variable = 2;
another_function(the_variable);

// what will the final output be? [Answer: 3]

// because what's happening here is basically just 4 mathematical operations, and it will then be logged
// to the console. The first operation takes the number and multiplies it by 2, then the next subtracts 3,
// then the next adds 5 and the next divides by 2. At the end the number is 3 after all the mutations if you were
// to pass in the number 2 as the parameter.

// another important concept to take in here is that, we could place line 11 above or below the declaration of the
// function, it doesn't matter, but it does. There are coding conventions and ways to arrange code to make it most
// readable for a human being. I would put the variable declaration at the bottom, right before you invoke the function,
// beccause it reminds the reader what is about to be plugged into this longer function. 

// Part 05: A More Complex Function

let another_variable = 100;

console.log(another_variable);

const func = (taking_in) => {
  taking_in *= 3;
  console.log(taking_in);
};

func(another_variable);

console.log(another_variable);

// I wanted to introduce this somewhat more simple funciton to illustrate a new concept called scope. 

// SCOPE:

// when you declare the variable *another_variable* on line 28, we logged it to the console and found the
// result to be 100, then we fed that variable to the function func. It was mutated inside the funciton, where
// we logged it to the console and saw the result of 300, and we also logged the variable to the console on line
// 39 and found the variable to be still mutated, outside of the funciton. 

// So upon mutating the variable, which was declared outside of the function, on the same LEVEL OF SCOPE as the
// function *func*, inside the function *func* we saw that the variable remained mutated upon exiting the LEVLE
// OF SCOPE of the funciton, which is one LEVEL OF SCOPE deeper, a programmer would say.

// We will later delve into why this is extremely relevent when writing code that is asynchronous, as JavaScript
// is an asynchronous language. Later we will learn why this is important and how we can take advantage of that 
// fact.

// For now, just think about the fact that the variable changed from 100 to 300 and stayed 300 after the function had
// executed.

