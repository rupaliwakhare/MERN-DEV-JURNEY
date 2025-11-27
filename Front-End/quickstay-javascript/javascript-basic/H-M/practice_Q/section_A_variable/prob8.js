// 8. What is block scope?

// Block scope refers to the visibility and accessibility of variables within a specific block of code,
// typically defined by {} curly braces in JavaScript.
//  Variables declared with let and const are block-scoped,
//   meaning they are only accessible inside the block where they were defined.

{
  let x = 10;
  console.log(x); //output 10
}
// console.log(x); // Error: x is not defined
// On the other hand, variables declared with var are function-scoped,
//  meaning they are accessible throughout the function but not necessarily confined to a block.
