/*

There’s a base set of inherently reachable values, that cannot be deleted for obvious reasons.

For instance:

The currently executing function, its local variables and parameters.
Other functions on the current chain of nested calls, their local variables and parameters.
Global variables.
(there are some other, internal ones as well)
These values are called roots.

Any other value is considered reachable if it’s reachable from a root by a reference or by a chain of references.

For instance, if there’s an object in a global variable, and that object has a property referencing another object, that object is considered reachable. And those that it references are also reachable. Detailed examples to follow.

There’s a background process in the JavaScript engine that is called garbage collector. It monitors all objects and removes those that have become unreachable.

Outgoing references do not matter. Only incoming ones can make an object reachable. So, John is now unreachable and will be removed from the memory with all its data that also became unaccessible.

*/