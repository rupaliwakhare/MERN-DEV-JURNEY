// 33. What is the difference between `==` and `===` in JavaScript?



// == (Loose Equality)
// Compares values but allows type conversion (coercion).

// If the types don’t match, JavaScript tries to convert them before comparing.

let a = 5;
let b = "5"
console.log(a == b); 
// true


// === (Strict Equality)
// Compares both the value and the type.

// If the types are different, it returns false without conversion.


let x = 56;
let y = "40";
console.log(x === y);

// output
// false
