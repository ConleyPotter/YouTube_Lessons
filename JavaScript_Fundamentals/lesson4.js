// Lesson 4, Part 01: 

// In this lesson we will be going over the String data type in more detail.
// The string, like I've already stated, is a data type that is dilneated 
// by the quotation mark, and it holds words or characters. The most common
// type of string when you're working with data coming from apps and 
// websites would be words from comments, titles, post bodies, etc. 

const comment_1 = "Thanks for uploading your last video!";

const comment_2 = "Loved something"; 

// Now what if we wanted to find out how long a string was, or in this case
// how long are the comments? If we wanted to find out the length of the string
// we could use the string's .length method to figure out its length in 
// characters.

console.log(comment_1.length);
console.log(comment_2.length);

// When we logged the result to the console on lines 18 and 19, we would see the length
// in characters of the strings from lines 9 and 10. The lengths are 37 and 8 respectively. 

// So what if, introducing a new concept for a second, we wanted to find out if one of those
// strings had a longer or shorter length than another. We could use the greater than
// or lesser than operators to find out.

console.log(comment_1.length > comment_2.length);
console.log(comment_1.length < comment_2.length);

// here we will see that the answers that are logged to the console are true and false respectively. 
// We see then that the result of an operation can be more than just numbers. It can also be 
// other types of data, like booleans: true or false.

// Part 02: String Operations

// So what if we wanted to perform an operation on a string? That is entirely
// possible. So here we will perform an operation on a string which will return 
// just a portion of the string

console.log(comment_1.slice(0, 6));
console.log(comment_2.slice(0, 5));
console.log(comment_2.slice(6, comment_2.length));

// So what's happening on lines 41-43 is that we are logging to the screen the results of a
// string operation called slice. We are taking just a slice of the strings from lines 9 and 11.
// we are telling the slice method from which index to which index to take the slice. 

// So for example on line 41, we take just the slice from 0 to 6, or the first word of the 
// comment. On line 2, we do the same thing, take the first word of the comment comment_2. 
// And on line 43, I used a bit of trick by going from the index 6 to THE END OF THE STRING
// by saying going until the length of the string as the second index. 
// There I used the length operator to do that.

// So strings can have operations performed on them just like numbers. There are many many other
// string operations, and even if you can't exactly see why yet, there are many important
// applications of those operations when performed on strings. There are operations
// far more powerful than just a fancy word counter. 

