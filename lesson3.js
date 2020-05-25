// Types of Data in JavaScript:

// In JavaScript there are a few types of data, including, what we've been
// looking at primarily, numbers. There are also string, what would commonly
// be referred to as text or characters. Then there the other types of data like 
// booleans, Arrays, Objects, undefined, and null. These types of data, plus 
// basically comprise all the data types you will run into in JS. Reach out to us
// if you have encountered more!

const x = 300;
const y = "Three Hundred";
const z = true;

const a = [1, "two", 3];
const b = {
  "First Name": "Pro",
  "Last Name": "Squad",
};
const c = undefined;
const d = null;

// Let's go through these data types one by one. 

// On line 10 we have something we're very familiar with already, it's a number. It's the 
// number 300.

// On line 11, we have something new. This is a string. Here it says "Three Hundred", like that.
// String are case sensitive containers holding text of any kind. It can include many characters.
// I will go in depth on this later.

// On line twelve we declared the variable z and set it equal to...true? That's right, that's 
// a boolean, or basically either true or false. Those are the only options for a boolean.

// On line 14 we have another variable a that holds what's called an array. we will have a more 
// in depth session on arrays coming up soon. For now, suffice it to know that an array holds
// many different disparate pieces of data, which do not have to be the same type.

// On line 15 we start to define what is called an Object in JavaScript. An Object is a very
// useful data type, where you can store key-value pairs of information. We will go over 
// Objects more in depthly in another episode, but suffice it to know for now that an Object
// has keys, which usually help define the data to be found in their value. 

// On line 19 we have a variable called c which is set to the value undefined. You will almost
// rarely see people define a variable to undefined when they don't need to have the variable 
// assigned to anything for now, but know they want to change the value of that variable later.

// Finally on line 20, we define a vraible called d which is set to null. In practice, you will
// pretty much never see this done. Null is often thrown to the user when they've made a misitake
// somewehre in their code. You'll see it often, and wonder what is going wrong with your
// code. We will cover bug hunting in depth in another episode though, so no need to worry.