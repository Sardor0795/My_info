/*

Methods of primitives
JavaScript allows us to work with primitives (strings, numbers, etc.) as if they were objects. They also provide methods to call as such. We will study those soon, but first we’ll see how it works because, of course, primitives are not objects (and here we will make it even clearer).

A primitive as an object
Here’s the paradox faced by the creator of JavaScript:

There are many things one would want to do with a primitive, like a string or a number. It would be great to access them using methods.
Primitives must be as fast and lightweight as possible.
The solution looks a little bit awkward, but here it is:

Primitives are still primitive. A single value, as desired.
The language allows access to methods and properties of strings, numbers, booleans and symbols.
In order for that to work, a special “object wrapper” that provides the extra functionality is created, and then is destroyed.
The “object wrappers” are different for each primitive type and are called: String, Number, Boolean, Symbol and BigInt. Thus, they provide different sets of methods.


Try running it:

let str = "Hello";

str.test = 5; // (*)

alert(str.test);
Depending on whether you have use strict or not, the result may be:

undefined (no strict mode)
An error (strict mode).
Why? Let’s replay what’s happening at line (*):

When a property of str is accessed, a “wrapper object” is created.
In strict mode, writing into it is an error.
Otherwise, the operation with the property is carried on, the object gets the test property, but after that the “wrapper object” disappears, so in the last line str has no trace of the property.
This example clearly shows that primitives are not objects.

They can’t store additional data.


*/
