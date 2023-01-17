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

function expression
anonymous function

A function is a value representing an “action”
Regular values like strings or numbers represent the data.

A function can be perceived as an action.

We can pass it between variables and run when we want.

A Function Expression is created when the execution reaches it and is usable only from that moment.

A Function Declaration can be called earlier than it is defined.

That’s due to internal algorithms. When JavaScript prepares to run the script, it first looks for global Function Declarations in it and creates the functions. We can think of it as an “initialization stage”.

Another special feature of Function Declarations is their block scope.

In strict mode, when a Function Declaration is within a code block, it’s visible everywhere inside that block. But not outside of it.

let i;

function n() {
  i = function name(params) {
    console.log(55);
  };
}

n();

i();


block scope
func declaration in block scope

*/
