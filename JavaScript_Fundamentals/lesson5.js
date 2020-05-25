// Part 03: A More Powerful (?) String Operation

let comment_3 = "This is another comment.";

const finder = (string, word_to_find) => {
  console.log(string.indexOf(word_to_find));
};

finder(comment_3, "another");  
console.log(comment_3.indexOf("comment"));

// On line 62 I setup another comment constant variable called comment-3 to hold
// a new string, which is a comment. Then I set up a function called finder which
// is basically just a wrapper function for the index of string operation.
// You can see on line 65 how I just take the string passed in to the function
// and feed the indexOf string operation the word we want to be found, and
// it will spit the result to the console.

// The result will be a number, and that number will be the index of the beginning of the
// word you put intot he function word_to_find.

// I also showed another way to do that exact some operation without using the wrapper
// function, finder. That's on line 69.

// Part 04: Let's Wrap It Up and Make it Tougher

let comment_4 = "Here's one comment";
let comment_5 = "Here, I'll leave you this one comment.";
let comment_6 = "Hey nice video.";

// Ok so we have these three comments here, two with the word 'one' in
// them, so now we're going to compare where the occurence of the word
// 'one' takes place in these comments, or if the word occurs at all.

const finder_IS_ONE_IN_WORD = (comment) => {
  if (comment.includes("one")) {
    console.log(comment.indexOf("one"));
  } else {
    console.log("That comment does not contain the word 'one'.");
  }
};

finder_IS_ONE_IN_WORD(comment_4); // -> 7
finder_IS_ONE_IN_WORD(comment_5); // -> 26
finder_IS_ONE_IN_WORD(comment_6); // -> That comment does not contain the word 'one'.

// Part 05: Expanding with a new String Operation

let comment_7 = "I don't like your video.";
let comment_8 = "I don't think JavaScript is cool.";
let comment_9 = "I love JavaScript and your videos!";

// Here are three more comments. We want to find out, for starters, if the word
// "don't" is in the string, and if it is, we want to replace it with
// something more positive, like "do".

const finder_replacer = (comment) => {
  if (comment.includes("don't")) {
    return comment.replace("don't", "do");
  } else {
    return comment;
  }
};

console.log(finder_replacer(comment_7)); // -> "I do like your videos"
console.log(finder_replacer(comment_8)); // -> "I do think JavaScript is cool."
console.log(finder_replacer(comment_9)); // -> "I love JavaScript and your videos."

console.log(comment_9.replace("don't", "do"));

// You'll notice on lines 65-67 that I ran the comments 7-9 through our new
// finder_replacer function. And it did it's just successfully. If the 
// word "don't" was in the string, it replaced it with "do". Now I did something
// a bit peculiar on line 69. I just logged to the console what would happen
// if just ran the replace String Method on comment_9, which does not
// even include the word "don't". No errors are thrown when the file is run on 
// the console, and the original string is actually logged. Why, then, did I
// write the function with the if-else statements? 

// I did that because it will be more readable for future programmers coming
// to read our code. But I wanted to show you that JS is smart also. Even if I 
// did without those if-else statements, the replace method would not
// get confused, because it simply wouldn't find the "don't" keyword we fed it,
// and it would continue on instead of giving an error message. 