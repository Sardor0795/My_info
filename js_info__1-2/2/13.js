/*

Loops

A single execution of the loop body is called an iteration.

Any expression or variable can be a loop condition, not just comparisons: the condition is evaluated and converted to a boolean by while.

For instance, a shorter way to write while (i != 0) is while (i):

let i = 3;
while (i) { // when i becomes 0, the condition becomes falsy, and the loop stops
  alert( i );
  i--;
}


Curly braces are not required for a single-line body
If the loop body has a single statement, we can omit the curly braces {…}:

let i = 3;
while (i) alert(i--);


Inline variable declaration
Here, the “counter” variable i is declared right in the loop. This is called an “inline” variable declaration. Such variables are visible only inside the loop.

for (let i = 0; i < 3; i++) {
  alert(i); // 0, 1, 2
}
alert(i); // error, no such variable


for (;;) {
  // repeats without limits
}
Please note that the two for semicolons ; must be present. Otherwise, there would be a syntax error.



No break/continue to the right side of ‘?’
if (i > 5) {
  alert(i);
} else {
  continue;
}
…and rewrite it using a question mark:

(i > 5) ? alert(i) : continue; // continue isn't allowed here
…it stops working: there’s a syntax error.

This is just another reason not to use the question mark operator ? instead of if.

P.S. If num is null then num <= 100 is true, so without the 2nd check the loop wouldn’t stop if the user clicks CANCEL. Both checks are required.

*/
