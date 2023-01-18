/*

There are 8 data types:

number for both floating-point and integer numbers,
bigint for integer numbers of arbitrary length,
string for strings,
boolean for logical values: true/false,
null – a type with a single value null, meaning “empty” or “does not exist”, --------
undefined – a type with a single value undefined, meaning “not assigned”,
object and symbol – for complex data structures and unique identifiers, we haven’t learnt them yet.

let n = 5;

console.log(!n);

Logical AND && and OR || perform short-circuit evaluation and then return the value where it stopped (not necessary true/false). Logical NOT ! converts the operand to boolean type and returns the inverse value.

alert( 0 == false ); // true
alert( 0 == '' ); // true
console.log('' == false);


The strict equality operator === doesn’t do the conversion: different types always mean different values for it.
Greater/less comparisons compare strings character-by-character, other types are converted to a number.


*/
