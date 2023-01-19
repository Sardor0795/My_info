/*

Objects
As we know from the chapter Data types, there are eight data types in JavaScript. Seven of them are called “primitive”, because their values contain only a single thing (be it a string or a number or whatever).

An object can be created with figure brackets {…} with an optional list of properties. A property is a “key: value” pair, where key is a string (also called a “property name”), and value can be anything.

An empty object (“empty cabinet”) can be created using one of two syntaxes:

let user = new Object(); // "object constructor" syntax
let user = {};  // "object literal" syntax
A property has a key (also known as “name” or “identifier”) before the colon ":" and a value to the right of it.

Computed properties
We can use square brackets in an object literal, when creating an object. That’s called computed properties.

let obj = {};

obj[5 + 5] = 10;

console.log(obj);


There’s a minor gotcha with a special property named __proto__. We can’t set it to a non-object value:

let obj = {};
obj.__proto__ = 5; // assign a number
alert(obj.__proto__); // [object Object] - the value is an object, didn't work as intended

let obj = {};
obj.__proto__.ll = 5;

console.log(obj.__proto__.ll);

let user = { name: "John", age: 30 };

alert( "age" in user ); // true, user.age exists
alert( "blabla" in user ); // false, user.blabla doesn't exist
Please note that on the left side of in there must be a property name. That’s usually a quoted string.

If we omit quotes, that means a variable should contain the actual name to be tested. For instance:

let user = { age: 30 };

let key = "age";
alert( key in user ); // true, property "age" exists

in vs undefined

Integer properties? What’s that?
The “integer property” term here means a string that can be converted to-and-from an integer without a change.

So, "49" is an integer property name, because when it’s transformed to an integer number and back, it’s still the same. But "+49" and "1.2" are not:

*/

// symbol in obj property?
// __proto__
