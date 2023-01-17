/*

Function is a value

Please note that the last line does not run the function, because there are no parentheses after sayHi. There are programming languages where any mention of a function name causes its execution, but JavaScript is not like that.

Surely, a function is a special value, in the sense that we can call it like sayHi().

We can copy a function to another variable:

function sayHi() {
  console.log("Hello");
  return 5
}

let func = sayHi();

sayHi();
console.log(func);

func dec and func ex works

The answer is simple: a Function Expression is created here as function(…) {…} inside the assignment statement: let sayHi = …;. The semicolon ; is recommended at the end of the statement, it’s not a part of the function syntax.

The semicolon would be there for a simpler assignment, such as let sayHi = 5;, and it’s also there for a function assignment.

*/
