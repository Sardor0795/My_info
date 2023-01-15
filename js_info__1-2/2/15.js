/*

Local variables
A variable declared inside a function is only visible inside that function.

Outer variables
A function can access an outer variable as well

shadow the var

Global variables
Variables declared outside of any function, such as the outer userName in the code above, are called global.

Global variables are visible from any function (unless shadowed by locals).

It’s a good practice to minimize the use of global variables. Modern code has few or no globals. Most variables reside in their functions. Sometimes though, they can be useful to store project-level data.

function name(params) {
  console.log(params);
}

name();


The directive return can be in any place of the function. When the execution reaches it, the function stops, and the value is returned to the calling code (assigned to result above).

It is possible to use return without a value. That causes the function to exit immediately.


function doNothing() { * empty * }

alert( doNothing() === undefined ); // true
An empty return is also the same as return undefined:

function doNothing() {
  return;
}

alert( doNothing() === undefined ); // true


Never add a newline between return and the value


That doesn’t work, because JavaScript assumes a semicolon after return. That’ll work the same as:

return;
 (some + long + expression + or + whatever * f(a) + f(b))
So, it effectively becomes an empty return.

If we want the returned expression to wrap across multiple lines, we should start it at the same line as return. Or at least put the opening parentheses there as follows:

return (
  some + long + expression
  + or +
  whatever * f(a) + f(b)
  )
And it will work just as we expect it to.

One function – one action

There exist many well-known function prefixes like create…, show…, get…, check… and so on. Use them to hint what a function does.

*/
